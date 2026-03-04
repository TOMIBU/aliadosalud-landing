"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const MODULES = [
  {
    id: "clinico",
    name: "AliadoClinico",
    angle: 270,
    color: "#2563eb",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M9 12h6M12 9v6M8 2H5a2 2 0 00-2 2v3M16 2h3a2 2 0 012 2v3M2 16v3a2 2 0 002 2h3M22 16v3a2 2 0 01-2 2h-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    tagline: "Gestión de consultorios",
    description:
      "Gestión inteligente de consultorios integrada con las herramientas que el médico ya utiliza.",
    features: ["Agenda médica", "Historia clínica", "Prescripciones", "Integración existente"],
  },
  {
    id: "qx",
    name: "AliadoQx",
    angle: 0,
    color: "#0284c7",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M6.3 6.3l11.4 11.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    tagline: "Turnera quirúrgica",
    description:
      "Turnera y organización estratégica de quirófanos con visibilidad operativa total.",
    features: ["Programación quirúrgica", "Disponibilidad en tiempo real", "Trazabilidad", "Coordinación de equipos"],
  },
  {
    id: "admin",
    name: "AliadoAdmin",
    angle: 90,
    color: "#7c3aed",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M3 10h18M8 2v3M16 2v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M7 14h3M14 14h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    tagline: "Automatización administrativa",
    description:
      "Automatización de procesos administrativos y liquidación de honorarios profesionales.",
    features: ["Liquidación honorarios", "Facturación", "Reportes", "Auditoría"],
  },
  {
    id: "forms",
    name: "AliadoForms",
    angle: 180,
    color: "#0891b2",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9l-6-6z" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M14 3v6h6M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
    tagline: "Formularios para obras sociales",
    description:
      "Generación automática de formularios para obras sociales en segundos.",
    features: ["Generación automática", "Múltiples coberturas", "Validación integrada", "Envío digital"],
  },
];

const ORBIT_RADIUS = 190;

