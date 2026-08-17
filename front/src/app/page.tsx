"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import ServicesSection from "@/components/ServicesSection";
import CodeShowcase from "@/components/CodeShowcase";
import StatsSection from "@/components/StatsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

function StarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    const N = innerWidth < 900 ? 46 : 90;
    const stars = Array.from({ length: N }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.4 + 0.35,
      ph: Math.random() * 6.28,
      sp: 0.2 + Math.random() * 0.6,
    }));

    let W = 0;
    let H = 0;
    const resize = () => {
      W = innerWidth;
      H = innerHeight;
      cv.width = Math.round(W * dpr);
      cv.height = Math.round(H * dpr);
      cv.style.width = W + "px";
      cv.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / innerWidth - 0.5,
        y: e.clientY / innerHeight - 0.5,
      };
    };
    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("resize", resize);

    let t = 0;
    let last = 0;
    const draw = (now: number) => {
      rafRef.current = requestAnimationFrame(draw);
      if (now - last < 33) return;
      last = now;
      t += 0.033;
      ctx.clearRect(0, 0, W, H);
      const px = mouseRef.current.x;
      const py = mouseRef.current.y;
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        ctx.globalAlpha = 0.12 + Math.abs(Math.sin(t * s.sp * 2 + s.ph)) * 0.4;
        ctx.fillStyle = i % 7 === 0 ? "#F59E0B" : "#E2D9F3";
        ctx.beginPath();
        ctx.arc(
          s.x * W + px * 26 * s.sp,
          s.y * H + py * 20 * s.sp,
          s.r,
          0,
          6.2832
        );
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}

function AuroraBands() {
  const [activeBand, setActiveBand] = useState(0);
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    sectionsRef.current = Array.from(sections) as HTMLElement[];

    const onScroll = () => {
      const mid = innerHeight * 0.45;
      let idx = 0;
      for (let n = 0; n < sectionsRef.current.length; n++) {
        const r = sectionsRef.current[n].getBoundingClientRect();
        if (r.top <= mid && r.bottom > mid) {
          idx = n;
          break;
        }
        if (r.top > mid) break;
        idx = n;
      }
      setActiveBand(Math.min(idx, 3));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bands = [
    "radial-gradient(ellipse 60% 50% at 22% 8%,rgba(108,60,225,.42),transparent 62%),radial-gradient(ellipse 50% 45% at 82% 30%,rgba(124,58,237,.3),transparent 60%),radial-gradient(ellipse 60% 40% at 50% 100%,rgba(76,29,149,.34),transparent 65%)",
    "radial-gradient(ellipse 55% 60% at 78% 14%,rgba(124,58,237,.44),transparent 60%),radial-gradient(ellipse 60% 50% at 12% 62%,rgba(76,29,149,.42),transparent 62%),radial-gradient(ellipse 70% 40% at 50% 104%,rgba(139,92,246,.2),transparent 60%)",
    "radial-gradient(ellipse 60% 55% at 50% 0%,rgba(59,16,120,.6),transparent 62%),radial-gradient(ellipse 45% 45% at 88% 70%,rgba(245,158,11,.16),transparent 58%),radial-gradient(ellipse 55% 45% at 8% 30%,rgba(108,60,225,.34),transparent 60%)",
    "radial-gradient(ellipse 50% 60% at 20% 20%,rgba(139,92,246,.4),transparent 60%),radial-gradient(ellipse 55% 55% at 80% 84%,rgba(76,29,149,.5),transparent 62%),radial-gradient(ellipse 80% 30% at 50% 50%,rgba(245,158,11,.1),transparent 62%)",
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {bands.map((bg, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            background: bg,
            filter: i === activeBand ? "opacity(1)" : "opacity(0)",
            transition: "filter 1.1s ease",
          }}
        />
      ))}
      <div
        className="absolute opacity-50"
        style={{
          inset: "-10%",
          backgroundImage:
            "radial-gradient(1.4px 1.4px at 18% 22%,#E2D9F3,transparent),radial-gradient(1.2px 1.2px at 62% 12%,#E2D9F3,transparent),radial-gradient(1.6px 1.6px at 84% 46%,#F59E0B,transparent),radial-gradient(1.2px 1.2px at 34% 62%,#E2D9F3,transparent),radial-gradient(1.4px 1.4px at 72% 78%,#E2D9F3,transparent),radial-gradient(1.2px 1.2px at 8% 84%,#A78BFA,transparent),radial-gradient(1.3px 1.3px at 46% 34%,#E2D9F3,transparent),radial-gradient(1.1px 1.1px at 92% 66%,#E2D9F3,transparent)",
          backgroundSize: "520px 520px",
          animation: "drift 120s linear infinite",
        }}
      />
      <div
        className="absolute opacity-42"
        style={{
          bottom: "-6%",
          left: "-30%",
          right: "-30%",
          height: "46vh",
          backgroundImage:
            "linear-gradient(rgba(167,139,250,.3) 1px,transparent 1px),linear-gradient(90deg,rgba(167,139,250,.2) 1px,transparent 1px)",
          backgroundSize: "120px 120px",
          transform: "perspective(600px) rotateX(74deg)",
          transformOrigin: "50% 100%",
          maskImage: "linear-gradient(to top,#000,transparent)",
          WebkitMaskImage: "linear-gradient(to top,#000,transparent)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#fff 0 1px,transparent 1px 3px)",
        }}
      />
    </div>
  );
}

function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const isFine = matchMedia("(pointer:fine)").matches;
    if (!isFine) {
      if (dotRef.current) dotRef.current.style.display = "none";
      if (ringRef.current) ringRef.current.style.display = "none";
      return;
    }
    document.documentElement.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      posRef.current.mx = e.clientX;
      posRef.current.my = e.clientY;
    };
    const onOver = (e: MouseEvent) => {
      const ring = ringRef.current;
      if (!ring) return;
      const hit = (e.target as HTMLElement).closest("a,button,[data-tilt]");
      ring.style.width = hit ? "66px" : "40px";
      ring.style.height = hit ? "66px" : "40px";
      ring.style.borderColor = hit ? "#F59E0B" : "rgba(167,139,250,.8)";
      ring.style.background = hit ? "rgba(245,158,11,.1)" : "transparent";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);

    const loop = () => {
      const p = posRef.current;
      p.rx += (p.mx - p.rx) * 0.18;
      p.ry += (p.my - p.ry) * 0.18;
      if (dotRef.current)
        dotRef.current.style.transform = `translate(${p.mx}px,${p.my}px) translate(-50%,-50%)`;
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${p.rx}px,${p.ry}px) translate(-50%,-50%)`;
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[8000] pointer-events-none"
        style={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: "#F59E0B",
          boxShadow: "0 0 12px #F59E0B",
          transform: "translate(-50%,-50%)",
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[8000] pointer-events-none"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1px solid rgba(167,139,250,.8)",
          boxShadow: "0 0 26px rgba(124,58,237,.6),inset 0 0 18px rgba(124,58,237,.35)",
          transform: "translate(-50%,-50%)",
          transition: "width .28s,height .28s,border-color .28s,background .28s",
        }}
      />
    </>
  );
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <CustomCursor />
      <StarCanvas />
      <AuroraBands />

      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      <Navbar />

      <div className="relative z-[2]">
        <HeroSection />
        <MarqueeSection />
        <ServicesSection />
        <CodeShowcase />
        <StatsSection />
        <ProcessSection />
        <TestimonialsSection />
        <TechStackSection />
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
