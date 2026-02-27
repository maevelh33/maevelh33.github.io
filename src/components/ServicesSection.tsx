import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Youtube, Instagram, BookOpen, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
};

const externalLinks = [
  { icon: Youtube, label: "YouTube", desc: "Philosophie, psychologie, patrimoine", href: "https://www.youtube.com/@mlhorion" },
  { icon: Instagram, label: "Instagram", desc: "Réflexions & coulisses", href: "https://www.instagram.com/mlh.orion" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Retrouvez-moi
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground mb-2">
            Liens & Services
          </h2>
          <div className="w-12 h-px bg-bordeaux mb-12" />
        </FadeIn>

        {/* Links */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {externalLinks.map((link, i) => (
            <FadeIn key={link.label} delay={i * 0.1}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-card border border-border rounded hover:border-bordeaux/40 transition-colors group"
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-bordeaux transition-colors mb-4" />
                <h3 className="font-display text-lg font-medium text-foreground mb-1">{link.label}</h3>
                <p className="font-body text-sm text-muted-foreground">{link.desc}</p>
              </a>
            </FadeIn>
          ))}
          <FadeIn delay={0.2}>
            <Link
              to="/livres"
              className="block p-6 bg-card border border-border rounded hover:border-bordeaux/40 transition-colors group"
            >
              <BookOpen className="w-5 h-5 text-muted-foreground group-hover:text-bordeaux transition-colors mb-4" />
              <h3 className="font-display text-lg font-medium text-foreground mb-1">Livres</h3>
              <p className="font-body text-sm text-muted-foreground">Mes ouvrages et essais</p>
            </Link>
          </FadeIn>
        </div>

        {/* Booking */}
        <FadeIn delay={0.3}>
          <div className="p-8 md:p-12 bg-cream rounded border border-border text-center">
            <Calendar className="w-6 h-6 text-vert-antique mx-auto mb-4" />
            <h3 className="font-display text-2xl md:text-3xl font-light text-foreground mb-3">
              Réservez un appel
            </h3>
            <p className="font-body text-base text-muted-foreground mb-6 max-w-md mx-auto leading-relaxed">
              Vous souhaitez échanger sur un sujet, poser des questions, ou simplement discuter&nbsp;?
              Je propose des appels sur rendez-vous.
            </p>
            <a
              href="mailto:contact@mlhorion.com?subject=Demande de rendez-vous"
              className="inline-block font-body text-sm tracking-[0.2em] uppercase px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              Prendre rendez-vous
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ServicesSection;
