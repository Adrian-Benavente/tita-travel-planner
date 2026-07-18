export function EsnnaBanner() {
  return (
    <section
      id="esnna"
      aria-labelledby="esnna-heading"
      className="section-pad border-y-4 border-deep-blue bg-deep-blue py-12 text-ivory md:py-16"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold">
            Turismo responsable · Responsible tourism
          </p>
          <h2
            id="esnna-heading"
            className="font-display mt-3 text-xl font-semibold tracking-wide sm:text-2xl"
          >
            Prevención ESNNA
          </h2>
        </div>

        <div className="mt-8 space-y-4 text-center text-sm leading-relaxed text-ivory/90 sm:text-base">
          <p>
            En cumplimiento del artículo 32.1 de la{" "}
            <strong className="font-semibold">
              Ley N.° 29408 (Ley General de Turismo)
            </strong>{" "}
            y del{" "}
            <strong className="font-semibold">
              Decreto Supremo N.° 005-2020-MINCETUR
            </strong>
            , <strong className="font-semibold">Tita Travel Planner</strong>{" "}
            rechaza categóricamente y sanciona la{" "}
            <strong className="font-semibold">
              Explotación Sexual de Niñas, Niños y Adolescentes (ESNNA)
            </strong>{" "}
            en el ámbito del turismo.
          </p>
          <p>
            El cumplimiento de esta normativa es obligatorio, y las conductas
            infractoras están penadas por la legislación peruana.
          </p>
          <p>
            Si conoce o sospecha de algún caso, denúncielo a la{" "}
            <strong className="font-semibold">Línea Gratuita{" "}
              <a
                href="tel:1818"
                className="text-gold underline-offset-2 hover:underline"
              >
                1818
              </a>
            </strong>{" "}
            o a la{" "}
            <strong className="font-semibold">
              Policía Nacional del Perú (Línea{" "}
              <a
                href="tel:105"
                className="text-gold underline-offset-2 hover:underline"
              >
                105
              </a>
              )
            </strong>
            .
          </p>
        </div>

        <div className="mt-10 space-y-4 border-t border-ivory/15 pt-8 text-center text-sm leading-relaxed text-ivory/70 sm:text-[0.9375rem]">
          <p>
            In compliance with{" "}
            <strong className="font-semibold text-ivory/85">
              Article 32.1 of Law No. 29408 (General Tourism Law)
            </strong>{" "}
            and{" "}
            <strong className="font-semibold text-ivory/85">
              Supreme Decree No. 005-2020-MINCETUR
            </strong>
            , <strong className="font-semibold text-ivory/85">Tita Travel Planner</strong>{" "}
            categorically rejects and condemns the{" "}
            <strong className="font-semibold text-ivory/85">
              Sexual Exploitation of Children and Adolescents (ESNNA)
            </strong>{" "}
            within the tourism sector.
          </p>
          <p>
            Compliance with this regulation is mandatory, and any violations are
            punishable under Peruvian law.
          </p>
          <p>
            If you know of or suspect any such case, please report it to the{" "}
            <strong className="font-semibold text-ivory/85">
              Toll-Free Hotline{" "}
              <a
                href="tel:1818"
                className="text-gold underline-offset-2 hover:underline"
              >
                1818
              </a>
            </strong>{" "}
            or the{" "}
            <strong className="font-semibold text-ivory/85">
              National Police of Peru (Hotline{" "}
              <a
                href="tel:105"
                className="text-gold underline-offset-2 hover:underline"
              >
                105
              </a>
              )
            </strong>
            .
          </p>
        </div>

        <div className="mt-10">
          <div className="overflow-hidden rounded-sm border border-ivory/20 bg-ivory/5">
            <object
              data="/docs/afiche-esnna.pdf"
              type="application/pdf"
              className="h-[min(70vh,560px)] w-full"
              aria-label="Afiche de prevención ESNNA"
            >
              <p className="p-6 text-center text-sm text-ivory/80">
                No se pudo mostrar el afiche en este navegador.{" "}
                <a
                  href="/docs/afiche-esnna.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gold underline-offset-2 hover:underline"
                >
                  Abrir o descargar el PDF
                </a>
                .
              </p>
            </object>
          </div>
          <p className="mt-4 text-center">
            <a
              href="/docs/afiche-esnna.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gold underline-offset-2 hover:underline"
            >
              Ver / descargar afiche ESNNA (PDF)
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
