"use client";

const techItems = [
  "TYPESCRIPT",
  "REACT",
  "PYTHON",
  "GO",
  "POSTGRESQL",
  "KUBERNETES",
  "AWS",
  "TERRAFORM",
];

export default function TechStackSection() {
  return (
    <section id="stack" className="relative z-[2]" style={{ padding: "0 0 170px" }}>
      <div
        aria-hidden="true"
        className="absolute font-orbitron font-black pointer-events-none"
        style={{
          top: -40,
          right: "2vw",
          fontSize: "clamp(120px,20vw,300px)",
          lineHeight: 0.8,
          color: "transparent",
          WebkitTextStroke: "1px rgba(167,139,250,.07)",
        }}
      >
        04
      </div>
      <div
        className="relative mx-auto grid items-center"
        style={{
          width: "min(1360px,92vw)",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: 60,
        }}
      >
        <div>
          <div
            className="font-orbitron font-semibold mb-[22px]"
            data-reveal
            style={{ fontSize: 11, letterSpacing: ".4em", color: "#F59E0B" }}
          >
            04 — STACK
          </div>
          <h2
            className="font-orbitron font-black m-0 mb-6"
            data-reveal
            style={{
              fontSize: "clamp(32px,4.4vw,62px)",
              lineHeight: 1.02,
              letterSpacing: "-.03em",
              color: "#fff",
              maxWidth: "14ch",
            }}
          >
            Boring technology, chosen deliberately
          </h2>
          <p
            className="m-0"
            data-reveal
            style={{
              maxWidth: "40ch",
              fontSize: 16,
              lineHeight: 1.85,
              color: "rgba(226,217,243,.6)",
            }}
          >
            We pick tools your team can hire for in five years, not the ones
            trending this quarter. Every stack decision is written down, with
            the alternative we rejected and why.
          </p>
          <div
            data-reveal
            className="flex flex-wrap"
            style={{ gap: 10, marginTop: 34 }}
          >
            {["SOC 2 TYPE II", "GDPR BY DESIGN", "FULL IP HANDOVER"].map(
              (badge) => (
                <span
                  key={badge}
                  style={{
                    padding: "11px 18px",
                    border:
                      badge === "FULL IP HANDOVER"
                        ? "1px solid rgba(245,158,11,.34)"
                        : "1px solid rgba(167,139,250,.24)",
                    fontSize: 12,
                    letterSpacing: ".14em",
                    color:
                      badge === "FULL IP HANDOVER"
                        ? "#F59E0B"
                        : "rgba(226,217,243,.7)",
                  }}
                >
                  {badge}
                </span>
              )
            )}
          </div>
        </div>

        <div
          data-reveal
          className="relative flex items-center justify-center"
          style={{ height: 400, perspective: 1200 }}
        >
          <div
            className="absolute"
            style={{
              width: 230,
              height: 230,
              borderRadius: "50%",
              background:
                "radial-gradient(circle,rgba(124,58,237,.45),transparent 70%)",
              filter: "blur(30px)",
            }}
          />
          <div
            className="relative"
            style={{
              width: 230,
              height: 230,
              transformStyle: "preserve-3d",
              animation: "orbit 26s linear infinite",
            }}
          >
            {techItems.map((name, i) => {
              const angle = (i / techItems.length) * 360;
              const isAmber = name === "TERRAFORM";
              return (
                <span
                  key={name}
                  className="absolute flex items-center justify-center"
                  style={{
                    top: "50%",
                    left: "50%",
                    marginLeft: -60,
                    marginTop: -18,
                    width: 120,
                    height: 36,
                    border: isAmber
                      ? "1px solid rgba(245,158,11,.4)"
                      : "1px solid rgba(167,139,250,.35)",
                    background: "rgba(10,10,15,.72)",
                    fontFamily: "'Orbitron',sans-serif",
                    fontSize: 11,
                    letterSpacing: ".14em",
                    color: isAmber ? "#F59E0B" : "#E2D9F3",
                    transform: `rotateY(${angle}deg) translateZ(220px)`,
                  }}
                >
                  {name}
                </span>
              );
            })}
          </div>
          <img
            src="/owl-mascot.png"
            alt=""
            aria-hidden="true"
            width={360}
            height={480}
            loading="lazy"
            className="absolute"
            style={{
              width: 150,
              height: "auto",
              animation: "float 9s ease-in-out infinite",
              filter: "drop-shadow(0 14px 28px rgba(43,18,99,.8))",
            }}
          />
        </div>
      </div>
    </section>
  );
}
