export function EsnnaBanner() {
  return (
    <section
      id="esnna"
      aria-labelledby="esnna-heading"
      className="section-pad border-y-4 border-deep-blue bg-deep-blue py-10 text-ivory md:py-12"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold">
          Prevención obligatoria · Turismo responsable
        </p>
        <h2
          id="esnna-heading"
          className="font-display mt-3 text-xl font-semibold tracking-wide sm:text-2xl"
        >
          Rechazamos la explotación sexual de niñas, niños y adolescentes
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-ivory/90 sm:text-base">
          En cumplimiento de la normativa peruana y los lineamientos del
          MINCETUR, <strong className="font-semibold">Tita Travel Planner</strong>{" "}
          declara su compromiso absoluto con la prevención y denuncia de la
          Explotación Sexual de Niñas, Niños y Adolescentes (ESNNA) en el ámbito
          del turismo. No toleramos ni facilitamos ninguna forma de abuso o
          explotación infantil.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-ivory/80">
          Si conoces o sospechas de un caso, denúncialo. Línea gratuita contra
          la trata de personas:{" "}
          <a
            href="tel:1818"
            className="font-semibold text-gold underline-offset-2 hover:underline"
          >
            1818
          </a>
          . Policía Nacional del Perú:{" "}
          <a
            href="tel:105"
            className="font-semibold text-gold underline-offset-2 hover:underline"
          >
            105
          </a>
          .
        </p>
      </div>
    </section>
  );
}
