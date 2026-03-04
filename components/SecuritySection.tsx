"use client";

import { Badge } from "@/components/ui/badge";

const ITEMS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7L12 3z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Protección de datos sensibles",
    body: "La información médica es tratada con los más altos estándares de confidencialidad. Accesos controlados y auditados.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="11" width="20" height="11" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="12" cy="16" r="1.5" fill="currentColor"/>
      </svg>
    ),
    title: "Infraestructura cloud segura",
    body: "Desplegado sobre infraestructura cloud con cifrado en tránsito y en reposo, backups automáticos y alta disponibilidad.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <polyline points="16 18 22 12 16 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="8 6 2 12 8 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Buenas prácticas de desarrollo",
    body: "Código revisado, dependencias actualizadas, pruebas continuas. Desarrollo responsable orientado a la seguridad.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
    title: "Confidencialidad médica",
    body: "Diseñado respetando el marco normativo de privacidad en salud. La información del paciente nunca se expone.",
  },
];

export function SecuritySection() {
  return (
    <section id="security" className="py-28 px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <Badge className="mb-4 text-xs tracking-widest uppercase font-medium bg-white/10 text-white/80 border-white/15 hover:bg-white/15">
            Seguridad y Confianza
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            Infraestructura pensada para{" "}
            <span style={{
              background: "linear-gradient(135deg, #60a5fa 0%, #818cf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              datos sensibles.
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            El sector salud maneja información crítica. Nuestra arquitectura está
            diseñada con eso como prioridad absoluta.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              className="reveal group rounded-xl border border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20 p-6 transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-white/30 mt-10 max-w-xl mx-auto">
          AliadoSalud aplica buenas prácticas de seguridad en el desarrollo
          y despliegue de sus soluciones. Para requerimientos de certificación
          específicos, consultá con el equipo.
        </p>
      </div>
    </section>
  );
}
