"use client";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-[2] overflow-hidden"
      style={{ padding: "160px 0", background: "linear-gradient(120deg,#3B1078 0%,#6C3CE1 48%,#7C3AED 100%)" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 18% 20%,rgba(245,158,11,.34),transparent 62%),radial-gradient(ellipse 50% 60% at 84% 78%,rgba(255,255,255,.2),transparent 60%),radial-gradient(ellipse 60% 70% at 60% 10%,rgba(43,18,99,.55),transparent 66%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 60% 70% at 50% 50%,#000,transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 70% at 50% 50%,#000,transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute overflow-hidden pointer-events-none"
        style={{
          top: 0,
          bottom: 0,
          left: 0,
          width: "20%",
          background:
            "linear-gradient(90deg,transparent,rgba(255,255,255,.16),transparent)",
          animation: "sweep 7s ease-in-out infinite",
        }}
      />
      <div
        className="relative mx-auto text-center"
        style={{ width: "min(1360px,92vw)" }}
      >
        <h2
          className="font-orbitron font-black m-0"
          data-reveal
          style={{
            fontSize: "clamp(38px,6vw,84px)",
            lineHeight: 1,
            letterSpacing: "-.03em",
            color: "#fff",
            textShadow: "0 0 60px rgba(0,0,0,.35)",
          }}
        >
          Let&apos;s Build Together
        </h2>
        <p
          className="mx-auto"
          data-reveal
          style={{
            marginTop: 30,
            maxWidth: "52ch",
            fontSize: 18,
            lineHeight: 1.75,
            color: "rgba(255,255,255,.84)",
          }}
        >
          Tell us what your operation is fighting with. We&apos;ll tell you honestly
          whether it needs software, and what it would cost.
        </p>
        <div
          data-reveal
          className="flex justify-center flex-wrap"
          style={{ gap: 18, marginTop: 50 }}
        >
          <a
            href="mailto:hello@owlex.dev"
            data-magnetic
            className="relative overflow-hidden"
            style={{
              padding: "22px 50px",
              background: "#0A0A0F",
              color: "#fff",
              fontFamily: "'Orbitron',sans-serif",
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: ".26em",
              textTransform: "uppercase",
              boxShadow: "0 22px 52px rgba(10,10,15,.5)",
            }}
          >
            <span
              className="absolute inset-0"
              style={{
                width: "30%",
                background:
                  "linear-gradient(90deg,transparent,rgba(245,158,11,.5),transparent)",
                animation: "sweep 3.6s ease-in-out infinite",
              }}
            />
            <span className="relative">Book a Survey</span>
          </a>
          <a
            href="tel:+10000000000"
            data-magnetic
            style={{
              padding: "22px 50px",
              border: "1px solid rgba(255,255,255,.5)",
              color: "#fff",
              fontFamily: "'Orbitron',sans-serif",
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: ".26em",
              textTransform: "uppercase",
            }}
          >
            Talk to an Engineer
          </a>
        </div>
      </div>
    </section>
  );
}
