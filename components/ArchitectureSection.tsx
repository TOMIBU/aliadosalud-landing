"use client";

import { Badge } from "@/components/ui/badge";

const CONCEPTS = [
  {
    id: "modularidad",
    label: "Modularidad",
    description: "Cada módulo opera de forma independiente. Implementá solo lo que necesitás.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.7"/>
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.7"/>
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.7"/>
        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.7"/>
      </svg>
    ),
    color: "#2563eb",
  },
  {
    id: "integrabilidad",
    label: "Integrabilidad",
    description: "Los módulos comparten datos y flujos en tiempo real sin fricciones.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M8 6l-4 6 4 6M16 6l4 6-4 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 12h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
    color: "#0284c7",
  },
  {
    id: "escalabilidad",
    label: "Escalabilidad",
    description: "Diseñado para crecer: desde un consultorio hasta una red institucional.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M3 17l6-6 4 4 8-8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 7h6v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#7c3aed",
  },
  {
    id: "interoperabilidad",
    label: "Interoperabilidad",
    description: "Estándares abiertos que permiten integración con sistemas existentes.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="5" cy="12" r="3" stroke="currentColor" strokeWidth="1.7"/>
        <circle cx="19" cy="12" r="3" stroke="currentColor" strokeWidth="1.7"/>
        <circle cx="12" cy="6" r="3" stroke="currentColor" strokeWidth="1.7"/>
        <circle cx="12" cy="18" r="3" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M8 12h8M12 9v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    color: "#0891b2",
  },
];

const LAYERS = [
  { label: "AliadoClinico · AliadoQx · AliadoAdmin · AliadoForms", sub: "Capa de Aplicación", color: "oklch(0.50 0.19 255 / 15%)", border: "oklch(0.50 0.19 255 / 25%)" },
  { label: "API Gateway · Autenticación · Orquestación", sub: "Capa de Integración", color: "oklch(0.50 0.19 255 / 8%)", border: "oklch(0.50 0.19 255 / 15%)" },
  { label: "Infraestructura Cloud · Seguridad · Monitoreo", sub: "Capa de Infraestructura", color: "oklch(0.50 0.19 255 / 4%)", border: "oklch(0.50 0.19 255 / 10%)" },
];

export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div className="reveal">
            <Badge variant="secondary" className="mb-4 text-xs tracking-widest uppercase font-medium border border-primary/20 bg-primary/5 text-primary">
              Arquitectura Modular
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Independientes.<br />
              <span className="gradient-text">Integrados.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Cada módulo funciona de forma autónoma y, en conjunto, forman un ecosistema
              cohesivo que comparte estándares de seguridad, diseño y datos.
            </p>

            {/* Concept pills */}
            <div className="grid grid-cols-2 gap-3">
              {CONCEPTS.map((c) => (
                <div
                  key={c.id}
                  className="group p-4 rounded-xl border border-border hover:border-primary/25 bg-white hover:shadow-sm transition-all duration-300"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-2.5"
                    style={{ background: c.color + "15", color: c.color }}
                  >
                    {c.icon}
                  </div>
                  <div className="font-semibold text-sm text-foreground mb-1">{c.label}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{c.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: architecture diagram */}
          <div className="reveal">
            <div className="relative rounded-2xl border border-border bg-slate-50 p-8 overflow-hidden">
              {/* Background grid */}
              <div className="absolute inset-0 bg-grid opacity-60" />

              <div className="relative space-y-3">
                {LAYERS.map((layer, i) => (
                  <div
                    key={layer.sub}
                    className="rounded-xl border p-4 transition-all duration-300 hover:shadow-sm"
                    style={{
                      background: layer.color,
                      borderColor: layer.border,
                    }}
                  >
                    <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium mb-1">
                      {layer.sub}
                    </div>
                    <div className="text-sm font-medium text-foreground">{layer.label}</div>
                  </div>
                ))}

                {/* Connector lines */}
                <div className="flex justify-center py-1">
                  <div className="flex flex-col items-center gap-1">
                    {[0, 1].map((n) => (
                      <div key={n} className="flex items-center gap-2">
                        <div className="w-px h-4 bg-primary/20" />
                        <svg width="8" height="8" viewBox="0 0 8 8">
                          <path d="M4 0v8M0 4l4 4 4-4" stroke="oklch(0.50 0.19 255 / 40%)" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Module nodes */}
                <div className="grid grid-cols-4 gap-2">
                  {["Clínico", "Qx", "Admin", "Forms"].map((mod, i) => {
                    const colors = ["#2563eb", "#0284c7", "#7c3aed", "#0891b2"];
                    return (
                      <div
                        key={mod}
                        className="rounded-lg p-3 text-center border transition-all duration-200 hover:shadow-sm"
                        style={{
                          background: colors[i] + "10",
                          borderColor: colors[i] + "30",
                          color: colors[i],
                        }}
                      >
                        <div className="text-xs font-semibold">Aliado</div>
                        <div className="text-xs font-bold">{mod}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Arquitectura de capas — cada módulo conecta al ecosistema central
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
