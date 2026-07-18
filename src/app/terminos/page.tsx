import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Términos y condiciones de uso de los servicios de asesoría de viajes de Tita Travel Planner.",
};

export default function TerminosPage() {
  return (
    <article className="section-pad mx-auto max-w-3xl pb-20 pt-28 md:pt-32">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
        Documento legal
      </p>
      <h1 className="font-display mt-3 text-3xl font-semibold text-emerald sm:text-4xl">
        Términos y Condiciones de Uso
      </h1>
      <p className="mt-6 text-base leading-relaxed text-ink/85">
        Bienvenido a <strong className="font-semibold">Tita Travel Planner</strong>,
        marca comercial operada por{" "}
        <strong className="font-semibold">ACOSTA LEAL BERTHA CLEOFE</strong> (RUC
        10445376006).
      </p>
      <p className="mt-4 text-base leading-relaxed text-ink/85">
        Al utilizar nuestro sitio web y contratar nuestros servicios de asesoría
        de viajes, aceptas los presentes términos y condiciones en su totalidad.
      </p>

      <div className="mt-10 space-y-8 text-base leading-relaxed text-ink/85">
        <section>
          <h2 className="font-display text-xl font-semibold text-emerald">
            1. Naturaleza del Servicio
          </h2>
          <p className="mt-3">
            Tita Travel Planner actúa estrictamente como una agencia de viajes y
            turismo de intermediación y asesoría personalizada (Travel Planner).
          </p>
          <p className="mt-3">
            Nuestro servicio consiste en el diseño de itinerarios, consultoría,
            organización de viajes y gestión de reservas frente a terceros
            proveedores (aerolíneas, hoteles, operadores turísticos locales,
            transportistas, seguros de viaje, etc.).
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-emerald">
            2. Responsabilidad sobre Proveedores Terceros
          </h2>
          <p className="mt-3">
            Tita Travel Planner no es responsable directo por cancelaciones,
            demoras, huelgas, pérdidas de equipaje, quiebras o fallas operativas
            causadas por los proveedores finales de los servicios turísticos
            (hoteles, aerolíneas, etc.).
          </p>
          <p className="mt-3">
            La agencia se compromete a brindar soporte activo al cliente para
            gestionar los reclamos correspondientes, de acuerdo con las políticas
            de cada proveedor.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-emerald">
            3. Políticas de Pago y Comisiones
          </h2>
          <p className="mt-3">
            Los honorarios por el servicio de asesoría y diseño de itinerarios
            personalizados se pagan por adelantado y no son reembolsables una
            vez iniciado el trabajo de planificación.
          </p>
          <p className="mt-3">
            Las cotizaciones de pasajes o paquetes están sujetas a variaciones de
            precio y disponibilidad por parte de los proveedores hasta que se
            efectúe el pago total y se emitan los boletos oficiales.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-emerald">
            4. Cancelaciones, Modificaciones y Reembolsos
          </h2>
          <p className="mt-3">
            Cualquier cambio de fecha, destino o anulación solicitado por el
            cliente estará sujeto a las penalidades y restricciones tarifarias
            fijadas contractualmente por la aerolínea u operador turístico
            respectivo.
          </p>
          <p className="mt-3">
            Tita Travel Planner cobrará una tarifa administrativa por la gestión
            de cambios o reembolsos, la cual será informada previamente al
            pasajero.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-emerald">
            5. Documentación de Viaje
          </h2>
          <p className="mt-3">
            Es responsabilidad exclusiva del pasajero contar con la documentación
            en regla exigida por las autoridades migratorias (pasaporte vigente
            con una vigencia mínima de seis meses, visados obligatorios,
            permisos de viaje para menores de edad, vacunas o declaraciones
            juradas de salud).
          </p>
          <p className="mt-3">
            La agencia no asume responsabilidad en caso de que se le niegue el
            embarque o el ingreso al destino por falta de la documentación
            requerida.
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
