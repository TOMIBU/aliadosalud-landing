"use client";

import { Badge } from "@/components/ui/badge";

const SEGMENTS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Clínicas y sanatorios",
    description: "Gestión integral de múltiples especialidades, quirófanos y administración centralizada.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Centros quirúrgicos",
    description: "Coordinación de turnos, equipos y recursos con visibilidad operativa completa.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
    title: "Consultorios médicos",
    description: "Herramientas que se adaptan al flujo individual del médico, sin complejidad innecesaria.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M12 12v4M10 14h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Administraciones de salud",
    description: "Automatización de liquidaciones, facturación y reportes para equipos de gestión.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Redes profesionales",
    description: "Coordinación entre grupos de médicos que comparten pacientes, estructuras y recursos.",
  },
];

export function AudienceSection() {
  return (
    <section id="audience" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <Badge variant="secondary" className="mb-4 text-xs tracking-widest uppercase font-medium border border-primary/20 bg-primary/5 text-primary">
            Para quién es AliadoSalud
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            Diseñado para cada{" "}
            <span className="gradient-text">nivel del sistema de salud.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Tanto si gestionás un consultorio individual como una institución compleja,
            hay un módulo AliadoSalud que resuelve tu problema.
          </p>
        </div>

        {/* Segments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SEGMENTS.map((seg, i) => (
            <div
              key={seg.title}
              className="reveal group rounded-xl border border-border bg-white p-6 hover:border-primary/25 hover:shadow-md transition-all duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/6 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                {seg.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{seg.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{seg.description}</p>
            </div>
          ))}

          {/* "+" card */}
          <div className="reveal rounded-xl border border-dashed border-primary/25 bg-primary/3 p-6 flex flex-col items-center justify-center text-center" style={{ transitionDelay: `${SEGMENTS.length * 60}ms` }}>
            <div className="w-11 h-11 rounded-xl border border-primary/30 text-primary flex items-center justify-center mb-4 text-xl font-light">
              +
            </div>
            <h3 className="font-semibold text-foreground mb-1 text-sm">¿Otro contexto?</h3>
            <p className="text-xs text-muted-foreground">
              Conversemos. Evaluamos cada caso para encontrar la mejor integración.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
