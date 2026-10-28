import React, { useEffect, useState } from "react";
import { Activity, AlertTriangle, Check, ChevronRight, Camera, Gauge, MonitorCog, Route, Sparkles, Users, Utensils, Wifi, XCircle } from "lucide-react";
import { MetricCard, StatusBadge, Detail, EmptyState } from "../components/ui.jsx";

export function CamerasPage({ cameraFeeds, cameraAnalysis, cameraBrain, actions }) {
  const [selectedCamera, setSelectedCamera] = useState("CAM-DINING-01");
  const [deviceStream, setDeviceStream] = useState(null);
  const [deviceError, setDeviceError] = useState("");
  const [deviceModel, setDeviceModel] = useState(null);
  const [deviceDetections, setDeviceDetections] = useState([]);
  const [deviceInsight, setDeviceInsight] = useState(null);
  const [deviceAnalyzing, setDeviceAnalyzing] = useState(false);
  const [virtualFeed, setVirtualFeed] = useState({
    id: "CAM-VIRTUAL-01",
    name: "Virtual entrance camera",
    zone: "Entrance",
    role: "entrance_count",
    source: "User video",
    video_url: "",
    license: "User-provided, consented, or royalty-free video",
    page_url: "",
    note: "Looped video treated as a virtual live camera."
  });
  const feeds = cameraFeeds?.feeds || [];
  const activeFeed = feeds.find((feed) => feed.id === selectedCamera) || feeds[0];
  const detections = cameraAnalysis?.camera_id === selectedCamera ? cameraAnalysis.detections || [] : [];
  const deviceVideoRef = React.useRef(null);
  const sourceCatalog = [
    {
      name: "Use this device camera",
      type: "Best live demo",
      url: "",
      detail: "Open the app on a phone/tablet and allow camera access. No CCTV API needed."
    },
    {
      name: "Pexels restaurant videos",
      type: "Better legal clips",
      url: "https://www.pexels.com/search/videos/restaurant%20people/",
      detail: "Download a clip, host it, then paste its video URL into Studio."
    },
    {
      name: "Pixabay restaurant people",
      type: "Royalty-free library",
      url: "https://pixabay.com/videos/search/restaurant%20people/",
      detail: "Large free library; useful for dining, queue, and kitchen demo clips."
    },
    {
      name: "MIVIA people counting",
      type: "Research dataset",
      url: "https://mivia.unisa.it/people-detection-dataset/",
      detail: "Overhead people-counting footage, better for entrance/queue logic than restaurant stock."
    },
    {
      name: "OpenDataCam",
      type: "Real CV path",
      url: "https://opendatacam.org/",
      detail: "Run local YOLO counting from a camera/video and send metadata to this backend."
    }
  ];

  useEffect(() => {
    if (deviceVideoRef.current && deviceStream) {
      deviceVideoRef.current.srcObject = deviceStream;
    }
  }, [deviceStream]);

  useEffect(() => () => {
    deviceStream?.getTracks().forEach((track) => track.stop());
  }, [deviceStream]);

  async function startDeviceCamera() {
    setDeviceError("");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment", width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false
      });
      setDeviceStream(stream);
    } catch (err) {
      setDeviceError(err.message || "Camera permission was denied.");
    }
  }

  function stopDeviceCamera() {
    deviceStream?.getTracks().forEach((track) => track.stop());
    setDeviceStream(null);
    setDeviceDetections([]);
    setDeviceInsight(null);
    setDeviceAnalyzing(false);
  }

  function buildDeviceInsight(predictions) {
    const people = predictions.filter((item) => item.class === "person");
    const chairs = predictions.filter((item) => item.class === "chair");
    const tables = predictions.filter((item) => item.class === "dining table");
    const orderObjects = predictions.filter((item) => ["cup", "bottle", "bowl", "fork", "knife", "spoon", "wine glass"].includes(item.class));
    const seatedEstimate = Math.min(people.length, Math.max(chairs.length, tables.length * 2));
    const standingEstimate = Math.max(0, people.length - seatedEstimate);
    const orderedSignal = people.length > 0 && tables.length > 0 && orderObjects.length > 0;
    const queueRisk = standingEstimate >= 4 ? "HIGH" : standingEstimate >= 2 ? "MEDIUM" : "LOW";
    const tableServiceSignal = orderedSignal
      ? "People near dining tables with cups/plates: likely ordered or currently eating."
      : people.length && tables.length
        ? "People near tables but few table objects detected: check if order is needed."
        : "No clear table-service signal.";
    return {
      people: people.length,
      seatedEstimate,
      standingEstimate,
      tables: tables.length,
      chairs: chairs.length,
      tableObjects: orderObjects.length,
      orderedSignal,
      tableServiceSignal,
      queueRisk,
      recommendation: queueRisk === "HIGH"
        ? "Entrance/waiting pressure is high. Assign host support."
        : orderedSignal
          ? "Monitor tables for food-running or check-back tasks."
          : "Keep camera scanning; no urgent camera-derived action."
    };
  }

  async function analyzeDeviceCamera() {
    if (!deviceVideoRef.current) return;
    setDeviceError("");
    setDeviceAnalyzing(true);
    try {
      const tf = await import("@tensorflow/tfjs");
      await import("@tensorflow/tfjs-backend-cpu");
      await tf.setBackend("cpu");
      await tf.ready();
      const model = deviceModel || await import("@tensorflow-models/coco-ssd").then((module) => module.load({ base: "lite_mobilenet_v2" }));
      setDeviceModel(model);
      const predictions = await model.detect(deviceVideoRef.current);
      const videoWidth = deviceVideoRef.current.videoWidth || 1280;
      const videoHeight = deviceVideoRef.current.videoHeight || 720;
      const useful = predictions
        .filter((item) => item.score >= 0.45 && ["person", "chair", "dining table", "cup", "bottle", "bowl", "fork", "knife", "spoon", "wine glass"].includes(item.class))
        .map((item) => ({
          label: item.class,
          confidence: item.score,
          x: (item.bbox[0] / videoWidth) * 100,
          y: (item.bbox[1] / videoHeight) * 100,
          w: (item.bbox[2] / videoWidth) * 100,
          h: (item.bbox[3] / videoHeight) * 100
        }));
      setDeviceDetections(useful);
      setDeviceInsight(buildDeviceInsight(predictions.filter((item) => item.score >= 0.45)));
    } catch (err) {
      setDeviceError(err.message || "Device camera AI analysis failed.");
    } finally {
      setDeviceAnalyzing(false);
    }
  }

  function updateVirtual(field, value) {
    setVirtualFeed((feed) => ({ ...feed, [field]: value }));
  }
  return (
    <div className="page-grid camera-grid">
      <section className="panel wide">
        <div className="panel-header">
          <div>
            <h2>Camera Projection</h2>
            <p>Use a real device camera, consented footage, or better legal datasets. Avoid random public CCTV streams.</p>
          </div>
          <div className="button-group">
            <button onClick={startDeviceCamera}><MonitorCog size={16} /> Device camera</button>
            {deviceStream ? <button onClick={stopDeviceCamera}><XCircle size={16} /> Stop</button> : null}
            {deviceStream ? <button className="primary-button" onClick={analyzeDeviceCamera}><Sparkles size={16} /> {deviceAnalyzing ? "Analyzing..." : "Analyze people"}</button> : null}
            <button disabled={!activeFeed} onClick={() => actions.analyzeCamera(selectedCamera)}><Sparkles size={16} /> Analyze frame</button>
            <button disabled={!activeFeed?.video_url} onClick={() => actions.cvAnalyze(activeFeed?.video_url, selectedCamera)}><Camera size={16} /> CV adapter</button>
            <button onClick={() => actions.trainCameraBrain()}><Gauge size={16} /> Train brain</button>
            <button onClick={() => actions.analyzeCameraBrain()}><Activity size={16} /> Analyze all</button>
            <button onClick={() => actions.simulateSensors()}><Wifi size={16} /> Push sensor events</button>
          </div>
        </div>
        {deviceStream ? (
          <div className="camera-player">
            <video ref={deviceVideoRef} autoPlay muted playsInline />
            <div className="live-camera-badge">LIVE DEVICE CAMERA</div>
            <div className="detection-layer">
              {deviceDetections.map((box, index) => (
                <span
                  key={`${box.label}-${index}`}
                  className="detection-box"
                  style={{ left: `${box.x}%`, top: `${box.y}%`, width: `${box.w}%`, height: `${box.h}%` }}
                >
                  {box.label} {Math.round(box.confidence * 100)}%
                </span>
              ))}
            </div>
          </div>
        ) : activeFeed ? (
          <div className="camera-player">
            <video key={activeFeed.id} src={activeFeed.video_url} autoPlay muted loop playsInline controls />
            <div className="detection-layer">
              {detections.map((box, index) => (
                <span
                  key={`${box.label}-${index}`}
                  className="detection-box"
                  style={{ left: `${box.x}%`, top: `${box.y}%`, width: `${box.w}%`, height: `${box.h}%` }}
                >
                  {box.label} {Math.round(box.confidence * 100)}%
                </span>
              ))}
            </div>
          </div>
        ) : <EmptyState icon={Camera} title="No video feed selected" text="Start the device camera or paste a legal video URL in Camera Feed Studio. The old stock videos were removed." />}
        {deviceError ? <p className="form-error camera-error">{deviceError}</p> : null}
        {deviceInsight ? (
          <div className="device-insight-grid">
            <MetricCard label="People" value={deviceInsight.people} detail={`${deviceInsight.seatedEstimate} seated est., ${deviceInsight.standingEstimate} standing est.`} icon={Users} tone="blue" />
            <MetricCard label="Tables seen" value={deviceInsight.tables} detail={`${deviceInsight.tableObjects} cups/plates/bottles`} icon={Utensils} tone="green" />
            <MetricCard label="Queue risk" value={deviceInsight.queueRisk} detail={deviceInsight.recommendation} icon={AlertTriangle} tone={deviceInsight.queueRisk === "HIGH" ? "red" : "amber"} />
            <div className="camera-ai-note">
              <b>{deviceInsight.orderedSignal ? "Ordered/eating signal detected" : "No strong ordered signal"}</b>
              <span>{deviceInsight.tableServiceSignal}</span>
            </div>
          </div>
        ) : null}
      </section>
      <section className="panel">
        <div className="panel-header"><h2>Feeds</h2></div>
        <div className="camera-list">
          {feeds.map((feed) => (
            <button key={feed.id} className={feed.id === selectedCamera ? "selected" : ""} onClick={() => setSelectedCamera(feed.id)}>
              <b>{feed.name}</b>
              <span>{feed.zone} - {feed.source}</span>
            </button>
          ))}
        </div>
        {activeFeed && (
          <div className="detail-list camera-details">
            <Detail label="Mode" value={activeFeed.kind} />
            <Detail label="License" value={activeFeed.license} />
            <Detail label="AI truth" value="Video is real; boxes/events are simulated." />
            <Detail label="Production" value="Use RTSP/OpenDataCam/Axis/Camlytics metadata." />
          </div>
        )}
      </section>
      <details className="panel full camera-tools">
        <summary>Camera Feed Studio</summary>
        <div className="panel-header">
          <div>

            <p>Use real restaurant videos as legal virtual live cameras. The system loops the video, analyzes metadata, and can push events into the digital twin.</p>
          </div>
          <div className="button-group">
            <button onClick={() => actions.saveVirtualCamera(virtualFeed)}><Check size={16} /> Save feed</button>
            <button className="primary-button" onClick={() => actions.analyzeVirtualCamera(virtualFeed)}><Sparkles size={16} /> Analyze & generate event</button>
          </div>
        </div>
        <div className="studio-grid">
          <div className="studio-form">
            <label className="field">Camera ID
              <input value={virtualFeed.id} onChange={(e) => updateVirtual("id", e.target.value)} />
            </label>
            <label className="field">Name
              <input value={virtualFeed.name} onChange={(e) => updateVirtual("name", e.target.value)} />
            </label>
            <label className="field">Zone
              <select value={virtualFeed.zone} onChange={(e) => updateVirtual("zone", e.target.value)}>
                <option value="Entrance">Entrance</option>
                <option value="Waiting">Waiting</option>
                <option value="Dining">Dining</option>
                <option value="Service">Service</option>
                <option value="Kitchen">Kitchen</option>
              </select>
            </label>
            <label className="field">Role
              <select value={virtualFeed.role} onChange={(e) => updateVirtual("role", e.target.value)}>
                <option value="entrance_count">Entrance count</option>
                <option value="queue_depth">Queue depth</option>
                <option value="table_occupancy">Table occupancy</option>
                <option value="service_flow">Service flow</option>
                <option value="kitchen_load">Kitchen load</option>
              </select>
            </label>
            <label className="field full-field">Video URL
              <input value={virtualFeed.video_url} onChange={(e) => updateVirtual("video_url", e.target.value)} placeholder="Paste a direct .mp4/.webm URL, or use device camera above" />
            </label>
            <label className="field">Source
              <input value={virtualFeed.source} onChange={(e) => updateVirtual("source", e.target.value)} />
            </label>
            <label className="field">License / usage note
              <input value={virtualFeed.license} onChange={(e) => updateVirtual("license", e.target.value)} />
            </label>
          </div>
          <div className="studio-preview">
            {virtualFeed.video_url ? (
              <video key={virtualFeed.video_url} src={virtualFeed.video_url} autoPlay muted loop playsInline controls />
            ) : (
              <div className="empty-video-slot">
                <Camera size={30} />
                <b>No default video</b>
                <span>Use device camera, your own recording, or a legal direct video URL.</span>
              </div>
            )}
            <div className="studio-note">
              <b>Safe demo path</b>
              <p>Use stock clips, your own recordings, or consented venue footage. Avoid random public CCTV streams because they are unstable and may expose private customers.</p>
            </div>
          </div>
        </div>
        {cameraAnalysis?.feed && (
          <div className="analysis-summary">
            <MetricCard label="People detected" value={cameraAnalysis.people_count ?? 0} detail={`${cameraAnalysis.guest_count ?? 0} guests, ${cameraAnalysis.staff_count ?? 0} staff`} icon={Users} tone="blue" />
            <MetricCard label="Signal" value={cameraAnalysis.table_occupancy_signal || "LOW"} detail="virtual camera metadata" icon={Gauge} tone="amber" />
            <MetricCard label="Twin updated" value={cameraAnalysis.applied_to_digital_twin ? "YES" : "NO"} detail={cameraAnalysis.generated_event?.event_type || "analysis only"} icon={Activity} tone={cameraAnalysis.applied_to_digital_twin ? "green" : "blue"} />
          </div>
        )}
      </details>
      <details className="panel full camera-tools">
        <summary>Better Camera Sources</summary>
        <div className="panel-header">
          <div>

            <p>These are safer and more credible than random restaurant CCTV links.</p>
          </div>
        </div>
        <div className="source-catalog">
          {sourceCatalog.map((item) => (
            <article key={item.name} className="source-card">
              <StatusBadge tone={item.type.includes("Best") ? "green" : item.type.includes("dataset") ? "blue" : "amber"}>{item.type}</StatusBadge>
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
              {item.url ? <a href={item.url} target="_blank" rel="noreferrer">Open source <ChevronRight size={14} /></a> : <button onClick={startDeviceCamera}>Start camera</button>}
            </article>
          ))}
        </div>
      </details>
      <details className="panel full camera-tools">
        <summary>Centralized Camera Brain</summary>
        <div className="panel-header"></div>
        <div className="metrics-grid">
          <MetricCard label="Brain status" value={cameraBrain?.last_analysis?.status || (cameraBrain?.profile?.trained ? "TRAINED" : "UNTRAINED")} detail="fused camera state" icon={Activity} tone="blue" />
          <MetricCard label="People seen" value={cameraBrain?.last_analysis?.total_people ?? 0} detail="all cameras combined" icon={Users} tone="green" />
          <MetricCard label="Line crossings" value={cameraBrain?.last_analysis?.line_crossings ?? 0} detail="movement pressure" icon={Route} tone="amber" />
          <MetricCard label="Samples" value={cameraBrain?.profile?.samples_seen ?? 0} detail="training metadata samples" icon={Gauge} tone="blue" />
        </div>
        <div className="brain-recommendations">
          {(cameraBrain?.last_analysis?.recommendations || ["Train and analyze all cameras to get central recommendations."]).map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </details>
      <details className="panel full camera-tools">
        <summary>Camera Integration Reality</summary>
        <div className="panel-header"></div>
        <div className="reality-grid">
          <article>
            <b>Working now</b>
            <p>Real videos display in the app. Sensor events and object boxes are generated by the simulation pipeline.</p>
          </article>
          <article>
            <b>Production path</b>
            <p>Run YOLO/ByteTrack/OpenDataCam or use Axis/Camlytics people-counting APIs, then post metadata to <code>/sensors/webhook</code>.</p>
          </article>
          <article>
            <b>Why metadata</b>
            <p>Restaurant cameras may contain private customer imagery, so the app should ingest counts/events rather than store raw video.</p>
          </article>
        </div>
      </details>
    </div>
  );
}
