import AnimatedSection, { AnimatedTitle } from "@/components/ui/AnimatedSection";
import Accordion from "@/components/ui/Accordion";
import { faq } from "@/data/faq";

export default function Faq() {
  const items = faq.map((item) => ({
    title: item.pergunta,
    description: item.resposta,
  }));

  return (
    <AnimatedSection className="relative overflow-hidden bg-[#FFFDFC] px-6 py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -right-16 h-[28rem] w-[28rem] opacity-10"
        style={{
          backgroundColor: "#202629",
          WebkitMaskImage: "url(/logo/logo-aya-5.png)",
          maskImage: "url(/logo/logo-aya-5.png)",
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />

      <div className="relative mx-auto max-w-3xl">
        <AnimatedTitle className="text-center text-3xl font-bold text-[#123B46] sm:text-4xl">
          Perguntas frequentes
        </AnimatedTitle>

        <Accordion
          items={items}
          stagger
          containerClassName="mt-12 divide-y divide-[#123B46]/10 border-t border-b border-[#123B46]/10"
          titleClassName="font-semibold text-[#123B46]"
          descriptionClassName="pb-5 text-[#202629]/70"
          chevronClassName="shrink-0 text-[#E7664C]"
        />
      </div>
    </AnimatedSection>
  );
}
