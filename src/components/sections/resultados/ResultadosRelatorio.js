"use client";

import { motion } from "framer-motion";
import { ClipboardList, Settings2, Lightbulb, ListChecks } from "lucide-react";
import AnimatedSection, { AnimatedTitle } from "@/components/ui/AnimatedSection";

const itens = [
  {
    icon: ClipboardList,
    title: "O que aconteceu",
    description: "As principais métricas e os resultados observados durante o período.",
  },
  {
    icon: Settings2,
    title: "O que foi ajustado",
    description:
      "As mudanças realizadas em públicos, criativos, orçamento, copy ou estrutura.",
  },
  {
    icon: Lightbulb,
    title: "O que aprendemos",
    description: "Os padrões identificados a partir da resposta do público.",
  },
  {
    icon: ListChecks,
    title: "O que será priorizado",
    description:
      "Os próximos testes e ajustes recomendados para o novo ciclo.",
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

export default function ResultadosRelatorio() {
  return (
    <AnimatedSection className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedTitle className="text-2xl font-bold text-[#123B46] sm:text-3xl">
            Relatório mensal
          </AnimatedTitle>
          <p className="mt-4 text-[#202629]/80">
            Todos os meses, você recebe uma leitura clara do desempenho das
            campanhas, sem excesso de termos técnicos. O relatório
            apresenta:
          </p>
        </div>

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

        <p className="mx-auto mt-12 max-w-2xl text-center text-[#202629]/80">
          O objetivo é fazer com que você compreenda o que está acontecendo e
          tenha mais segurança para decidir onde manter, corrigir ou
          direcionar o investimento.
        </p>
      </div>
    </AnimatedSection>
  );
}
