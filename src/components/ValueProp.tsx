import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function ValueProp() {
  return (
    <section className="section-pad bg-emerald py-20 text-ivory md:py-28">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="font-script text-3xl text-gold sm:text-4xl md:text-5xl">
          Experiencias con tranquilidad
        </p>
        <blockquote className="font-display mt-8 text-xl font-semibold leading-snug tracking-wide sm:text-2xl md:text-3xl">
          “{site.valueProposition}”
        </blockquote>
      </Reveal>
    </section>
  );
}
