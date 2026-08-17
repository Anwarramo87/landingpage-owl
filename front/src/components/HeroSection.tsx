"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function useTypewriter(text: string, speed = 38, delay = 0) {
  const [displayed, setDisplayed] = useState("");
  const done = useRef(false);
  useEffect(() => {
    done.current = false;
    let i = 0;
    const timeout = setTimeout(() => {
      const t = () => {
        if (done.current) return;
        setDisplayed(text.slice(0, ++i));
        if (i < text.length) setTimeout(t, speed + Math.random() * 36);
      };
      t();
    }, delay);
    return () => {
      done.current = true;
      clearTimeout(timeout);
    };
  }, [text, speed, delay]);
  return displayed;
}

export default function HeroSection() {
  const headline = useTypewriter("We Build The Future of Enterprise", 38, 800);
  const [owlTilt, setOwlTilt] = useState({ x: 0, y: 0 });
  const faceRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const posRef = useRef({ ox: 0, oy: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const face = faceRef.current;
      if (!face) return;
      const r = face.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = Math.max(-1, Math.min(1, (e.clientX - cx) / 520));
      const dy = Math.max(-1, Math.min(1, (e.clientY - cy) / 520));
      posRef.current.ox += (dx - posRef.current.ox) * 0.06;
      posRef.current.oy += (dy - posRef.current.oy) * 0.06;
      setOwlTilt({
        x: posRef.current.ox * 22,
        y: posRef.current.oy * 16,
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center"
      style={{ padding: "180px 0 90px" }}
    >
      <div
        className="mx-auto grid items-center"
        style={{
          width: "min(1360px,92vw)",
          gridTemplateColumns: "minmax(0,1.15fr) minmax(0,.85fr)",
          gap: 56,
        }}
      >
        <div>
          <div
            className="flex items-center mb-[30px]"
            data-reveal
            style={{ gap: 14 }}
          >
            <span style={{ width: 52, height: 1, background: "#F59E0B" }} />
            <span
              className="relative flex"
              style={{ width: 8, height: 8 }}
            >
              <span
                className="absolute inset-0 rounded-full"
                style={{
                  background: "#F59E0B",
                  animation: "pulse-dot 2s ease-in-out infinite",
                }}
              />
              <span
                className="absolute inset-0 rounded-full"
                style={{
                  border: "1px solid #F59E0B",
                  animation: "ripple-ring 2s ease-out infinite",
                }}
              />
            </span>
            <span
              className="font-orbitron font-semibold"
              style={{ fontSize: 11, letterSpacing: ".4em", color: "#A78BFA" }}
            >
              ENTERPRISE SOFTWARE STUDIO
            </span>
          </div>

          <h1
            className="font-orbitron font-black m-0"
            data-reveal
            style={{
              fontSize: "clamp(42px,6vw,88px)",
              lineHeight: 0.98,
              letterSpacing: "-.03em",
              color: "#fff",
              textWrap: "balance",
              background:
                "linear-gradient(100deg,#fff 20%,#E2D9F3 34%,#F59E0B 44%,#A78BFA 56%,#fff 70%)",
              backgroundSize: "140% 100%",
              backgroundPosition: "22% 0",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <span>{headline}</span>
            <span
              className="inline-block"
              style={{
                width: 4,
                height: ".8em",
                marginLeft: 9,
                background: "#F59E0B",
                verticalAlign: "-.04em",
                WebkitTextFillColor: "#F59E0B",
                boxShadow: "0 0 18px #F59E0B",
                animation: "caret 1s steps(1) infinite",
              }}
            />
          </h1>

          <p
            className="font-orbitron font-semibold m-0"
            data-reveal
            style={{
              marginTop: 36,
              fontSize: "clamp(13px,1.5vw,17px)",
              letterSpacing: ".2em",
              color: "#E2D9F3",
            }}
          >
            HR SYSTEMS{" "}
            <span style={{ color: "#F59E0B" }}>•</span> ERP SOLUTIONS{" "}
            <span style={{ color: "#F59E0B" }}>•</span> CUSTOM SOFTWARE
          </p>

          <p
            className="m-0"
            data-reveal
            style={{
              marginTop: 22,
              fontSize: 16,
              lineHeight: 1.8,
              color: "rgba(226,217,243,.6)",
              maxWidth: "50ch",
            }}
          >
            We design and engineer the systems large organisations depend on —
            payroll that never misses, supply chains that reconcile themselves,
            platforms built to your operating model rather than someone else&apos;s.
          </p>

          <div data-reveal className="flex flex-wrap" style={{ gap: 18, marginTop: 44 }}>
            <a
              href="#contact"
              data-magnetic
              className="relative overflow-hidden"
              style={{
                padding: "21px 46px",
                background: "linear-gradient(120deg,#6C3CE1,#7C3AED)",
                color: "#fff",
                fontFamily: "'Orbitron',sans-serif",
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: ".26em",
                textTransform: "uppercase",
                boxShadow: "0 0 38px rgba(108,60,225,.5)",
              }}
            >
              <span
                className="absolute inset-0"
                style={{
                  width: "30%",
                  background:
                    "linear-gradient(90deg,transparent,rgba(255,255,255,.5),transparent)",
                  animation: "sweep 3s ease-in-out infinite",
                }}
              />
              <span className="relative">Start Project</span>
            </a>
            <a
              href="#services"
              data-magnetic
              style={{
                padding: "21px 46px",
                border: "1px solid rgba(167,139,250,.4)",
                color: "#E2D9F3",
                fontFamily: "'Orbitron',sans-serif",
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: ".26em",
                textTransform: "uppercase",
                background: "rgba(108,60,225,.1)",
              }}
            >
              See Work
            </a>
          </div>

          <div
            data-reveal
            className="flex flex-wrap"
            style={{
              gap: 38,
              marginTop: 56,
              paddingTop: 30,
              borderTop: "1px solid rgba(167,139,250,.14)",
            }}
          >
            {[
              { value: "240", suffix: "+", label: "Systems shipped" },
              { value: "11", suffix: "", label: "Countries served" },
              { value: "98", suffix: "%", label: "Retention" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="font-orbitron font-black"
                  style={{ fontSize: 26, color: "#fff" }}
                >
                  {s.value}
                  {s.suffix && (
                    <span style={{ color: "#F59E0B" }}>{s.suffix}</span>
                  )}
                </div>
                <div
                  className="mt-[6px]"
                  style={{
                    fontSize: 11,
                    letterSpacing: ".24em",
                    textTransform: "uppercase",
                    color: "rgba(226,217,243,.45)",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={faceRef}
          className="relative flex items-center justify-center"
          style={{ minHeight: 460, perspective: 1100 }}
        >
          <div
            className="relative"
            style={{
              width: "min(470px,94%)",
              aspectRatio: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              willChange: "transform",
              transform: `translate3d(${owlTilt.x}px,${owlTilt.y}px,0) rotate(${owlTilt.x * 0.14}deg)`,
              transition: "transform .1s ease-out",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute rounded-full"
              style={{
                inset: "6%",
                background:
                  "radial-gradient(circle at 50% 42%,rgba(124,58,237,.42),rgba(76,29,149,.14) 48%,transparent 68%)",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute rounded-full"
              style={{
                inset: "2%",
                border: "1px solid rgba(226,217,243,.5)",
                boxShadow:
                  "0 0 34px rgba(167,139,250,.45),inset 0 0 40px rgba(124,58,237,.25)",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute rounded-full"
              style={{
                inset: "-7%",
                border: "1px dashed rgba(167,139,250,.18)",
                animation: "spin 60s linear infinite",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute rounded-full"
              style={{
                inset: "14%",
                border: "1px solid rgba(167,139,250,.12)",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute"
              style={{
                inset: "2%",
                animation: "spin 16s linear infinite",
              }}
            >
              <span
                className="absolute rounded-full"
                style={{
                  top: -4,
                  left: "50%",
                  width: 8,
                  height: 8,
                  marginLeft: -4,
                  background: "#F59E0B",
                  boxShadow: "0 0 16px #F59E0B",
                }}
              />
            </div>
            <Image
              src="/owl-mascot.png"
              alt="Owlex mascot: an owl in a purple astronaut suit"
              width={360}
              height={480}
              priority
              className="relative block"
              style={{
                width: "64%",
                height: "auto",
                animation: "float 8s ease-in-out infinite",
                willChange: "transform",
                filter: "drop-shadow(0 22px 40px rgba(43,18,99,.85))",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute rounded-full"
              style={{
                bottom: "9%",
                left: "50%",
                width: "44%",
                height: 12,
                transform: "translateX(-50%)",
                background:
                  "radial-gradient(ellipse,rgba(124,58,237,.55),transparent 70%)",
              }}
            />
            <div
              className="absolute"
              style={{
                top: "6%",
                right: "-4%",
                padding: "9px 14px",
                border: "1px solid rgba(167,139,250,.3)",
                background: "rgba(10,10,15,.82)",
                fontFamily: "'Orbitron',sans-serif",
                fontSize: 9,
                letterSpacing: ".24em",
                color: "#A78BFA",
                animation: "floatx 9s ease-in-out infinite",
              }}
            >
              UPTIME 99.98%
            </div>
            <div
              className="absolute"
              style={{
                bottom: "8%",
                left: "-6%",
                padding: "9px 14px",
                border: "1px solid rgba(245,158,11,.35)",
                background: "rgba(10,10,15,.82)",
                fontFamily: "'Orbitron',sans-serif",
                fontSize: 9,
                letterSpacing: ".24em",
                color: "#F59E0B",
                animation: "floatx 11s ease-in-out infinite reverse",
              }}
            >
              PAYROLL · 11 COUNTRIES
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
