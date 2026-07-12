import Image from "next/image";
import AnimatedSection, { AnimatedTitle } from "@/components/ui/AnimatedSection";
import Accordion from "@/components/ui/Accordion";
import { servicos } from "@/data/servicos";

export default function ServicosResumo() {
  const items = servicos.map((servico) => ({
    title: servico.titulo,
    description: servico.descricao,
  }));

  return (
    <AnimatedSection className="relative overflow-hidden bg-[#123B46] px-6 py-16">
      <Image
        aria-hidden
        src="/logo/logo-aya-5.png"
        alt=""
        width={520}
        height={520}
        className="pointer-events-none absolute -bottom-16 -right-16 h-[28rem] w-[28rem] object-contain opacity-10"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-center gap-3">
          <span className="relative h-8 w-8 shrink-0">
            <Image
              src="/logo/logo-aya-5.png"
              alt=""
              fill
              className="object-contain"
            />
          </span>
          <AnimatedTitle className="text-2xl font-bold text-[#FFFDFC]">
            Serviços
          </AnimatedTitle>
        </div>

        <Accordion
          items={items}
          containerClassName="mt-8 divide-y divide-[#E3D3B4]/20 border-t border-b border-[#E3D3B4]/20"
          itemClassName=""
          titleClassName="text-lg font-semibold text-[#FFFDFC]"
          descriptionClassName="pb-5 text-[#E3D3B4]/80"
          chevronClassName="text-[#E3D3B4]"
        />
      </div>
    </AnimatedSection>
  );
}
