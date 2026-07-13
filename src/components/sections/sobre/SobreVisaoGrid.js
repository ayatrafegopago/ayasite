"use client";

import { motion } from "framer-motion";
import { Search, MessageSquare, BarChart3, RefreshCw } from "lucide-react";
import AnimatedSection, { AnimatedTitle } from "@/components/ui/AnimatedSection";

const itens = [
  {
    icon: Search,
    title: "Compreender antes de executar",
    description:
      "Cada projeto começa pela análise do negócio, do público, da oferta e do momento atual. A estratégia precisa partir da realidade, não de uma fórmula pronta.",
  },
  {
    icon: MessageSquare,
    title: "Comunicar com clareza",
    description:
      "Identidade, conteúdo, copy e páginas precisam ajudar o público a compreender o valor da marca e o próximo passo esperado.",
  },
  {
    icon: BarChart3,
    title: "Decidir com base em dados",
    description:
      "Campanhas e ações são acompanhadas para identificar o que merece ser mantido, ajustado ou testado.",
  },
  {
    icon: RefreshCw,
    title: "Evoluir com consistência",
    description:
      "Cada resposta do público traz informações que ajudam a melhorar a comunicação, as campanhas e a estrutura do projeto.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function SobreVisaoGrid() {
  return (
    <AnimatedSection className="bg-[#FFFDFC] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <AnimatedTitle className="text-center text-2xl font-bold text-[#123B46] sm:text-3xl">
          Como essa visão aparece no trabalho
        </AnimatedTitle>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {itens.map((it) => {
            const Icon = it.icon;
            return (
              <motion.div key={it.title} variants={item} className="text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E7664C] shadow-md">
                  <Icon className="h-7 w-7 text-white" />
                </span>
                <h3 className="mt-4 font-bold text-[#123B46]">{it.title}</h3>
                <p className="mt-2 text-sm text-[#202629]/70">{it.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
