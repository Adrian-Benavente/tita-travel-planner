import { Reveal } from "@/components/Reveal";

const services = [
  {
    title: "Asesoría personalizada",
    description:
      "Escucho tus gustos, ritmo y presupuesto para diseñar un viaje a tu medida.",
    icon: PlaneIcon,
  },
  {
    title: "Planificación completa",
    description:
      "Itinerarios claros, reservas y detalles organizados para que viajes sin estrés.",
    icon: SuitcaseIcon,
  },
  {
    title: "Destinos nacionales e internacionales",
    description:
      "Desde escapes en el Perú hasta experiencias en el exterior, con acompañamiento cercano.",
    icon: MapIcon,
  },
  {
    title: "Tranquilidad en el camino",
    description:
      "Estoy disponible para orientarte antes y durante el viaje, con profesionalismo y calidez.",
    icon: CompassIcon,
  },
] as const;

export function Services() {
  return (
    <section id="servicios" className="section-pad border-y border-sage/20 bg-sand/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
            Servicios
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-emerald sm:text-4xl">
            Cómo te acompaño
          </h2>
          <p className="mt-4 text-base text-ink/75">
            Atención personalizada, organización y experiencias memorables —
            sin presión de venta.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-14">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={0.08 * i}>
              <article className="flex gap-5">
                <span className="mt-1 shrink-0 text-emerald" aria-hidden>
                  <service.icon />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-emerald">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-ink/75">
                    {service.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlaneIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 20 2.5 18.5 1 16.5 1.5 15 3L11.5 6.5 3.3 4.7c-.4-.1-.8.1-1 .4L2 5.8c-.3.5-.1 1.1.4 1.3L9 10l-2.2 2.2-2.6-.7c-.3-.1-.7 0-.9.3l-.5.7c-.3.4-.1.9.3 1.1l3.2 1.5 1.5 3.2c.2.4.7.6 1.1.3l.7-.5c.3-.2.4-.6.3-.9l-.7-2.6L12 15l2.9 6.6c.2.5.8.7 1.3.4l.7-.3c.3-.2.5-.6.4-1z" />
    </svg>
  );
}

function SuitcaseIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M12 12v3" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6z" />
      <path d="M9 3v15" />
      <path d="M15 6v15" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="m16.2 7.8-2.1 6.3-6.3 2.1 2.1-6.3 6.3-2.1z" />
    </svg>
  );
}
