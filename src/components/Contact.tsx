import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

const socials = [
  {
    href: site.instagramUrl,
    label: `Instagram ${site.instagramHandle}`,
    icon: InstagramIcon,
  },
  {
    href: site.facebookUrl,
    label: "Facebook Tita Travel Planner",
    icon: FacebookIcon,
  },
  {
    href: site.tiktokUrl,
    label: `TikTok ${site.tiktokHandle}`,
    icon: TikTokIcon,
  },
] as const;

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
            WhatsApp · {site.phones[0].display}
          </a>
          <a
            href={site.emailUrl}
            className="inline-flex w-full max-w-sm items-center justify-center rounded-sm border border-emerald/30 px-6 py-3.5 text-sm font-medium text-emerald transition-colors hover:border-emerald hover:bg-sage/10"
          >
            {site.emails.primary}
          </a>

          <div className="mt-4 flex items-center justify-center gap-3">
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex size-11 items-center justify-center rounded-full border border-emerald/25 text-emerald transition-colors hover:border-emerald hover:bg-sage/15"
              >
                <social.icon />
              </a>
            ))}
          </div>

          <p className="text-sm text-ink/60">
            También: {site.phones[1].display}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.5l.5-3H14V9z"
        fill="currentColor"
      />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.6 8.2a6.4 6.4 0 0 1-3.7-1.2v6.7a5.7 5.7 0 1 1-4.9-5.6v2.9a2.8 2.8 0 1 0 2 2.7V2.5h2.9c.3 1.6 1.4 3 2.9 3.7v2z" />
    </svg>
  );
}
