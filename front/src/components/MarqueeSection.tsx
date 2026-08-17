"use client";

export default function MarqueeSection() {
  const items = "HR SYSTEMS ✦ ERP SOLUTIONS ✦ CUSTOM SOFTWARE ✦ DATA PLATFORMS ✦ ";
  const repeated = items + items;

  return (
    <div
      aria-hidden="true"
      className="relative z-[2] overflow-hidden"
      style={{
        borderTop: "1px solid rgba(167,139,250,.12)",
        borderBottom: "1px solid rgba(167,139,250,.12)",
        background: "rgba(76,29,149,.1)",
        padding: "22px 0",
      }}
    >
      <div
        className="flex items-center"
        style={{
          width: "max-content",
          gap: 64,
          animation: "marquee 30s linear infinite",
          fontFamily: "'Orbitron',sans-serif",
          fontWeight: 900,
          fontSize: "clamp(22px,3vw,40px)",
          letterSpacing: ".06em",
          whiteSpace: "nowrap",
          color: "transparent",
          WebkitTextStroke: "1px rgba(167,139,250,.45)",
        }}
      >
        {repeated.split("✦ ").map((segment, i) => (
          <span key={i} className="flex items-center" style={{ gap: 64 }}>
            <span>{segment.trim()}</span>
            <span
              style={{
                color: "#F59E0B",
                WebkitTextStroke: "0",
              }}
            >
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
