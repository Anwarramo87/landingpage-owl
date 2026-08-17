"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 240, suffix: "+", label: "Projects Shipped", bar: 94 },
  { value: 86, suffix: "", label: "Enterprise Clients", bar: 72 },
  { value: 12, suffix: "", label: "Years Building", bar: 60 },
  { value: 98, suffix: "%", label: "Client Retention", bar: 98 },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const dur = 1900;
          const step = (t: number) => {
            const p = Math.min((t - t0) / dur, 1);
            setCount(
              Math.round(target * (1 - Math.pow(1 - p, 3)))
            );
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-orbitron font-black" style={{ fontSize: "clamp(42px,4.8vw,66px)", lineHeight: 1, color: "#fff", textShadow: "0 0 34px rgba(124,58,237,.6)" }}>
      {count}
      {suffix && <span style={{ color: "#F59E0B" }}>{suffix}</span>}
    </span>
  );
}

function StatBar({ percent }: { percent: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(percent), 200);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [percent]);

  return (
    <div
      ref={ref}
      style={{ marginTop: 20, height: 2, background: "rgba(167,139,250,.14)" }}
    >
      <div
        style={{
          height: 2,
          width: `${width}%`,
          background: "linear-gradient(90deg,#6C3CE1,#F59E0B)",
          transformOrigin: "left center",
          transition: "width 1.8s cubic-bezier(.2,.8,.2,1)",
        }}
      />
    </div>
  );
}

export default function StatsSection() {
  return (
    <section id="stats" className="relative z-[2]" style={{ padding: "0 0 150px" }}>
      <div
        className="relative mx-auto"
        style={{
          width: "min(1360px,92vw)",
          padding: 1,
          background:
            "linear-gradient(120deg,rgba(167,139,250,.4),rgba(245,158,11,.28),rgba(167,139,250,.12))",
        }}
      >
        <div
          className="relative overflow-hidden grid"
          style={{
            background:
              "linear-gradient(180deg,rgba(24,16,48,.9),rgba(10,10,15,.95))",
            gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              className="relative text-center"
              style={{
                padding: "58px 30px",
                borderRight:
                  i < stats.length - 1
                    ? "1px solid rgba(167,139,250,.12)"
                    : "none",
              }}
            >
              <CountUp target={s.value} suffix={s.suffix} />
              <div
                className="mt-4"
                style={{
                  fontSize: 11,
                  letterSpacing: ".3em",
                  textTransform: "uppercase",
                  color: "rgba(226,217,243,.5)",
                }}
              >
                {s.label}
              </div>
              <StatBar percent={s.bar} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
