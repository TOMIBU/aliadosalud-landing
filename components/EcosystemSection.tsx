"use client";

import { useState, useEffect, useCallback } from "react";
import { Badge } from "@/components/ui/badge";

// ─── Module definitions ────────────────────────────────────────────────────────
const MODULES = [
  {
    id: "clinico",
    name: "AliadoClinico",
    angle: 270, // top
    color: "#3b82f6",
    glow: "rgba(59,130,246,0.28)",
    tagline: "Gestión de consultorios",
    taglineShort: "Consultorios",
    description:
      "Gestión inteligente de consultorios integrada con las herramientas que el médico ya utiliza. Sin migraciones traumáticas, sin disrupciones en el flujo de trabajo.",
    features: [
      "Agenda médica avanzada",
      "Historia clínica digital",
      "Prescripciones online",
      "Integración nativa",
    ],
    // SVG path for icon (24x24 viewBox)
    iconPath:
      "M9 12h6M12 9v6M8 2H5a2 2 0 00-2 2v3M16 2h3a2 2 0 012 2v3M2 16v3a2 2 0 002 2h3M22 16v3a2 2 0 01-2 2h-3",
  },
  {
    id: "qx",
    name: "AliadoQx",
    angle: 0, // right
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.28)",
    tagline: "Turnera quirúrgica",
    taglineShort: "Quirófanos",
    description:
      "Organización estratégica de quirófanos con visibilidad operativa total. Coordinación de equipos, disponibilidad y programación en tiempo real.",
    features: [
      "Programación quirúrgica",
      "Disponibilidad real-time",
      "Trazabilidad completa",
      "Coordinación de equipos",
    ],
    iconPath:
      "M12 3a9 9 0 100 18 9 9 0 000-18zM8 12h8M12 8v8",
  },
  {
    id: "admin",
    name: "AliadoAdmin",
    angle: 90, // bottom
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.28)",
    tagline: "Automatización administrativa",
    taglineShort: "Administración",
    description:
      "Automatización de procesos administrativos y liquidación de honorarios profesionales. Elimina tareas repetitivas sin valor clínico o administrativo.",
    features: [
      "Liquidación honorarios",
      "Facturación automática",
      "Reportes ejecutivos",
      "Auditoría integrada",
    ],
    iconPath:
      "M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2zM3 10h18M8 2v3M16 2v3M7 14h3M14 14h3",
  },
  {
    id: "forms",
    name: "AliadoForms",
    angle: 180, // left
    color: "#10b981",
    glow: "rgba(16,185,129,0.28)",
    tagline: "Formularios para obras sociales",
    taglineShort: "Formularios",
    description:
      "Generación automática de formularios médicos para obras sociales en segundos. Validación y envío digital integrado con múltiples coberturas.",
    features: [
      "Generación automática",
      "Múltiples coberturas",
      "Validación integrada",
      "Envío digital",
    ],
    iconPath:
      "M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9l-6-6zM14 3v6h6M8 13h8M8 17h5",
  },
] as const;

type ModuleId = (typeof MODULES)[number]["id"];

// ─── SVG Geometry ──────────────────────────────────────────────────────────────
const SZ = 500;          // SVG viewBox size
const C = SZ / 2;        // center = 250
const ORBIT_R = 182;     // orbit radius
const NODE_R = 32;       // module node radius

function pos(angleDeg: number, r: number) {
  const a = (angleDeg * Math.PI) / 180;
  return { x: C + Math.cos(a) * r, y: C + Math.sin(a) * r };
}

// Label positioning per angle (relative to node center)
function labelPos(angle: number) {
  switch (angle) {
    case 270: return { dx: 0, nameY: -52, tagY: -37, anchor: "middle" as const };
    case 0:   return { dx: 0, nameY: -52, tagY: -37, anchor: "middle" as const };
    case 90:  return { dx: 0, nameY: 55,  tagY: 70,  anchor: "middle" as const };
    case 180: return { dx: 0, nameY: 55,  tagY: 70,  anchor: "middle" as const };
    default:  return { dx: 0, nameY: -52, tagY: -37, anchor: "middle" as const };
  }
}