export function EcosystemSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = MODULES.find((m) => m.id === activeId) ?? MODULES[0];

  return (
    <section id="ecosystem" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <Badge variant="secondary" className="mb-4 text-xs tracking-widest uppercase font-medium border border-primary/20 bg-primary/5 text-primary">
            Ecosistema
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            Cuatro soluciones.<br />
            <span className="gradient-text">Un ecosistema.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Cada módulo resuelve un problema específico del sector salud y funciona de manera integrada con los demás.
          </p>
        </div>

        {/* Orbital visualization + detail card */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* SVG Orbital Ring */}
          <div className="relative flex-shrink-0" style={{ width: 460, height: 460 }}>
            <svg
              width="460"
              height="460"
              viewBox="-230 -230 460 460"
              className="overflow-visible"
            >
              {/* Outer decorative ring */}
              <circle
                cx="0" cy="0" r="215"
                fill="none"
                stroke="oklch(0.50 0.19 255 / 6%)"
                strokeWidth="1"
                strokeDasharray="4 8"
                className="animate-rotate-slow"
              />

              {/* Main orbit track */}
              <circle
                cx="0" cy="0" r={ORBIT_RADIUS}
                fill="none"
                stroke="oklch(0.50 0.19 255 / 12%)"
                strokeWidth="1.5"
              />

              {/* Inner ring */}
              <circle
                cx="0" cy="0" r="72"
                fill="none"
                stroke="oklch(0.50 0.19 255 / 10%)"
                strokeWidth="1"
                strokeDasharray="3 6"
                className="animate-rotate-slow-reverse"
              />

              {/* Glow pulse */}
              <circle
                cx="0" cy="0" r="56"
                fill="oklch(0.50 0.19 255 / 6%)"
                className="animate-pulse-glow"
              />

              {/* Center logo area */}
              <circle cx="0" cy="0" r="48" fill="white" filter="url(#centerShadow)" />
              <circle cx="0" cy="0" r="44" fill="oklch(0.97 0.015 255)" />

              {/* Center AS text */}
              <text
                x="0" y="6"
                textAnchor="middle"
                fontSize="18"
                fontWeight="700"
                fontFamily="system-ui"
                fill="oklch(0.38 0.14 250)"
                letterSpacing="-0.5"
              >
                AS
              </text>
              <text
                x="0" y="20"
                textAnchor="middle"
                fontSize="6.5"
                fontFamily="system-ui"
                fill="oklch(0.50 0.19 255 / 70%)"
                letterSpacing="1"
              >
                ALIADOSALUD
              </text>

              {/* Connection lines from center to modules */}
              {MODULES.map((mod) => {
                const rad = (mod.angle * Math.PI) / 180;
                const x = Math.cos(rad) * ORBIT_RADIUS;
                const y = Math.sin(rad) * ORBIT_RADIUS;
                const isActive = activeId === mod.id;
                return (
                  <line
                    key={mod.id}
                    x1="0" y1="0"
                    x2={x} y2={y}
                    stroke={isActive ? mod.color : "oklch(0.50 0.19 255 / 15%)"}
                    strokeWidth={isActive ? 1.5 : 1}
                    strokeDasharray="4 5"
                    style={{ transition: "all 0.3s ease" }}
                  />
                );
              })}

              {/* Module nodes */}
              {MODULES.map((mod) => {
                const rad = (mod.angle * Math.PI) / 180;
                const x = Math.cos(rad) * ORBIT_RADIUS;
                const y = Math.sin(rad) * ORBIT_RADIUS;
                const isActive = activeId === mod.id;

                return (
                  <g
                    key={mod.id}
                    transform={`translate(${x}, ${y})`}
                    className="cursor-pointer"
                    onClick={() => setActiveId(mod.id === activeId ? null : mod.id)}
                    onMouseEnter={() => setActiveId(mod.id)}
                  >
                    {/* Glow ring when active */}
                    {isActive && (
                      <circle
                        r="38"
                        fill={mod.color + "18"}
                        stroke={mod.color + "40"}
                        strokeWidth="1"
                        className="animate-pulse-glow"
                      />
                    )}
                    {/* Node circle */}
                    <circle
                      r="30"
                      fill={isActive ? mod.color : "white"}
                      stroke={isActive ? mod.color : "oklch(0.50 0.19 255 / 20%)"}
                      strokeWidth="1.5"
                      style={{ transition: "all 0.3s ease", filter: isActive ? `drop-shadow(0 0 10px ${mod.color}60)` : "none" }}
                    />
                    {/* Icon */}
                    <foreignObject x="-11" y="-11" width="22" height="22">
                      <div
                        style={{ color: isActive ? "white" : mod.color, transition: "color 0.3s" }}
                      >
                        {mod.icon}
                      </div>
                    </foreignObject>
                    {/* Label */}
                    <text
                      y={mod.angle === 270 ? -42 : mod.angle === 90 ? 44 : -8}
                      x={mod.angle === 0 ? 46 : mod.angle === 180 ? -46 : 0}
                      textAnchor={mod.angle === 0 ? "start" : mod.angle === 180 ? "end" : "middle"}
                      fontSize="11.5"
                      fontWeight="600"
                      fontFamily="system-ui"
                      fill={isActive ? mod.color : "oklch(0.30 0.05 250)"}
                      style={{ transition: "fill 0.3s" }}
                    >
                      {mod.name}
                    </text>
                    {mod.angle !== 0 && mod.angle !== 180 && (
                      <text
                        y={mod.angle === 270 ? -30 : 56}
                        textAnchor="middle"
                        fontSize="9"
                        fontFamily="system-ui"
                        fill="oklch(0.55 0.04 250)"
                      >
                        {mod.tagline}
                      </text>
                    )}
                  </g>
                );
              })}

              <defs>
                <filter id="centerShadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="oklch(0.50 0.19 255 / 15%)" />
                </filter>
              </defs>
            </svg>
          </div>

          {/* Module detail cards */}
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <p className="text-sm text-muted-foreground mb-5 lg:hidden text-center">
              Seleccioná un módulo para ver más
            </p>

            {/* Grid of cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MODULES.map((mod) => {
                const isActive = activeId === mod.id || (!activeId && mod.id === "clinico");
                return (
                  <Card
                    key={mod.id}
                    className={`cursor-pointer border transition-all duration-300 ${
                      isActive
                        ? "border-primary/40 shadow-lg shadow-primary/10 bg-white"
                        : "border-border hover:border-primary/20 bg-white/60"
                    }`}
                    onClick={() => setActiveId(mod.id === activeId ? null : mod.id)}
                    onMouseEnter={() => setActiveId(mod.id)}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: mod.color + "15", color: mod.color }}
                        >
                          {mod.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-foreground">{mod.name}</div>
                          <div className="text-xs text-muted-foreground">{mod.tagline}</div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {mod.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {mod.features.map((f) => (
                          <span
                            key={f}
                            className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                            style={{ background: mod.color + "12", color: mod.color }}
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
