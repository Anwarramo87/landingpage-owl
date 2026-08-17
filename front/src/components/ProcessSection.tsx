"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "Survey",
    description:
      "Two weeks inside your operation. We map the processes, the data and the workarounds people have quietly invented, then price the work honestly.",
  },
  {
    num: "02",
    title: "Build",
    description:
      "Two-week increments, a working environment from day one, and a named senior engineer who stays on the project from kickoff to handover.",
  },
  {
    num: "03",
    title: "Hand Over",
    description:
      "Migration, training and documentation, then the repository is yours. Support continues only for as long as you want it to.",
  },
];

export default function ProcessSection() {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathReady, setPathReady] = useState(false);

  useEffect(() => {
    const el = pathRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !pathReady) {
          setPathReady(true);
          const L = el.getTotalLength();
          el.style.strokeDasharray = String(L);
          el.style.strokeDashoffset = String(L);
          el.style.animation = "drawPath 2.2s cubic-bezier(.3,.8,.2,1) both";
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [pathReady]);

  return (
    <section id="process" className="relative z-[2]" style={{ padding: "0 0 160px" }}>
      <div
        aria-hidden="true"
        className="absolute font-orbitron font-black pointer-events-none"
        style={{
          top: -20,
          left: "2vw",
          fontSize: "clamp(120px,20vw,300px)",
          lineHeight: 0.8,
          color: "transparent",
          WebkitTextStroke: "1px rgba(167,139,250,.07)",
        }}
      >
        02
      </div>
      <div
        className="relative mx-auto"
        style={{ width: "min(1360px,92vw)" }}
      >
        <div
          className="font-orbitron font-semibold mb-[22px]"
          data-reveal
          style={{ fontSize: 11, letterSpacing: ".4em", color: "#F59E0B" }}
        >
          02 — HOW IT WORKS
        </div>
        <h2
          className="font-orbitron font-black m-0 mb-[84px]"
          data-reveal
          style={{
            fontSize: "clamp(32px,4.4vw,62px)",
            lineHeight: 1.02,
            letterSpacing: "-.03em",
            color: "#fff",
            maxWidth: "17ch",
          }}
        >
          From first call to production in three moves
        </h2>

        <svg
          viewBox="0 0 1200 150"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{ left: 0, right: 0, top: 190, width: "100%", height: 150, overflow: "visible" }}
        >
          <path
            ref={pathRef}
            d="M60 96 C 260 8, 380 150, 600 76 S 940 4, 1150 88"
            fill="none"
            stroke="url(#flightGrad)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="flightGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#4C1D95" />
              <stop offset="55%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
        </svg>

        <div
          className="relative grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))",
            gap: 44,
          }}
        >
          {steps.map((step, i) => (
            <div key={step.num} data-reveal>
              <div
                className="flex items-center justify-center font-orbitron font-black"
                style={{
                  width: 92,
                  height: 92,
                  border: i === 2 ? "1px solid rgba(245,158,11,.4)" : "1px solid rgba(167,139,250,.32)",
                  background: "rgba(10,10,15,.9)",
                  fontSize: 28,
                  color: i === 2 ? "#F59E0B" : "#A78BFA",
                  marginBottom: 34,
                  animation: `breathe 5s ease-in-out infinite ${i * 0.8}s`,
                  boxShadow: "none",
                }}
              >
                {step.num}
              </div>
              <h3
                className="font-orbitron font-semibold m-0 mb-3.5"
                style={{ fontSize: 20, color: "#fff" }}
              >
                {step.title}
              </h3>
              <p
                className="m-0"
                style={{
                  fontSize: 15,
                  lineHeight: 1.85,
                  color: "rgba(226,217,243,.6)",
                  maxWidth: "34ch",
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
