import StatusBadge from "../components/status-indicator-example/StatusBadge";

function StatusIndicatorDemoPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Status Indicator Demo</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <StatusBadge status="online" />
        <StatusBadge status="away" />
        <StatusBadge status="offline" />

        <StatusBadge status="online" label="Ivan" />
        <StatusBadge status="away" label="Maria" />
        <StatusBadge status="offline" label="Georgi" />
      </div>
    </div>
  );
}

export default StatusIndicatorDemoPage;