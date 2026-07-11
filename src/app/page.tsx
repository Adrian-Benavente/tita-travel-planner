import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { EsnnaBanner } from "@/components/EsnnaBanner";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ValueProp } from "@/components/ValueProp";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ValueProp />
      <Contact />
      <EsnnaBanner />
    </>
  );
}
