"use client";

import { useEffect, useState, useCallback } from "react";

function OwlLogo({ size = 36 }: { size?: number }) {
  return (
    <span className="relative" style={{ width: size, height: size, display: "block" }}>
      <svg viewBox="0 0 40 40" width={size} height={size} aria-hidden="true">
        <path d="M4 13 L9 3 L15 11 M36 13 L31 3 L25 11" fill="none" stroke="#7C3AED" strokeWidth="1.5" />
        <circle cx="20" cy="23" r="15" fill="none" stroke="rgba(167,139,250,.5)" strokeWidth="1" />
        <circle cx="14" cy="21" r="5.4" fill="none" stroke="#A78BFA" strokeWidth="1.2" />
        <circle cx="26" cy="21" r="5.4" fill="none" stroke="#A78BFA" strokeWidth="1.2" />
        <path d="M20 25 L17.4 30 L22.6 30 Z" fill="#F59E0B" />
      </svg>
      <span
        className="absolute rounded-full"
        style={{
          top: 17,
          left: 10.6,
          width: 7,
          height: 7,
          background: "#8B5CF6",
          boxShadow: "0 0 14px #7C3AED",
          animation: "blink 5.5s ease-in-out infinite",
        }}
      />
      <span
        className="absolute rounded-full"
        style={{
          top: 17,
          left: 21.4,
          width: 7,
          height: 7,
          background: "#8B5CF6",
          boxShadow: "0 0 14px #7C3AED",
          animation: "blink 5.5s ease-in-out infinite",
        }}
      />
    </span>
  );
}

export default function Navbar() {
  const [progress, setProgress] = useState(0);
  const [navBg, setNavBg] = useState(false);

  const onScroll = useCallback(() => {
    const se = document.scrollingElement || document.documentElement;
    setNavBg(se.scrollTop > 40);
    const max = se.scrollHeight - innerHeight;
    setProgress(max > 0 ? (se.scrollTop / max) * 100 : 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Impact", href: "#stats" },
    { label: "Process", href: "#process" },
    { label: "Stack", href: "#stack" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[5000]"
      style={{
        background: navBg ? "rgba(10,10,15,.76)" : "transparent",
        backdropFilter: navBg ? "blur(20px)" : "none",
        transition: "background .4s, backdrop-filter .4s",
      }}
    >
      <div
        className="mx-auto flex items-center justify-between gap-6"
        style={{ width: "min(1360px,92vw)", padding: "20px 0" }}
      >
        <a href="#top" className="flex items-center gap-[13px]" aria-label="Owlex home">
          <OwlLogo />
          <span
            className="font-orbitron font-black"
            style={{ fontSize: 19, letterSpacing: ".24em", color: "#fff" }}
          >
            OWLEX
          </span>
        </a>
        <nav className="flex items-center gap-[34px]">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs uppercase"
              style={{ letterSpacing: ".2em", color: "#E2D9F3" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="relative overflow-hidden"
            data-magnetic
            style={{
              padding: "14px 28px",
              background: "#6C3CE1",
              color: "#fff",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: ".24em",
              textTransform: "uppercase",
              boxShadow: "0 0 34px rgba(124,58,237,.5)",
            }}
          >
            <span className="relative">Start Project</span>
          </a>
        </nav>
      </div>
      <div
        style={{
          height: 1,
          background:
            "linear-gradient(90deg,transparent,rgba(167,139,250,.34),transparent)",
        }}
      />
      <div
        className="fixed top-0 left-0"
        style={{
          height: 2,
          width: `${progress}%`,
          zIndex: 9500,
          background: "linear-gradient(90deg,#4C1D95,#8B5CF6,#F59E0B)",
          boxShadow: "0 0 16px rgba(139,92,246,.9)",
          transition: "width .15s linear",
        }}
      />
    </header>
  );
}
