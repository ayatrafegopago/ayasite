"use client";

import { motion } from "framer-motion";
import { Repeat, Award, BarChart3 } from "lucide-react";
import AnimatedSection, { AnimatedTitle } from "@/components/ui/AnimatedSection";

const destaques = [
  {
    icon: Repeat,
    title: "Mais consistência na geração de oportunidades",
    description:
      "Uma estrutura contínua para reduzir a dependência de indicação e ações pontuais.",
  },
  {
    icon: Award,
    title: "Mais valor percebido",
    description:
      "Uma comunicação clara para que o público entenda seu diferencial e confie na sua marca.",
  },
  {
    icon: BarChart3,
    title: "Decisões mais seguras",
    description: "Dados para identificar o que manter, ajustar e priorizar.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ApresentacaoSolucao() {
  return (
    <AnimatedSection className="bg-[#8A3D2A] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedTitle className="text-3xl font-bold text-[#FFFDFC] sm:text-4xl">
            Menos improviso. Mais clareza para crescer.
          </AnimatedTitle>

          <motion.p
            className="mt-4 text-[#E3D3B4]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            A Aya organiza sua presença digital para que cada ação tenha uma
            função clara: atrair o público certo, comunicar valor e orientar
            os próximos passos com base no que realmente gera resposta.
          </motion.p>
        </div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {destaques.map((destaque) => {
            const Icon = destaque.icon;
            return (
              <motion.div
                key={destaque.title}
                variants={item}
                className="text-center sm:text-left"
              >
                <Icon className="mx-auto h-8 w-8 text-[#E3D3B4] sm:mx-0" />
                <h3 className="mt-4 min-h-14 text-lg font-semibold leading-7 text-[#FFFDFC]">
                  {destaque.title}
                </h3>
                <p className="mt-2 text-sm text-[#E3D3B4]/80">
                  {destaque.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
