"use client";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section id="contact" className="py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center reveal">
        {/* Decorative lines */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-border" />
          <div className="w-2 h-2 rounded-full bg-primary/40" />
          <div className="w-3 h-3 rounded-full bg-primary/60" />
          <div className="w-2 h-2 rounded-full bg-primary/40" />
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-border" />
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] mb-6">
          Modernizá tu institución
          <br />
          <span className="gradient-text">sin romper su estructura.</span>
        </h2>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          AliadoSalud se integra al flujo de trabajo existente. Sin migraciones
          traumáticas. Sin curvas de aprendizaje disruptivas. Con resultados desde el primer día.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
          <Button size="lg" className="h-13 px-10 text-base font-medium shadow-lg shadow-primary/20">
            Solicitar demo
          </Button>
          <Button size="lg" variant="outline" className="h-13 px-10 text-base font-medium">
            Contactar al equipo
          </Button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
          {[
            "Sin contrato de permanencia",
            "Implementación asistida",
            "Soporte dedicado",
            "Escalabilidad garantizada",
          ].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="5.5" stroke="currentColor" strokeOpacity="0.4"/>
                <path d="M3.5 6l2 2 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
