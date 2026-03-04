export function Footer() {
  return (
    <footer className="border-t border-border bg-slate-50 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 3L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7L12 3z" fill="white" opacity="0.9"/>
              <path d="M10 12h4M12 10v4" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="font-semibold text-foreground text-sm">
            Aliado<span className="text-primary">Salud</span>
          </span>
        </div>

        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} AliadoSalud. Ecosistema digital para el sector salud.
        </p>

        <div className="flex items-center gap-5 text-xs text-muted-foreground">
          <a href="#ecosystem" className="hover:text-foreground transition-colors">Soluciones</a>
          <a href="#philosophy" className="hover:text-foreground transition-colors">Filosofía</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
