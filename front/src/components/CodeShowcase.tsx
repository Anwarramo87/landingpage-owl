"use client";

import { useEffect, useRef, useState } from "react";

const codeLines = [
  { text: "export const overtime = (shift: Shift) => {", colors: ["#F59E0B", "#A78BFA"] },
  { text: "  const extra = shift.hours - contract.weekly;", colors: ["#F59E0B", "#8B5CF6"] },
  { text: "  if (extra <= 0) return none;", colors: ["#F59E0B", "#8B5CF6"] },
  { text: "  return rate(shift.country)", colors: ["#F59E0B", "#A78BFA"] },
  { text: "    .multiply(extra)", colors: ["#A78BFA"] },
  { text: "    .roundTo(2);", colors: ["#A78BFA", "#8B5CF6"] },
  { text: "};", colors: [] },
  { text: "", colors: [] },
  { text: "// 1,284 tests · 0 failing", colors: [], isComment: true },
];

function CodeLine({
  line,
  visible,
  isLast,
}: {
  line: (typeof codeLines)[0];
  visible: boolean;
  isLast: boolean;
}) {
  if (!line.text) return <span style={{ display: "block", height: "2em" }} />;

  if (line.isComment) {
    return (
      <span
        style={{
          display: "block",
          animation: visible ? "revealIn .6s ease-out both" : "none",
          opacity: visible ? 1 : 0,
          color: "rgba(226,217,243,.42)",
        }}
      >
        {line.text}
        {isLast && (
          <span
            style={{
              display: "inline-block",
              width: 8,
              height: 14,
              marginLeft: 8,
              background: "#F59E0B",
              verticalAlign: -2,
              animation: "caretline 1s steps(1) infinite",
            }}
          />
        )}
      </span>
    );
  }

  const parts: { text: string; color: string }[] = [];
  const raw = line.text;

  if (raw.includes("export const")) {
    const [before, name, after] = raw.split(/(overtime)/);
    parts.push({ text: before, color: "#F59E0B" });
    parts.push({ text: name, color: "#A78BFA" });
    parts.push({ text: after, color: "#E2D9F3" });
  } else if (raw.includes("const extra")) {
    const [before, name] = raw.split(/(extra)/);
    parts.push({ text: before, color: "#F59E0B" });
    parts.push({ text: name, color: "#E2D9F3" });
    const rest = raw.split("extra")[1] || "";
    const [pre, contract] = rest.split(/(contract)/);
    parts.push({ text: pre, color: "#E2D9F3" });
    parts.push({ text: "contract", color: "#8B5CF6" });
  } else if (raw.includes("if (extra")) {
    parts.push({ text: "  ", color: "#E2D9F3" });
    parts.push({ text: "if", color: "#F59E0B" });
    parts.push({ text: " (extra <= ", color: "#E2D9F3" });
    parts.push({ text: "0", color: "#8B5CF6" });
    parts.push({ text: ") ", color: "#E2D9F3" });
    parts.push({ text: "return", color: "#F59E0B" });
    parts.push({ text: " none;", color: "#E2D9F3" });
  } else if (raw.includes("return rate")) {
    parts.push({ text: "  ", color: "#E2D9F3" });
    parts.push({ text: "return", color: "#F59E0B" });
    parts.push({ text: " ", color: "#E2D9F3" });
    parts.push({ text: "rate", color: "#A78BFA" });
    parts.push({ text: "(shift.country)", color: "#E2D9F3" });
  } else if (raw.includes(".multiply")) {
    parts.push({ text: "    .", color: "#E2D9F3" });
    parts.push({ text: "multiply", color: "#A78BFA" });
    parts.push({ text: "(extra)", color: "#E2D9F3" });
  } else if (raw.includes(".roundTo")) {
    parts.push({ text: "    .", color: "#E2D9F3" });
    parts.push({ text: "roundTo", color: "#A78BFA" });
    parts.push({ text: "(", color: "#E2D9F3" });
    parts.push({ text: "2", color: "#8B5CF6" });
    parts.push({ text: ");", color: "#E2D9F3" });
  } else {
    parts.push({ text: raw, color: "#E2D9F3" });
  }

  return (
    <span
      style={{
        display: "block",
        animation: visible ? "revealIn .6s ease-out both" : "none",
        opacity: visible ? 1 : 0,
      }}
    >
      {parts.map((p, i) => (
        <span key={i} style={{ color: p.color }}>
          {p.text}
        </span>
      ))}
      {isLast && (
        <span
          style={{
            display: "inline-block",
            width: 8,
            height: 14,
            marginLeft: 8,
            background: "#F59E0B",
            verticalAlign: -2,
            animation: "caretline 1s steps(1) infinite",
          }}
        />
      )}
    </span>
  );
}

