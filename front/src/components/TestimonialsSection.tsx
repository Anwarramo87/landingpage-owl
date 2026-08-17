"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Owlex replaced four payroll systems with one. The first run covered eleven thousand people across six countries and reconciled to the cent.",
    name: "MARTA KOWALCZYK",
    role: "Group HR Director, Verdana Industries",
  },
  {
    quote:
      "We had been told an ERP migration would take three years. They cut over the last warehouse fourteen months in, without a day of downtime.",
    name: "DANIEL OSEI",
    role: "COO, Northbay Logistics",
  },
  {
    quote:
      "They wrote the platform our whole underwriting business runs on, then taught our team to own it. That second part is what nobody else offered.",
    name: "HELENA VOSS",
    role: "CTO, Arbor Mutual",
  },
];

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((prev) => (prev + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(t);
  }, []);

  const place = (i: number) => {
    const off = ((i - idx + testimonials.length) % testimonials.length);
    const d = off === 0 ? 0 : off === 1 ? 1 : -1;
    return {
      transform: `translateX(-50%) translateX(${d * 48}%) translateZ(${d === 0 ? 0 : -300}px) rotateY(${d * -28}deg) scale(${d === 0 ? 1 : 0.86})`,
      filter: d === 0 ? "none" : "opacity(.22) blur(1px)",
      zIndex: d === 0 ? 3 : 1,
      pointerEvents: (d === 0 ? "auto" : "none") as "auto" | "none",
    };
  };

  return (
    <section className="relative z-[2]" style={{ padding: "0 0 160px" }}>
      <div className="mx-auto" style={{ width: "min(1360px,92vw)" }}>
        <div
          className="font-orbitron font-semibold mb-14"
          data-reveal
          style={{ fontSize: 11, letterSpacing: ".4em", color: "#F59E0B" }}
        >
          03 — CLIENTS
        </div>

        <div
          className="relative"
          data-carousel
          style={{ height: 430, perspective: 1700 }}
        >
          {testimonials.map((t, i) => (
            <article
              key={i}
              data-slide={i}
              className="absolute top-1/2"
              style={{
                ...place(i),
                left: "50%",
                width: "min(700px,88vw)",
                padding: 1,
                background:
                  "linear-gradient(140deg,rgba(167,139,250,.45),rgba(245,158,11,.3))",
                transition:
                  "transform .95s cubic-bezier(.2,.7,.2,1),filter .95s",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                style={{
                  position: "relative",
                  padding: "56px 52px",
                  background:
                    "linear-gradient(170deg,rgba(24,16,48,.96),rgba(10,10,15,.96))",
                }}
              >
                <div
                  className="font-orbitron"
                  style={{
                    fontSize: 52,
                    lineHeight: 0.6,
                    color: "rgba(245,158,11,.5)",
                  }}
                >
                  &ldquo;
                </div>
                <p
                  className="m-0"
                  style={{
                    marginTop: 22,
                    marginBottom: 34,
                    fontSize: "clamp(20px,2.2vw,28px)",
                    lineHeight: 1.55,
                    color: "#fff",
                    fontWeight: 300,
                  }}
                >
                  {t.quote}
                </p>
                <div
                  className="font-orbitron"
                  style={{
                    fontSize: 13,
                    letterSpacing: ".22em",
                    color: "#A78BFA",
                  }}
                >
                  {t.name}
                </div>
                <div
                  className="mt-2"
                  style={{ fontSize: 13, color: "rgba(226,217,243,.5)" }}
                >
                  {t.role}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className="flex justify-center items-center"
          style={{ gap: 16, marginTop: 18 }}
        >
          <button
            onClick={() =>
              setIdx(
                (prev) =>
                  (prev - 1 + testimonials.length) % testimonials.length
              )
            }
            aria-label="Previous testimonial"
            className="flex items-center justify-center"
            style={{
              width: 52,
              height: 52,
              border: "1px solid rgba(167,139,250,.32)",
              background: "transparent",
              color: "#A78BFA",
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            ←
          </button>
          <div className="flex" style={{ gap: 8 }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Testimonial ${i + 1}`}
                style={{
                  width: i === idx ? 28 : 28,
                  height: 3,
                  border: 0,
                  padding: 0,
                  cursor: "pointer",
                  background:
                    i === idx ? "#F59E0B" : "rgba(167,139,250,.3)",
                  boxShadow:
                    i === idx ? "0 0 14px rgba(245,158,11,.8)" : "none",
                  transition: "background .3s,box-shadow .3s",
                }}
              />
            ))}
          </div>
          <button
            onClick={() =>
              setIdx((prev) => (prev + 1) % testimonials.length)
            }
            aria-label="Next testimonial"
            className="flex items-center justify-center"
            style={{
              width: 52,
              height: 52,
              border: "1px solid rgba(167,139,250,.32)",
              background: "transparent",
              color: "#A78BFA",
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
