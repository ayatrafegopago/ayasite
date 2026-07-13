"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AnimatedTitle } from "@/components/ui/AnimatedSection";

const etapa1Items = [
  "Diagnóstico do negócio e do cenário digital",
  "Definição do público e construção da persona",
  "Criação ou ajuste da identidade visual",
  "Estratégia de tráfego pago",
  "Configuração de públicos e campanhas",
  "Calendário editorial inicial",
  "Landing page, página de vendas ou site",
  "Copy e criativos para o início das campanhas",
];

const etapa2Items = [
  "Gerenciamento de campanhas no Meta Ads e Google Ads",
  "Acompanhamento de público, orçamento e desempenho",
  "Produção de novos criativos",
  "Criação e atualização de copies",
  "Ajustes em campanhas e páginas",
  "Relatório mensal com resultados e prioridades",
  "Testes e otimizações orientados por dados",
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function Checklist({ items }) {
  return (
    <motion.ul
      className="mt-4 space-y-2"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {items.map((it) => (
        <motion.li key={it} variants={item} className="flex items-start gap-2">
          <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#E7664C]" />
          <span className="text-[#E3D3B4]/90">{it}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default function SolucoesPacote() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <AnimatedTitle className="text-2xl font-bold text-[#E7664C] sm:text-3xl">
          Presença Digital + Tráfego Pago
        </AnimatedTitle>
        <p className="mt-4 max-w-3xl text-[#E3D3B4]/90">
          O trabalho é organizado em duas etapas. A primeira prepara a
          estrutura necessária para iniciar a divulgação. A segunda acompanha
          as campanhas, interpreta os dados e orienta os próximos ajustes.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold text-[#E7664C]">
              Etapa 1: Estratégia e implementação
            </h3>
            <p className="mt-3 text-[#E3D3B4]/90">
              Antes de colocar os anúncios no ar, analisamos o negócio, o
              público, a oferta e a estrutura atual. A partir desse
              diagnóstico, organizamos os elementos necessários para começar
              com direção.
            </p>
            <Checklist items={etapa1Items} />
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#E7664C]">
              Etapa 2: Gestão e otimização contínua
            </h3>
            <p className="mt-3 text-[#E3D3B4]/90">
              Com a estrutura implementada e as campanhas ativas, o trabalho
              passa a ser acompanhado mês a mês. Os dados mostram onde
              existem oportunidades, gargalos e pontos que precisam de
              ajuste.
            </p>
            <Checklist items={etapa2Items} />
          </div>
        </div>
      </div>
    </section>
  );
}
