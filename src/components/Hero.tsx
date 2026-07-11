"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay },
        };

  return (
    <section
      id="inicio"
      className="bg-atmosphere relative flex min-h-[100svh] items-center overflow-hidden pt-20"
    >
      <div className="section-pad relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 py-12 md:grid-cols-2 md:gap-12 md:py-16 lg:gap-16">
        <div className="order-2 text-center md:order-1 md:text-left">
          <motion.p
            className="font-script text-3xl text-gold sm:text-4xl"
            {...fade(0.1)}
          >
            {site.slogan}
          </motion.p>
          <motion.h1
            className="font-display mt-3 text-5xl font-semibold leading-[1.1] tracking-wide text-emerald sm:text-6xl lg:text-7xl"
            {...fade(0.2)}
          >
            Tita
          </motion.h1>
          <motion.p
            className="mt-2 text-xs font-medium uppercase tracking-[0.28em] text-gold sm:text-sm"
            {...fade(0.28)}
          >
            Travel Planner
          </motion.p>
          <motion.p
            className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink/85 md:mx-0 md:text-lg"
            {...fade(0.36)}
          >
            Asesoría personalizada de viajes nacionales e internacionales, con
            cercanía y tranquilidad en cada paso.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:items-start"
            {...fade(0.45)}
          >
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-sm bg-emerald px-6 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-sage-dark sm:w-auto"
            >
              Planifiquemos tu viaje
            </a>
            <a
              href={site.emailUrl}
              className="inline-flex w-full items-center justify-center rounded-sm border border-emerald/30 px-6 py-3.5 text-sm font-medium text-emerald transition-colors hover:border-emerald hover:bg-sage/10 sm:w-auto"
            >
              Escribir por correo
            </a>
          </motion.div>
        </div>

        <motion.div
          className="order-1 flex justify-center md:order-2 md:justify-end"
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, scale: 0.92 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const, delay: 0.15 },
              })}
        >
          <div className="relative aspect-square w-[min(88vw,420px)] md:w-[min(100%,460px)]">
            <div
              aria-hidden
              className="absolute inset-[-6%] rounded-full bg-sage/20 blur-2xl"
            />
            <Image
              src="/img/hero.png"
              alt={`${site.founder}, fundadora de ${site.brand}`}
              fill
              priority
              sizes="(max-width: 768px) 88vw, 460px"
              className="object-contain drop-shadow-[0_20px_50px_rgba(31,92,74,0.15)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
