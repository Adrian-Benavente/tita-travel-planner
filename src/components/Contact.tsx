import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contacto" className="section-pad bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
            Contacto
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-emerald sm:text-4xl">
            Hablemos de tu próximo viaje
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/75">
            Cuéntame qué tienes en mente. Te respondo con cercanía y sin
            compromiso, desde Lima, Perú.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mt-10 flex flex-col items-center gap-4">
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full max-w-sm items-center justify-center rounded-sm bg-emerald px-6 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-sage-dark"
          >
            WhatsApp · {site.phones[0].number}
          </a>
          <a
            href={site.emailUrl}
            className="inline-flex w-full max-w-sm items-center justify-center rounded-sm border border-emerald/30 px-6 py-3.5 text-sm font-medium text-emerald transition-colors hover:border-emerald hover:bg-sage/10"
          >
            {site.emails.primary}
          </a>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-sm font-medium text-emerald/80 underline-offset-2 transition-colors hover:text-emerald hover:underline"
          >
            Instagram · {site.instagramHandle}
          </a>
          <a
            href={site.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-emerald/80 underline-offset-2 transition-colors hover:text-emerald hover:underline"
          >
            Facebook · Tita Travel Planner
          </a>
          <p className="text-sm text-ink/60">
            También: {site.phones[1].number}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