// ─── Component ────────────────────────────────────────────────────────────────
export function EcosystemSection() {
  const [activeId, setActiveId] = useState<ModuleId>("clinico");
  const [hoveredId, setHoveredId] = useState<ModuleId | null>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  const displayId = hoveredId ?? activeId;
  const display = MODULES.find((m) => m.id === displayId)!;
  const displayIndex = MODULES.findIndex((m) => m.id === displayId);

  // Auto-cycle every 4 seconds when idle
  useEffect(() => {
    if (isUserInteracting || hoveredId) return;
    const t = setInterval(() => {
      setActiveId((prev) => {
        const i = MODULES.findIndex((m) => m.id === prev);
        return MODULES[(i + 1) % MODULES.length].id;
      });
    }, 4000);
    return () => clearInterval(t);
  }, [isUserInteracting, hoveredId]);

  const handleNodeClick = useCallback((id: ModuleId) => {
    setActiveId(id);
    setIsUserInteracting(true);
  }, []);

  return (
    <section
      id="ecosystem"
      className="relative flex flex-col items-center py-20 overflow-hidden"
      style={{ background: "#060d1a", minHeight: "100svh" }}
    >
      {/* ── Dynamic background glow ────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 50% 52%, ${display.glow} 0%, transparent 68%)`,
          transition: "background 0.8s ease",
        }}
      />

      {/* ── Grid pattern ───────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(${display.color}09 1px, transparent 1px),
            linear-gradient(90deg, ${display.color}09 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          transition: "background-image 0.6s ease",
        }}
      />

      {/* ── Corner accent glows ─────────────────────────────────────────────── */}
      <div
        className="absolute top-0 left-0 w-64 h-64 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top left, ${display.color}18, transparent 70%)`,
          transition: "background 0.8s ease",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none"
        style={{
          background: `radial-gradient(circle at bottom right, ${display.color}12, transparent 70%)`,
          transition: "background 0.8s ease",
        }}
      />

      {/* ── Section header ─────────────────────────────────────────────────── */}
      <div className="relative z-10 text-center mb-10 px-6">
        <Badge
          className="mb-5 text-[10px] tracking-[0.22em] uppercase font-semibold px-4 py-1.5 border"
          style={{
            background: display.color + "18",
            color: display.color,
            borderColor: display.color + "35",
          }}
        >
          Ecosistema AliadoSalud
        </Badge>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-3 leading-tight">
          Cuatro soluciones.{" "}
          <span
            style={{
              background: `linear-gradient(120deg, ${display.color} 0%, ${display.color}88 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              transition: "all 0.6s ease",
            }}
          >
            Un ecosistema.
          </span>
        </h2>
        <p className="text-white/38 text-sm tracking-wide">
          Interactuá con cada módulo para explorar sus capacidades
        </p>
      </div>

      {/* ── SVG Orbital diagram ────────────────────────────────────────────── */}
      <div className="relative z-10 w-full flex justify-center flex-shrink-0 px-4">
        <svg
          viewBox={`0 0 ${SZ} ${SZ}`}
          className="w-full overflow-visible"
          style={{ maxWidth: 500, height: "auto" }}
          aria-label="Ecosistema de módulos AliadoSalud"
        >
          <defs>
            {/* Center glow filter */}
            <filter id="eco-gc" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="18" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Node glow filter */}
            <filter id="eco-gn" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="8" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Subtle center gradient */}
            <radialGradient id="eco-cg" cx="50%" cy="35%">
              <stop offset="0%" stopColor="#18356b" />
              <stop offset="100%" stopColor="#050d1a" />
            </radialGradient>

            {/* Active orbit gradient (colored arc highlight) */}
            <linearGradient id="eco-orbit-hl" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={display.color} stopOpacity="0.4" />
              <stop offset="100%" stopColor={display.color} stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* ══ Outermost decorative ring — CW ══ */}
          <circle
            cx={C} cy={C} r={243}
            fill="none"
            stroke="white" strokeOpacity="0.025" strokeWidth="1"
            strokeDasharray="2 18"
            className="animate-rotate-slow"
            style={{ transformOrigin: `${C}px ${C}px` }}
          />

          {/* ══ Second outer ring — CCW ══ */}
          <circle
            cx={C} cy={C} r={226}
            fill="none"
            stroke="white" strokeOpacity="0.04" strokeWidth="0.8"
            strokeDasharray="1 12"
            className="animate-rotate-slow-reverse"
            style={{ transformOrigin: `${C}px ${C}px` }}
          />

          {/* ══ Colored accent ring — CW (tinted by active module) ══ */}
          <circle
            cx={C} cy={C} r={210}
            fill="none"
            stroke={display.color} strokeOpacity="0.07" strokeWidth="1"
            strokeDasharray="3 10"
            className="animate-rotate-slow"
            style={{ transformOrigin: `${C}px ${C}px`, transition: "stroke 0.6s ease" }}
          />

          {/* ══ Radar sweep sector ══ */}
          <g className="animate-rotate-slow" style={{ transformOrigin: `${C}px ${C}px` }}>
            <path
              d={`M${C},${C} L${C},${C - ORBIT_R - 20} A${ORBIT_R + 20},${ORBIT_R + 20} 0 0,1 ${
                C + (ORBIT_R + 20) * Math.sin((50 * Math.PI) / 180)
              },${C - (ORBIT_R + 20) * Math.cos((50 * Math.PI) / 180)} Z`}
              style={{ transition: "fill 0.6s ease" }}
              fill={`url(#eco-radar-${displayId})`}
              opacity="0.9"
            />
            <defs>
              {MODULES.map((m) => (
                <radialGradient
                  key={m.id}
                  id={`eco-radar-${m.id}`}
                  cx="0%"
                  cy="0%"
                  r="100%"
                  gradientUnits="userSpaceOnUse"
                  x1={C} y1={C} x2={C} y2={C - ORBIT_R - 20}
                >
                  <stop offset="0%" stopColor={m.color} stopOpacity="0.18" />
                  <stop offset="100%" stopColor={m.color} stopOpacity="0" />
                </radialGradient>
              ))}
            </defs>
          </g>

          {/* ══ Main orbit track ══ */}
          <circle
            cx={C} cy={C} r={ORBIT_R}
            fill="none"
            stroke="white" strokeOpacity="0.08" strokeWidth="1.5"
          />

          {/* ══ Active color highlight on orbit ══ */}
          <circle
            cx={C} cy={C} r={ORBIT_R}
            fill="none"
            stroke={display.color} strokeOpacity="0.22" strokeWidth="3"
            style={{ transition: "stroke 0.6s ease" }}
          />

          {/* ══ Center expanding pulse rings (SMIL) ══ */}
          {[0, 1, 2].map((i) => (
            <circle
              key={i}
              cx={C} cy={C}
              fill="none"
              stroke={display.color}
              strokeWidth={1.5 - i * 0.4}
              style={{ transition: "stroke 0.6s ease" }}
            >
              <animate
                attributeName="r"
                from="50" to="115"
                begin={`${i * 1.0}s`}
                dur="3.0s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.2 1"
              />
              <animate
                attributeName="stroke-opacity"
                from="0.55" to="0"
                begin={`${i * 1.0}s`}
                dur="3.0s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.2 1"
              />
            </circle>
          ))}

          {/* ══ Connection lines from center to all nodes ══ */}
          {MODULES.map((mod) => {
            const ep = pos(mod.angle, ORBIT_R - NODE_R - 2);
            const isActive = mod.id === displayId;
            return (
              <line
                key={mod.id}
                x1={C} y1={C}
                x2={ep.x} y2={ep.y}
                stroke={isActive ? mod.color : "white"}
                strokeOpacity={isActive ? 0.6 : 0.05}
                strokeWidth={isActive ? 2 : 0.8}
                strokeDasharray={isActive ? "7 5" : "2 10"}
                style={{ transition: "all 0.5s ease" }}
              />
            );
          })}

          {/* ══ Animated data packets (3 flowing to active node) ══ */}
          {[0, 1, 2].map((i) => {
            const ep = pos(display.angle, ORBIT_R - NODE_R - 2);
            const sizes = [3.5, 2.5, 1.8];
            const opacities = [1, 0.65, 0.38];
            return (
              <circle
                key={`${displayId}-pkt-${i}`}
                r={sizes[i]}
                fill={display.color}
                opacity={opacities[i]}
              >
                <animateMotion
                  dur={`${1.3 + i * 0.38}s`}
                  begin={`${i * 0.42}s`}
                  repeatCount="indefinite"
                  path={`M ${C} ${C} L ${ep.x} ${ep.y}`}
                />
              </circle>
            );
          })}

          {/* ══ Small orbit-track dots (decorative) ══ */}
          {[45, 135, 225, 315].map((a) => {
            const p = pos(a, ORBIT_R);
            return (
              <circle
                key={a}
                cx={p.x} cy={p.y} r="2.5"
                fill="white" fillOpacity="0.12"
              />
            );
          })}

          {/* ══ Center logo ══ */}
          {/* Outer glow blob */}
          <circle
            cx={C} cy={C} r="70"
            fill={display.color}
            opacity="0.1"
            filter="url(#eco-gc)"
            style={{ transition: "fill 0.6s ease" }}
          />
          {/* Main circle */}
          <circle cx={C} cy={C} r="54" fill="url(#eco-cg)" />
          {/* Colored border ring */}
          <circle
            cx={C} cy={C} r="54"
            fill="none"
            stroke={display.color} strokeOpacity="0.55" strokeWidth="1.8"
            style={{ transition: "stroke 0.6s ease" }}
          />
          {/* Inner dashed ring (CCW) */}
          <circle
            cx={C} cy={C} r="44"
            fill="none"
            stroke="white" strokeOpacity="0.06" strokeWidth="1"
            strokeDasharray="3 6"
            className="animate-rotate-slow-reverse"
            style={{ transformOrigin: `${C}px ${C}px` }}
          />
          {/* AS lettering */}
          <text
            x={C} y={C + 7}
            textAnchor="middle"
            fontSize="24" fontWeight="800"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            fill="white" letterSpacing="-0.8"
          >
            AS
          </text>
          <text
            x={C} y={C + 22}
            textAnchor="middle"
            fontSize="6.5"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            fill={display.color}
            letterSpacing="2.5"
            style={{ transition: "fill 0.6s ease" }}
          >
            ALIADO
          </text>

          {/* ══ Module nodes ══ */}
          {MODULES.map((mod) => {
            const p = pos(mod.angle, ORBIT_R);
            const lp = labelPos(mod.angle);
            const isActive = mod.id === displayId;

            return (
              <g
                key={mod.id}
                transform={`translate(${p.x}, ${p.y})`}
                className="cursor-pointer select-none"
                onClick={() => handleNodeClick(mod.id)}
                onMouseEnter={() => setHoveredId(mod.id)}
                onMouseLeave={() => setHoveredId(null)}
                role="button"
                aria-label={`Ver ${mod.name}`}
                aria-pressed={isActive}
              >
                {/* Outer glow ring (active) */}
                <circle
                  r={isActive ? 52 : 40}
                  fill="none"
                  stroke={mod.color}
                  strokeOpacity={isActive ? 0.25 : 0}
                  strokeWidth="1"
                  style={{ transition: "all 0.45s ease" }}
                />

                {/* Pulsing glow blob (active) */}
                {isActive && (
                  <circle
                    r="36"
                    fill={mod.color}
                    opacity="0.14"
                    filter="url(#eco-gn)"
                  />
                )}

                {/* Second glow ring for depth */}
                <circle
                  r={isActive ? 44 : 36}
                  fill="none"
                  stroke={mod.color}
                  strokeOpacity={isActive ? 0.18 : 0}
                  strokeWidth="1.5"
                  strokeDasharray={isActive ? "3 4" : "0"}
                  style={{ transition: "all 0.45s ease" }}
                />

                {/* Main node circle */}
                <circle
                  r={NODE_R}
                  fill={isActive ? mod.color + "22" : "#07111f"}
                  stroke={isActive ? mod.color : "rgba(255,255,255,0.1)"}
                  strokeWidth={isActive ? 2.5 : 1}
                  style={{
                    transition: "all 0.4s ease",
                    filter: isActive
                      ? `drop-shadow(0 0 14px ${mod.color}55)`
                      : "none",
                  }}
                />

                {/* Icon (nested SVG → clean path rendering) */}
                <svg
                  x={-12} y={-12}
                  width="24" height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={isActive ? mod.color : "rgba(255,255,255,0.38)"}
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ transition: "stroke 0.4s ease", overflow: "visible" }}
                >
                  <path d={mod.iconPath} />
                </svg>

                {/* Module name label */}
                <text
                  x={lp.dx} y={lp.nameY}
                  textAnchor={lp.anchor}
                  fontSize="12" fontWeight="700"
                  fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                  fill={isActive ? mod.color : "rgba(255,255,255,0.5)"}
                  style={{ transition: "fill 0.4s ease" }}
                >
                  {mod.name}
                </text>

                {/* Tagline (short) */}
                <text
                  x={lp.dx} y={lp.tagY}
                  textAnchor={lp.anchor}
                  fontSize="9.5"
                  fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                  fill={isActive ? mod.color + "90" : "rgba(255,255,255,0.25)"}
                  style={{ transition: "fill 0.4s ease" }}
                >
                  {mod.taglineShort}
                </text>

                {/* Active indicator dot */}
                {isActive && (
                  <circle
                    cx="0" cy={NODE_R + 10}
                    r="3"
                    fill={mod.color}
                    opacity="0.9"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.9;0.3;0.9"
                      dur="1.4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* ── Module detail card ──────────────────────────────────────────────── */}
      <div
        key={displayId}
        className="relative z-10 w-full max-w-xl mx-auto px-5 mt-8 animate-fade-up"
        style={{ animationDuration: "0.38s", animationFillMode: "both" }}
      >
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${display.color}12 0%, rgba(4,9,18,0.97) 55%)`,
            border: `1px solid ${display.color}30`,
            boxShadow: `0 0 56px ${display.color}14, 0 1px 0 ${display.color}22 inset`,
          }}
        >
          {/* Card header */}
          <div className="px-6 pt-6 pb-5 flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: display.color + "1c", color: display.color }}
            >
              <svg
                width="22" height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={display.iconPath} />
              </svg>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2.5 mb-1">
                <span className="text-white font-bold text-base leading-tight">
                  {display.name}
                </span>
                <div className="flex items-center gap-1.5 shrink-0">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: display.color, boxShadow: `0 0 6px ${display.color}` }}
                  />
                  <span
                    className="text-[10px] font-semibold uppercase tracking-wider"
                    style={{ color: display.color + "cc" }}
                  >
                    Activo
                  </span>
                </div>
              </div>
              <p
                className="text-sm font-medium mb-2.5"
                style={{ color: display.color + "dd" }}
              >
                {display.tagline}
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                {display.description}
              </p>
            </div>
          </div>

          {/* Card features */}
          <div
            className="px-6 py-4 flex flex-wrap gap-2 border-t"
            style={{ borderColor: display.color + "1c" }}
          >
            {display.features.map((f) => (
              <span
                key={f}
                className="text-xs px-3 py-1.5 rounded-full font-medium"
                style={{
                  background: display.color + "14",
                  color: display.color,
                  border: `1px solid ${display.color}28`,
                }}
              >
                {f}
              </span>
            ))}

            {/* Module counter */}
            <span className="ml-auto text-xs text-white/20 self-center tabular-nums">
              {String(displayIndex + 1).padStart(2, "0")} / {String(MODULES.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* ── Module selector pills ───────────────────────────────────────────── */}
      <div className="relative z-10 mt-7 flex items-center gap-2.5">
        {MODULES.map((mod) => {
          const isActive = mod.id === displayId;
          return (
            <button
              key={mod.id}
              onClick={() => handleNodeClick(mod.id)}
              aria-label={`Activar ${mod.name}`}
              className="rounded-full transition-all duration-400"
              style={{
                width: isActive ? 28 : 8,
                height: 8,
                background: isActive ? mod.color : "rgba(255,255,255,0.18)",
                boxShadow: isActive ? `0 0 10px ${mod.color}70` : "none",
                transitionDuration: "350ms",
              }}
            />
          );
        })}
      </div>

      {/* ── Auto-cycle hint ─────────────────────────────────────────────────── */}
      <p className="relative z-10 mt-4 text-[10px] text-white/20 tracking-wider">
        {isUserInteracting ? "Hacé click en cualquier módulo" : "Ciclando automáticamente · Hacé hover para pausar"}
      </p>
    </section>
  );
}
