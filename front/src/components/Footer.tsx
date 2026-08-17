"use client";

export default function Footer() {
  return (
    <footer
      className="relative z-[2]"
      style={{
        padding: "84px 0 46px",
        borderTop: "1px solid rgba(167,139,250,.14)",
      }}
    >
      <div
        className="mx-auto grid items-start"
        style={{
          width: "min(1360px,92vw)",
          gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))",
          gap: 48,
        }}
      >
        <div>
          <div className="flex items-center" style={{ gap: 12, marginBottom: 20 }}>
            <svg viewBox="0 0 40 40" width="30" height="30" aria-hidden="true">
              <path d="M4 13 L9 3 L15 11 M36 13 L31 3 L25 11" fill="none" stroke="#7C3AED" strokeWidth="1.5" />
              <circle cx="20" cy="23" r="15" fill="none" stroke="rgba(167,139,250,.5)" strokeWidth="1" />
              <circle cx="14" cy="21" r="5.4" fill="#8B5CF6" />
              <circle cx="26" cy="21" r="5.4" fill="#8B5CF6" />
              <path d="M20 25 L17.4 30 L22.6 30 Z" fill="#F59E0B" />
            </svg>
            <span
              className="font-orbitron font-black"
              style={{ fontSize: 17, letterSpacing: ".24em", color: "#fff" }}
            >
              OWLEX
            </span>
          </div>
          <p
            className="m-0"
            style={{
              fontSize: 14,
              lineHeight: 1.8,
              color: "rgba(226,217,243,.5)",
              maxWidth: "28ch",
            }}
          >
            Enterprise software, engineered with the patience of something that
            hunts at night.
          </p>
        </div>

        <div className="flex flex-col" style={{ gap: 13 }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: ".3em",
              textTransform: "uppercase",
              color: "rgba(226,217,243,.4)",
              marginBottom: 6,
            }}
          >
            Services
          </div>
          {["HR Systems", "ERP Solutions", "Custom Development"].map((l) => (
            <a
              key={l}
              href="#services"
              style={{ fontSize: 14, color: "rgba(226,217,243,.72)" }}
            >
              {l}
            </a>
          ))}
        </div>

        <div className="flex flex-col" style={{ gap: 13 }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: ".3em",
              textTransform: "uppercase",
              color: "rgba(226,217,243,.4)",
              marginBottom: 6,
            }}
          >
            Company
          </div>
          {[
            { label: "Process", href: "#process" },
            { label: "Impact", href: "#stats" },
            { label: "Contact", href: "#contact" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{ fontSize: 14, color: "rgba(226,217,243,.72)" }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col" style={{ gap: 13 }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: ".3em",
              textTransform: "uppercase",
              color: "rgba(226,217,243,.4)",
              marginBottom: 6,
            }}
          >
            Elsewhere
          </div>
          <div className="flex" style={{ gap: 12 }}>
            {[
              {
                label: "LinkedIn",
                svg: (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                ),
              },
              {
                label: "GitHub",
                svg: (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                ),
              },
              {
                label: "X",
                svg: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3 L21 21 M21 3 L3 21" />
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href="#top"
                aria-label={s.label}
                className="flex items-center justify-center"
                style={{
                  width: 42,
                  height: 42,
                  border: "1px solid rgba(167,139,250,.25)",
                  transition: "border-color .3s,box-shadow .3s",
                }}
              >
                {s.svg}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="mx-auto flex justify-between flex-wrap"
        style={{
          width: "min(1360px,92vw)",
          marginTop: 56,
          paddingTop: 26,
          borderTop: "1px solid rgba(167,139,250,.1)",
          gap: 14,
          fontSize: 12,
          letterSpacing: ".1em",
          color: "rgba(226,217,243,.36)",
        }}
      >
        <span>© 2026 Owlex. All rights reserved.</span>
        <span>Built in the dark, on purpose.</span>
      </div>
    </footer>
  );
}
