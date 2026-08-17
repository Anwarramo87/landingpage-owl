"use client";

import { useEffect, useState } from "react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    let pct = 0;
    let done = false;
    const tick = setInterval(() => {
      pct = Math.min(100, pct + 5 + Math.random() * 12);
      setProgress(Math.round(pct));
      if (pct >= 100) {
        clearInterval(tick);
        setTimeout(() => {
          if (done) return;
          done = true;
          setDismissed(true);
          setTimeout(onComplete, 850);
        }, 300);
      }
    }, 110);

    const failsafe = setTimeout(() => {
      clearInterval(tick);
      if (!done) {
        done = true;
        setDismissed(true);
        setTimeout(onComplete, 850);
      }
    }, 3200);

    return () => {
      clearInterval(tick);
      clearTimeout(failsafe);
    };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[9400] flex flex-col items-center justify-center gap-[30px]"
      style={{
        background: "#0A0A0F",
        opacity: dismissed ? 0 : 1,
        visibility: dismissed ? "hidden" : "visible",
        transition: "opacity .8s cubic-bezier(.2,.7,.2,1), visibility .8s",
      }}
    >
      <div className="relative w-[170px] h-[170px] flex items-center justify-center">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: "1px solid rgba(167,139,250,.14)",
            borderTopColor: "#7C3AED",
            animation: "spin 1.3s linear infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            inset: 20,
            border: "1px solid rgba(167,139,250,.1)",
            borderBottomColor: "#F59E0B",
            animation: "spinr 2.4s linear infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            inset: 42,
            border: "1px dashed rgba(167,139,250,.2)",
            animation: "spin 6s linear infinite",
          }}
        />
        <div
          className="w-[54px] h-[54px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 38% 34%,#fff 0 10%,#A78BFA 12% 34%,#6C3CE1 36% 62%,#2A1160 64%)",
            animation: "blink 2.8s ease-in-out infinite, breathe 2.4s ease-in-out infinite",
          }}
        />
      </div>
      <div
        className="font-orbitron font-black text-base"
        style={{ letterSpacing: ".66em", textIndent: ".66em", color: "#fff" }}
      >
        OWLEX
      </div>
      <div className="flex items-center gap-4">
        <div
          className="relative overflow-hidden"
          style={{ width: 220, height: 1, background: "rgba(167,139,250,.16)" }}
        >
          <div
            className="absolute inset-0"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg,#4C1D95,#8B5CF6,#F59E0B)",
              transition: "width .25s linear",
            }}
          />
        </div>
        <div
          className="font-orbitron text-xs min-w-[44px]"
          style={{ letterSpacing: ".2em", color: "#F59E0B" }}
        >
          {String(progress).padStart(3, "0")}
        </div>
      </div>
    </div>
  );
}
