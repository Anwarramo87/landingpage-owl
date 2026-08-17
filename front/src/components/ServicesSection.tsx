"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    tag: "S/01",
    title: "HR Systems",
    description:
      "Payroll, time, recruitment and performance in one record. Built to survive audits, union rules and headcount in five figures.",
    features: [
      "Multi-country payroll engines",
      "Self-service portals",
      "Compliance & audit trails",
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    tag: "S/02",
    title: "ERP Solutions",
    description:
      "Finance, inventory, procurement and production reconciled in real time — implemented, migrated and extended without freezing your operation.",
    features: [
      "Module implementation",
      "Legacy data migration",
      "Warehouse & supply integration",
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    tag: "S/03",
    title: "Custom Development",
    description:
      "The system nobody sells you off the shelf — the one your competitive advantage actually runs on. Designed, built and handed over with the keys.",
    features: [
      "Platform & API architecture",
      "Internal tooling at scale",
      "Cloud & DevOps foundations",
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    const spot = spotRef.current;
    if (!card || !spot) return;
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    card.style.transform = `perspective(1000px) rotateY(${(px - 0.5) * 13}deg) rotateX(${-(py - 0.5) * 13}deg) translateY(-10px) scale(1.015)`;
    spot.style.opacity = "1";
    spot.style.background = `radial-gradient(280px circle at ${px * 100}% ${py * 100}%,rgba(139,92,246,.3),transparent 70%)`;
  };

  const onLeave = () => {
    const card = cardRef.current;
    const spot = spotRef.current;
    if (card)
      card.style.transform =
        "perspective(1000px) rotateY(0) rotateX(0) translateY(0) scale(1)";
    if (spot) spot.style.opacity = "0";
  };

  return (
    <article
      data-tilt
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative"
      style={{
        padding: 1,
        background:
          "linear-gradient(160deg,rgba(167,139,250,.4),rgba(167,139,250,.06) 40%,rgba(245,158,11,.28))",
        transformStyle: "preserve-3d",
        transition:
          "transform .35s cubic-bezier(.2,.7,.2,1),box-shadow .4s",
      }}
    >
      <div
        className="relative overflow-hidden h-full"
        style={{
          padding: "48px 38px 44px",
          background:
            "linear-gradient(180deg,rgba(24,16,48,.94),rgba(10,10,15,.94))",
        }}
      >
        <div
          ref={spotRef}
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: 0, transition: "opacity .4s" }}
        />
        <i
          className="absolute font-mono not-italic"
          style={{ top: 8, left: 8, fontSize: 12, lineHeight: 1, color: "rgba(167,139,250,.5)" }}
        >
          +
        </i>
        <i
          className="absolute font-mono not-italic"
          style={{ top: 8, right: 8, fontSize: 12, lineHeight: 1, color: "rgba(167,139,250,.5)" }}
        >
          +
        </i>
        <i
          className="absolute font-mono not-italic"
          style={{ bottom: 8, left: 8, fontSize: 12, lineHeight: 1, color: "rgba(167,139,250,.5)" }}
        >
          +
        </i>
        <i
          className="absolute font-mono not-italic"
          style={{ bottom: 8, right: 8, fontSize: 12, lineHeight: 1, color: "rgba(167,139,250,.5)" }}
        >
          +
        </i>
        <div
          className="relative flex items-center justify-between mb-8"
          style={{ transform: "translateZ(50px)" }}
        >
          <span
            className="flex items-center justify-center"
            style={{
              width: 58,
              height: 58,
              border: "1px solid rgba(167,139,250,.4)",
              background: "rgba(108,60,225,.16)",
            }}
          >
            {service.icon}
          </span>
          <span
            className="font-orbitron"
            style={{
              fontSize: 11,
              letterSpacing: ".26em",
              color: "rgba(167,139,250,.4)",
            }}
          >
            {service.tag}
          </span>
        </div>
        <h3
          className="relative font-orbitron font-semibold m-0 mb-[15px]"
          style={{ fontSize: 22, color: "#fff", transform: "translateZ(34px)" }}
        >
          {service.title}
        </h3>
        <p
          className="relative m-0 mb-7"
          style={{
            fontSize: 15,
            lineHeight: 1.8,
            color: "rgba(226,217,243,.62)",
            transform: "translateZ(22px)",
          }}
        >
          {service.description}
        </p>
        <div
          className="relative flex flex-col gap-3"
          style={{
            fontSize: 13,
            letterSpacing: ".06em",
            color: "rgba(226,217,243,.52)",
            paddingTop: 24,
            borderTop: "1px solid rgba(167,139,250,.14)",
            transform: "translateZ(22px)",
          }}
        >
          {service.features.map((f) => (
            <span key={f}>— {f}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative z-[2]" style={{ padding: "150px 0 140px" }}>
      <div
        aria-hidden="true"
        className="absolute font-orbitron font-black pointer-events-none"
        style={{
          top: 60,
          right: "2vw",
          fontSize: "clamp(120px,20vw,300px)",
          lineHeight: 0.8,
          color: "transparent",
          WebkitTextStroke: "1px rgba(167,139,250,.07)",
        }}
      >
        01
      </div>
      <div
        className="relative mx-auto"
        style={{ width: "min(1360px,92vw)" }}
      >
        <div
          className="flex items-end justify-between flex-wrap mb-[72px]"
          style={{ gap: 40 }}
        >
          <div>
            <div
              className="font-orbitron font-semibold mb-[22px]"
              data-reveal
              style={{ fontSize: 11, letterSpacing: ".4em", color: "#F59E0B" }}
            >
              01 — WHAT WE BUILD
            </div>
            <h2
              className="font-orbitron font-black m-0"
              data-reveal
              style={{
                fontSize: "clamp(32px,4.4vw,62px)",
                lineHeight: 1.02,
                letterSpacing: "-.03em",
                color: "#fff",
                maxWidth: "16ch",
              }}
            >
              Three practices, one engineering standard
            </h2>
          </div>
          <p
            data-reveal
            className="m-0"
            style={{
              maxWidth: "32ch",
              fontSize: 15,
              lineHeight: 1.85,
              color: "rgba(226,217,243,.6)",
            }}
          >
            Every engagement runs the same way: a senior team, a fixed
            architecture review, and code you own outright.
          </p>
        </div>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit,minmax(310px,1fr))",
            gap: 26,
          }}
        >
          {services.map((s, i) => (
            <ServiceCard key={s.tag} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
