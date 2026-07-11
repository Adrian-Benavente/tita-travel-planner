import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="sobre-mi" className="section-pad bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
            Sobre mí
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-emerald sm:text-4xl">
            {site.founder}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 text-base leading-relaxed text-ink/85 sm:text-lg">
            Soy asesora de viajes independiente. No vendo solo paquetes: te
            acompaño desde la idea hasta el regreso a casa, con organización,
            honestidad y una atención cercana pensada para que disfrutes cada
            momento con confianza.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mt-6 text-base leading-relaxed text-ink/75 sm:text-lg">
            {site.mission}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
