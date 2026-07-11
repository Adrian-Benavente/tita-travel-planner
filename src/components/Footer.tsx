import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const { address } = site;

  return (
    <footer className="section-pad bg-sand/50 py-14 text-sm text-ink/80">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold text-emerald">
            {site.brand}
          </p>
          <p className="font-script mt-1 text-2xl text-gold">{site.slogan}</p>
          <p className="mt-4 leading-relaxed">
            Asesoría personalizada de viajes nacionales e internacionales.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            Identificación legal
          </h2>
          <ul className="mt-4 space-y-2 leading-relaxed">
            <li>
              <span className="text-ink/55">Titular: </span>
              {site.legalName}
            </li>
            <li>
              <span className="text-ink/55">Nombre comercial: </span>
              {site.commercialName}
            </li>
            <li>
              <span className="text-ink/55">Marca: </span>
              {site.brand}
            </li>
            <li>
              <span className="text-ink/55">RUC: </span>
              {site.ruc}
            </li>
            <li>
              <span className="text-ink/55">Domicilio: </span>
              {address.line}, {address.district}, {address.city},{" "}
              {address.country}. {address.reference}.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            Contacto y legales
          </h2>
          <ul className="mt-4 space-y-2 leading-relaxed">
            <li>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-emerald"
              >
                Tel. {site.phones[0].display}
              </a>
              {" · "}
              <a
                href={`tel:+51${site.phones[1].number}`}
                className="transition-colors hover:text-emerald"
              >
                {site.phones[1].display}
              </a>
            </li>
            <li>
              <a
                href={site.emailUrl}
                className="transition-colors hover:text-emerald"
              >
                {site.emails.primary}
              </a>
            </li>
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-emerald"
              >
                Instagram · {site.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-emerald"
              >
                Facebook · Tita Travel Planner
              </a>
            </li>
            <li className="flex flex-wrap gap-x-4 gap-y-1 pt-2">
              <Link
                href="/terminos"
                className="underline-offset-2 hover:text-emerald hover:underline"
              >
                Términos y condiciones
              </Link>
              <Link
                href="/privacidad"
                className="underline-offset-2 hover:text-emerald hover:underline"
              >
                Protección de datos
              </Link>
              <Link
                href="/#esnna"
                className="underline-offset-2 hover:text-emerald hover:underline"
              >
                Prevención ESNNA
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-6xl border-t border-sage/25 pt-6 text-center text-xs text-ink/50">
        © {year} {site.legalName}. {site.brand}. Todos los derechos reservados.
      </p>
    </footer>
  );
}
