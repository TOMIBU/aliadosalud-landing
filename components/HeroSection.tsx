"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let nodes: { x: number; y: number; vx: number; vy: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Generate floating nodes
    for (let i = 0; i < 28; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.12 * (1 - dist / 140)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(37, 99, 235, 0.25)";
        ctx.fill();
      });

      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid pt-16">
      {/* Animated canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden
      />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, oklch(0.96 0.02 255 / 0.85) 0%, oklch(0.98 0.005 255 / 0.95) 60%, white 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          className="animate-fade-up"
          style={{ animationFillMode: "both" }}
        >
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-1.5 text-xs tracking-widest uppercase font-medium border border-primary/20 bg-primary/5 text-primary"
          >
            Ecosistema Digital en Salud
          </Badge>
        </div>

        <h1
          className="animate-fade-up delay-100 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6"
          style={{ animationFillMode: "both" }}
        >
          Tecnología que
          <br />
          <span className="gradient-text">ordena la salud.</span>
        </h1>

        <p
          className="animate-fade-up delay-200 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ animationFillMode: "both" }}
        >
          Un ecosistema de soluciones digitales diseñadas para modernizar la
          gestión médica, quirúrgica y administrativa.
        </p>

        <div
          className="animate-fade-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-3"
          style={{ animationFillMode: "both" }}
        >
          <Button size="lg" asChild className="h-12 px-8 text-sm font-medium shadow-lg shadow-primary/20">
            <a href="#ecosystem">Conocer soluciones</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="h-12 px-8 text-sm font-medium">
            <a href="#contact">Solicitar una demo</a>
          </Button>
        </div>

        {/* Stats row */}
        <div
          className="animate-fade-up delay-500 mt-16 flex items-center justify-center gap-10 sm:gap-16"
          style={{ animationFillMode: "both" }}
        >
          {[
            { value: "4", label: "Módulos especializados" },
            { value: "100%", label: "Orientado al sector salud" },
            { value: "1", label: "Ecosistema integrado" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1 max-w-[100px]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
          <rect x="1" y="1" width="12" height="18" rx="6" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="7" cy="6" r="2" fill="currentColor" className="animate-float" />
        </svg>
      </div>
    </section>
  );
}
