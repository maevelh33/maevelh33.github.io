const Footer = () => {
  return (
    <footer className="py-12 bg-foreground">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="font-display text-xl text-background/80 mb-4">
          MLH.<span className="text-background/60">ORION</span>
        </p>
        <p className="font-body text-xs tracking-widest uppercase text-background/40 mb-6">
          Philosophie · Psychologie · Littérature · Patrimoine
        </p>
        <div className="w-8 h-px bg-background/20 mx-auto mb-6" />
        <p className="font-body text-xs text-background/30">
          © {new Date().getFullYear()} Maëve Orion — Tous droits réservés
        </p>
      </div>
    </footer>
  );
};

export default Footer;
