"use client";

import { motion } from "framer-motion";
import AnimatedSection, {
  AnimatedTitle,
  AnimatedSubtitle,
} from "@/components/ui/AnimatedSection";
import Accordion from "@/components/ui/Accordion";

const etapas = [
  {
    title: "Hipóteses Estratégicas",
    description:
      "Investigamos o negócio, a oferta, o mercado e o comportamento do público para identificar os fatores que podem estimular ou impedir uma decisão de compra.",
  },
  {
    title: "Usuário Ideal",
    description:
      "Compreendemos quem o negócio precisa atrair, considerando dores, desejos, objeções, nível de consciência e momento de decisão.",
  },
  {
    title: "Mensagem Relevante",
    description:
      "Transformamos a oferta em uma comunicação clara e estratégica, coerente com o que o público precisa entender para avançar.",
  },
  {
    title: "Aquisição Direcionada",
    description:
      "Criamos campanhas para apresentar a mensagem certa às pessoas com maior potencial de se tornarem clientes.",
  },
  {
    title: "Nutrição da Decisão",
    description:
      "Construímos pontos de contato que aumentam a confiança e ajudam o potencial cliente a perceber valor antes da conversa comercial.",
  },
  {
    title: "Otimização Contínua",
    description:
      "Analisamos dados e comportamentos para transformar resultados em decisões práticas, corrigindo falhas e ampliando oportunidades.",
  },
];

export default function ComoFunciona() {
  return (
    <AnimatedSection className="bg-[linear-gradient(to_bottom,#8A3D2A_0%,#123B46_100%)] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedTitle className="text-3xl font-bold text-[#FFFDFC] sm:text-4xl">
            O Método HUMANO, em 6 etapas.
          </AnimatedTitle>
          <AnimatedSubtitle className="mt-4 text-[#E3D3B4]">
            Uma metodologia própria que une hipótese, comportamento,
            comunicação, aquisição, nutrição e otimização dentro de um mesmo
            processo.
          </AnimatedSubtitle>
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl shadow-xl lg:max-w-none"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <video
              src="/videos/aya19.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
          </motion.div>

          <Accordion
            items={etapas}
            stagger
            containerClassName="divide-y divide-[#E3D3B4]/20 border-t border-b border-[#E3D3B4]/20"
            titleClassName="text-lg font-semibold text-[#FFFDFC]"
            descriptionClassName="pb-5 text-[#E3D3B4]/90"
            chevronClassName="shrink-0 text-[#E7664C]"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
