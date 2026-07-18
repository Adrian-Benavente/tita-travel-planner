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
        Documento legal
      </p>
      <h1 className="font-display mt-3 text-3xl font-semibold text-emerald sm:text-4xl">
        Política de Protección de Datos Personales
      </h1>

      <div className="mt-10 space-y-8 text-base leading-relaxed text-ink/85">
        <section>
          <h2 className="font-display text-xl font-semibold text-emerald">
            1. Declaración de Cumplimiento
          </h2>
          <p className="mt-3">
            En cumplimiento de la{" "}
            <strong className="font-semibold">
              Ley N.° 29733 (Ley de Protección de Datos Personales del Perú)
            </strong>{" "}
            y su Reglamento (
            <strong className="font-semibold">
              Decreto Supremo N.° 003-2013-JUS
            </strong>
            ),{" "}
            <strong className="font-semibold">ACOSTA LEAL BERTHA CLEOFE</strong>,
            identificada con{" "}
            <strong className="font-semibold">RUC 10445376006</strong> y con
            domicilio en{" "}
            <strong className="font-semibold">
              A.H. SM de Porres de Campoy, Mz. B1 Lt. 1, San Juan de Lurigancho,
              Lima
            </strong>
            , garantiza la confidencialidad, seguridad y el correcto uso de los
            datos personales proporcionados por sus usuarios y clientes.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-emerald">
            2. Finalidad del Tratamiento de Datos
          </h2>
          <p className="mt-3">
            Los datos personales recopilados a través de nuestros formularios
            web, correos electrónicos o canales de WhatsApp (como nombres,
            apellidos, DNI o pasaporte, fecha de nacimiento, teléfono y correo
            electrónico) serán utilizados estrictamente para las siguientes
            finalidades:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              Gestionar y emitir cotizaciones de viaje solicitadas
              voluntariamente por el cliente.
            </li>
            <li>
              Tramitar reservas de pasajes aéreos, reservas hoteleras y demás
              servicios turísticos directamente con los proveedores finales,
              tanto nacionales como internacionales.
            </li>
            <li>
              Mantener una comunicación fluida con el cliente antes, durante y
              después del viaje programado.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-emerald">
            3. Transferencia de Datos
          </h2>
          <p className="mt-3">
            El usuario acepta que sus datos personales (únicamente aquellos
            necesarios, como nombre, pasaporte y fecha de nacimiento) sean
            transferidos a terceros proveedores, nacionales o extranjeros
            (líneas aéreas, hoteles, transportistas y otros prestadores de
            servicios turísticos), con el único objetivo de gestionar y
            concretar los servicios de viaje reservados y contratados por el
            titular de los datos.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-emerald">
            4. Derechos ARCO
          </h2>
          <p className="mt-3">
            Los usuarios de{" "}
            <strong className="font-semibold">Tita Travel Planner</strong> tienen
            el derecho de acceder, rectificar, cancelar u oponerse al
            tratamiento de su información personal (Derechos ARCO), de
            conformidad con la legislación peruana.
          </p>
          <p className="mt-3">
            Para ejercer cualquiera de estos derechos, el usuario podrá enviar
            una solicitud por escrito, adjuntando una copia de su DNI, al correo
            electrónico oficial:{" "}
            <a
              href={site.emailUrl}
              className="font-semibold text-emerald underline-offset-2 hover:underline"
            >
              {site.emails.primary}
            </a>
            .
          </p>
        </section>
      </div>

      <Link
        href="/"
        className="mt-12 inline-block text-sm font-medium text-emerald underline-offset-2 hover:underline"
      >
        ← Volver al inicio
      </Link>
    </article>
  );
}
