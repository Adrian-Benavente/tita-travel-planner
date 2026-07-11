import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de protección de datos",
  description:
    "Política de protección de datos personales de Tita Travel Planner conforme a la normativa peruana.",
};

export default function PrivacidadPage() {
  return (
    <article className="section-pad mx-auto max-w-3xl pb-20 pt-28 md:pt-32">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
        Documento legal · Borrador para revisión
      </p>
      <h1 className="font-display mt-3 text-3xl font-semibold text-emerald sm:text-4xl">
        Política de protección de datos personales
      </h1>
      <p className="mt-4 text-sm text-ink/60">
        Última actualización: julio 2026. Responsable del tratamiento:{" "}
        {site.legalName} (RUC {site.ruc}), marca {site.brand}.
      </p>

      <div className="mt-10 space-y-8 text-base leading-relaxed text-ink/85">
        <section>
          <h2 className="font-display text-xl font-semibold text-emerald">
            1. Marco normativo
          </h2>
          <p className="mt-3">
            Esta política se formula en el marco de la Ley N.º 29733, Ley de
            Protección de Datos Personales, su Reglamento y disposiciones
            aplicables en el Perú.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-emerald">
            2. Datos que podemos tratar
          </h2>
          <p className="mt-3">
            Nombre y apellidos, documento de identidad, datos de contacto
            (teléfono, correo), preferencias de viaje, fechas, destinos,
            información de acompañantes y datos necesarios para gestionar
            reservas ante proveedores.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-emerald">
            3. Finalidad
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Brindar asesoría y planificación de viajes.</li>
            <li>Gestionar cotizaciones, reservas y comunicación con usted.</li>
            <li>Cumplir obligaciones legales, contables y tributarias.</li>
            <li>
              Enviar información relacionada con su viaje o, solo con su
              consentimiento, novedades del servicio.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-emerald">
            4. Conservación y seguridad
          </h2>
          <p className="mt-3">
            Los datos se conservarán el tiempo necesario para la finalidad
            indicada y las obligaciones legales. Se aplican medidas razonables
            de confidencialidad y acceso restringido. Algunos datos podrán
            compartirse con proveedores estrictamente necesarios para ejecutar
            el viaje (aerolíneas, hoteles, etc.).
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-emerald">
            5. Derechos ARCO
          </h2>
          <p className="mt-3">
            Usted puede ejercer sus derechos de acceso, rectificación,
            cancelación y oposición escribiendo a{" "}
            <a
              href={site.emailUrl}
              className="text-emerald underline-offset-2 hover:underline"
            >
              {site.emails.primary}
            </a>{" "}
            o al WhatsApp {site.phones[0].display}, identificándose y precisando
            su solicitud.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-emerald">
            6. Contacto del responsable
          </h2>
          <p className="mt-3">
            {site.legalName} — {site.address.line}, {site.address.district},{" "}
            {site.address.city}, {site.address.country}. Correo:{" "}
            {site.emails.primary}.
          </p>
        </section>
      </div>

      <p className="mt-12 text-sm text-ink/55">
        Este texto es un borrador orientativo. Debe ser revisado y aprobado por
        la titular antes de su uso definitivo.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block text-sm font-medium text-emerald underline-offset-2 hover:underline"
      >
        ← Volver al inicio
      </Link>
    </article>
  );
}