export default function CodeShowcase() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    if (visibleCount >= codeLines.length) return;
    const timer = setTimeout(
      () => setVisibleCount((v) => v + 1),
      450 + Math.random() * 200
    );
    return () => clearTimeout(timer);
  }, [visibleCount, started]);

  return (
    <section ref={sectionRef} className="relative z-[2]" style={{ padding: "0 0 150px" }}>
      <div
        className="mx-auto grid items-center"
        style={{
          width: "min(1360px,92vw)",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: 56,
        }}
      >
        <div>
          <div
            className="font-orbitron font-semibold mb-[22px]"
            data-reveal
            style={{ fontSize: 11, letterSpacing: ".4em", color: "#F59E0B" }}
          >
            INSIDE THE BUILD
          </div>
          <h2
            className="font-orbitron font-black m-0 mb-6"
            data-reveal
            style={{
              fontSize: "clamp(28px,3.6vw,48px)",
              lineHeight: 1.05,
              letterSpacing: "-.03em",
              color: "#fff",
              maxWidth: "15ch",
            }}
          >
            Typed domains, not glued spreadsheets
          </h2>
          <p
            className="m-0 mb-8"
            data-reveal
            style={{
              maxWidth: "42ch",
              fontSize: 16,
              lineHeight: 1.85,
              color: "rgba(226,217,243,.6)",
            }}
          >
            Every rule your business runs on becomes a named, tested object in
            the model — so payroll edge cases live in code review, not in
            someone&apos;s head.
          </p>
          <div
            data-reveal
            className="flex flex-col gap-3.5"
            style={{ fontSize: 14, color: "rgba(226,217,243,.62)" }}
          >
            <span className="flex gap-3">
              <span style={{ color: "#F59E0B" }}>—</span>Every rule covered by a
              regression test
            </span>
            <span className="flex gap-3">
              <span style={{ color: "#F59E0B" }}>—</span>Deploys on merge,
              rollback in one command
            </span>
            <span className="flex gap-3">
              <span style={{ color: "#F59E0B" }}>—</span>Your engineers in the
              repo from week one
            </span>
          </div>
        </div>

        <div
          data-reveal
          className="relative"
          style={{
            padding: 1,
            background:
              "linear-gradient(150deg,rgba(167,139,250,.45),rgba(245,158,11,.25))",
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(180deg,rgba(18,12,38,.98),rgba(10,10,15,.98))",
            }}
          >
            <div
              className="flex items-center"
              style={{
                gap: 9,
                padding: "14px 18px",
                borderBottom: "1px solid rgba(167,139,250,.16)",
              }}
            >
              <span
                className="rounded-full"
                style={{ width: 9, height: 9, background: "#F59E0B" }}
              />
              <span
                className="rounded-full"
                style={{ width: 9, height: 9, background: "#8B5CF6" }}
              />
              <span
                className="rounded-full"
                style={{
                  width: 9,
                  height: 9,
                  background: "rgba(167,139,250,.35)",
                }}
              />
              <span
                className="ml-2.5"
                style={{
                  fontFamily: "ui-monospace,Menlo,monospace",
                  fontSize: 11,
                  letterSpacing: ".1em",
                  color: "rgba(226,217,243,.45)",
                }}
              >
                payroll/rules.ts
              </span>
            </div>
            <pre
              className="m-0 overflow-hidden"
              style={{
                padding: "26px clamp(12px,3vw,22px) 30px",
                fontFamily: "ui-monospace,Menlo,Consolas,monospace",
                fontSize: "clamp(10px,2.6vw,13px)",
                lineHeight: 2,
                color: "#E2D9F3",
              }}
            >
              <code>
                {codeLines.map((line, i) => (
                  <CodeLine
                    key={i}
                    line={line}
                    visible={i < visibleCount}
                    isLast={i === visibleCount - 1 && i === codeLines.length - 1}
                  />
                ))}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}


