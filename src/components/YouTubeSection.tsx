import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
};

const YouTubeSection = () => {
  return (
    <section id="youtube" className="py-24 md:py-32 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            La Chaîne
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground mb-2">
            Comment tout a commencé
          </h2>
          <div className="w-12 h-px bg-vert-antique mb-10" />
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="font-body text-base leading-[1.9] text-muted-foreground mb-6">
            J'avais passé des années seule, à lire, à m'inspirer de contenus instructifs, à écrire
            des livres, des essais, à vivre dans un monde imaginaire. Puis j'ai découvert qu'enseigner
            à voix haute permet de mieux retenir, comprendre, et structurer les idées.
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="font-body text-base leading-[1.9] text-muted-foreground mb-6">
            C'est ce qui m'a poussée à ouvrir ma chaîne, pour approfondir mes savoirs,
            améliorer ma diction, et affiner ma pensée par la parole. J'ai investi dans une caméra
            et j'ai décidé, malgré mon inclination au retrait, de prendre la parole.
            Non pas par goût de l'exposition, mais par besoin de m'améliorer.
          </p>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className="font-body text-base leading-[1.9] text-muted-foreground mb-6">
            Je n'avais pas imaginé que ce que je cherchais puisse aider, et passionner tant de personnes.
            Et pourtant, me voilà, toujours en quête, mais désormais accompagnée.
          </p>
        </FadeIn>

        {/* Value proposition */}
        <FadeIn delay={0.45}>
          <div className="mt-12 p-8 bg-background rounded border border-border">
            <h3 className="font-display text-2xl font-medium text-foreground mb-4">
              La valeur de ma chaîne
            </h3>
            <p className="font-body text-base leading-[1.9] text-muted-foreground mb-4">
              Dans un monde saturé de faux experts et de discours vides, ma chaîne est un espace
              de partage, de transmission, et de clarification. Chaque vidéo naît d'un travail
              rigoureux&nbsp;: recherches longues, lectures croisées, synthèse des idées.
            </p>
            <p className="font-body text-base leading-[1.9] text-muted-foreground mb-4">
              J'essaie d'offrir ce que j'aurais voulu trouver moi-même&nbsp;: un contenu qui éclaire
              sans dicter, qui transmet sans abrutir, qui respecte l'intelligence de celles et ceux
              qui regardent.
            </p>
            <p className="font-body text-base leading-[1.9] text-muted-foreground">
              Je veux également permettre au plus grand nombre de découvrir des métiers oubliés,
              ainsi que notre patrimoine — tout ce qui embellit ce monde et que l'on oublie
              et délaisse pour le profit.
            </p>
          </div>
        </FadeIn>

        {/* Process */}
        <FadeIn delay={0.55}>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Recherche", desc: "Semaines de lectures croisées, d'analyses et de synthèse." },
              { step: "02", title: "Création", desc: "Écriture du script, apprentissage, tournage et montage." },
              { step: "03", title: "Publication", desc: "Miniature, description et mise en ligne soignées." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <p className="font-display text-3xl text-vert-antique font-light mb-2">{item.step}</p>
                <h4 className="font-display text-lg font-medium text-foreground mb-2">{item.title}</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default YouTubeSection;
