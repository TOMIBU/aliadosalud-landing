"use client";

import { Badge } from "@/components/ui/badge";

const PILLARS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Integramos, no imponemos",
    body: "Nos adaptamos al flujo real de trabajo del profesional de salud. Sin curvas de aprendizaje disruptivas.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Automatizamos lo repetitivo",
    body: "Eliminamos tareas manuales que consumen tiempo sin generar valor clínico o administrativo.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M2 12h4l3-7 4 14 3-7h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Reducimos fricción operativa",
    body: "Cada módulo está diseñado para eliminar los puntos de fricción específicos del entorno médico.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Mejoramos trazabilidad",
    body: "Registros auditables, flujos documentados y visibilidad completa sobre cada proceso.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Pensados para escalar",
    body: "Desde consultorios individuales hasta redes institucionales complejas, sin cambiar de plataforma.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Centrados en el profesional",
    body: "No somos una app más. Somos un aliado estratégico que entiende la complejidad del sistema de salud.",
  },
];

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-28 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16 reveal">
          <Badge variant="secondary" className="mb-4 text-xs tracking-widest uppercase font-medium border border-primary/20 bg-primary/5 text-primary">
            Nuestra Filosofía
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5 leading-tight">
            Diseñamos tecnología que trabaja para el{" "}
            <span className="gradient-text">profesional de la salud.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Entendemos que el entorno médico tiene lógicas propias. Por eso no imponemos
            nuevas plataformas complejas: nos integramos al flujo real de trabajo.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`reveal group p-6 rounded-xl border border-border bg-white hover:border-primary/25 hover:shadow-md transition-all duration-300`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/8 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/12 transition-colors">
                {pillar.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-[15px]">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.body}</p>
            </div>
          ))}
        </div>

        {/* Quote block */}
        <div className="mt-16 reveal">
          <blockquote className="relative max-w-3xl mx-auto text-center">
            <div className="text-5xl text-primary/20 font-serif leading-none mb-2">&ldquo;</div>
            <p className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed">
              Reducimos fricción operativa en entornos médicos complejos,
              mejorando eficiencia y trazabilidad sin disrupciones.
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-border" />
              <span className="text-sm text-muted-foreground font-medium">AliadoSalud</span>
              <div className="h-px w-12 bg-border" />
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
