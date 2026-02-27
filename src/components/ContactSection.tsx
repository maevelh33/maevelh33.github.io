import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
};

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-cream">
      <div className="max-w-xl mx-auto px-6">
        <FadeIn>
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Contact
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground mb-2">
            Écrivez-moi
          </h2>
          <div className="w-12 h-px bg-vert-antique mb-10" />
        </FadeIn>

        {submitted ? (
          <FadeIn>
            <div className="text-center py-12">
              <p className="font-display text-2xl text-foreground mb-2">Merci pour votre message.</p>
              <p className="font-body text-sm text-muted-foreground">Je vous répondrai dans les meilleurs délais.</p>
            </div>
          </FadeIn>
        ) : (
          <FadeIn delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-bordeaux/50 transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-bordeaux/50 transition-colors"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-bordeaux/50 transition-colors resize-none"
                  placeholder="Votre message…"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 font-body text-sm tracking-[0.2em] uppercase px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                Envoyer <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
