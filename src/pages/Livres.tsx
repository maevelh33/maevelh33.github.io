import { motion } from "framer-motion";
import { BookOpen, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay, ease: "easeOut" }} className={className}>
    {children}
  </motion.div>
);

const books = [
  {
    title: "Titre du livre 1",
    description: "Description à compléter. Résumé, thèmes abordés, et ce que le lecteur y trouvera.",
    link: "#",
  },
  {
    title: "Titre du livre 2",
    description: "Description à compléter. Résumé, thèmes abordés, et ce que le lecteur y trouvera.",
    link: "#",
  },
];

const Livres = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-8 px-6 border-b border-border">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </Link>
          <span className="font-display text-lg tracking-wide text-foreground">MLH.ORION</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <FadeIn>
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Bibliographie
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-light text-foreground mb-2">
            Mes Livres & Écrits
          </h1>
          <div className="w-12 h-px bg-bordeaux mb-12" />
        </FadeIn>

        {/* Books */}
        <div className="space-y-10 mb-20">
          {books.map((book, i) => (
            <FadeIn key={book.title} delay={i * 0.1}>
              <div className="p-8 bg-card border border-border rounded">
                <div className="flex items-start gap-4 mb-4">
                  <BookOpen className="w-5 h-5 text-bordeaux mt-1 shrink-0" />
                  <h2 className="font-display text-xl md:text-2xl font-medium text-foreground">
                    {book.title}
                  </h2>
                </div>
                <p className="font-body text-base leading-[1.9] text-muted-foreground mb-4 ml-9">
                  {book.description}
                </p>
                {book.link !== "#" && (
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 ml-9 font-body text-sm text-bordeaux hover:text-foreground transition-colors"
                  >
                    Voir le livre <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Substack */}
        <FadeIn delay={0.3}>
          <div className="p-8 md:p-12 bg-cream rounded border border-border">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
              Newsletter
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-light text-foreground mb-4">
              Substack
            </h2>
            <p className="font-body text-base leading-[1.9] text-muted-foreground mb-6">
              Retrouvez mes réflexions, essais et textes plus longs sur mon Substack. 
              Un espace d'écriture libre, approfondi, sans contrainte de format.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-body text-sm tracking-[0.2em] uppercase px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              Lire sur Substack
            </a>
          </div>
        </FadeIn>
      </main>

      {/* Simple footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} MLH.ORION — Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Livres;
