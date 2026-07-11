import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Términos y condiciones de uso de los servicios de asesoría de viajes de Tita Travel Planner.",
};

export default function TerminosPage() {
  return (
    <article className="section-pad mx-auto max-w-3xl pb-20 pt-28 md:pt-32">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
        Documento legal · Borrador para revisión
      </p>
      <h1 className="font-display mt-3 text-3xl font-semibold text-emerald sm:text-4xl">
        Términos y condiciones de uso
      </h1>
      <p className="mt-4 text-sm text-ink/60">
        Última actualización: julio 2026. Prestador: {site.legalName}, con
        nombre comercial {site.commercialName} (RUC {site.ruc}), operando bajo
        la marca {site.brand}.
      </p>

      <div className="prose-legal mt-10 space-y-8 text-base leading-relaxed text-ink/85">
        <section>
          <h2 className="font-display text-xl font-semibold text-emerald">
            1. Objeto
          </h2>
          <p className="mt-3">
            Estos términos regulan el uso del sitio web y la contratación de
            servicios de asesoría y planificación de viajes ofrecidos por{" "}
            {site.brand}. Al solicitar una cotización o contratar un servicio,
            usted acepta estas condiciones.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-emerald">
            2. Naturaleza del servicio
          </h2>
          <p className="mt-3">
            {site.brand} brinda asesoría personalizada, diseño de itinerarios y
            gestión de reservas a través de proveedores terceros (aerolíneas,
            hoteles, operadores, etc.). Salvo que se indique expresamente lo
            contrario por escrito, no actúa como operador turístico de los
            servicios de transporte o alojamiento en sí mismos.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-emerald">
            3. Políticas comerciales de cobro
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              Los honorarios por asesoría y los montos de servicios se
              comunicarán por escrito (correo o WhatsApp) antes de cualquier
              pago.
            </li>
            <li>
              Puede solicitarse un adelanto para iniciar la planificación o
              asegurar tarifas; el porcentaje o monto se detallará en la
              propuesta.
            </li>
            <li>
              Los pagos se realizan mediante los medios indicados en la
              cotización. Se emitirá el comprobante electrónico correspondiente
              (recibo por honorarios u otro autorizado).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-emerald">
            4. Cancelación de servicios y reembolsos
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Honorarios de asesoría:</strong> si el cliente cancela
              antes de haberse entregado el itinerario o propuesta final, podrá
              solicitarse la devolución parcial o total del adelanto según el
              trabajo ya realizado, lo que se informará caso por caso.
            </li>
            <li>
              <strong>Servicios de terceros</strong> (vuelos, hoteles, tours,
              seguros, etc.): las cancelaciones, cambios y reembolsos se rigen
              exclusivamente por las políticas del proveedor. {site.brand}{" "}
              facilitará la gestión ante el proveedor, sin garantizar el
              reembolso cuando la política del tercero no lo permita.
            </li>
            <li>
              Toda solicitud de cancelación debe enviarse por escrito al correo{" "}
              <a
                href={site.emailUrl}
                className="text-emerald underline-offset-2 hover:underline"
              >
                {site.emails.primary}
              </a>{" "}
              o al WhatsApp oficial.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-emerald">
            5. Responsabilidad
          </h2>
          <p className="mt-3">
            {site.brand} actúa con diligencia profesional en la asesoría. No
            responde por demoras, cancelaciones, cambios de itinerario,
            sobreventas u otras contingencias atribuibles a proveedores
            externos, fuerza mayor o decisiones del viajero.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-emerald">
            6. Contacto
          </h2>
          <p className="mt-3">
            Domicilio: {site.address.line}, {site.address.district},{" "}
            {site.address.city}, {site.address.country}. Teléfonos:{" "}
            {site.phones.map((p) => p.number).join(" / ")}. Correo:{" "}
            {site.emails.primary}.
          </p>
        </section>
      </div>

      <p className="mt-12 text-sm text-ink/55">
        Este texto es un borrador orientativo para la publicación del canal
        digital. Debe ser revisado y aprobado por la titular antes de su uso
        definitivo ante MINCETUR.
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
