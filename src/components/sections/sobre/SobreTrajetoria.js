"use client";

import { motion } from "framer-motion";
import { Search, Megaphone, LineChart, BrainCircuit } from "lucide-react";

const etapas = [
  {
    icon: Search,
    title: "Antes dos anúncios, veio o interesse pelo comportamento",
    paragraphs: [
      "Em 2020, durante a graduação em Psicologia, tive meu primeiro contato com o neuromarketing. Foi quando comecei a observar com mais profundidade a relação entre percepção, emoção, comunicação e tomada de decisão. Uma mensagem não funciona apenas pelas palavras escolhidas. Ela também depende do contexto, da forma como é apresentada e da maneira como o público interpreta aquilo que vê. Esse interesse pelo comportamento humano permaneceu comigo e, mais tarde, encontrou espaço dentro do marketing digital.",
    ],
  },
  {
    icon: Megaphone,
    title: "A transição para o marketing digital",
    paragraphs: [
      "Minha entrada no marketing começou pelos fundamentos da comunicação visual. Estudei identidade visual, criação de peças e copy para entender como uma marca se apresenta, organiza suas ideias e transforma uma oferta em uma mensagem clara para o público. Esse início moldou a forma como trabalho hoje. Uma campanha pode alcançar muitas pessoas, mas perde força quando a identidade não transmite confiança, o texto não comunica valor ou a página dificulta o próximo passo. Por isso, passei a enxergar o marketing como uma jornada completa, e não como um conjunto de tarefas isoladas.",
    ],
  },
  {
    icon: LineChart,
    title: "Da comunicação à performance",
    paragraphs: [
      "Na Comunidade Subido de Tráfego, aprofundei meus conhecimentos em gestão de campanhas, estratégia e análise de desempenho. Passei a me especializar em Meta Ads e Google Ads, além de continuar desenvolvendo habilidades relacionadas à criação, ao acompanhamento e à otimização de campanhas. O tráfego pago acrescentou uma nova camada ao meu trabalho. Além de pensar na mensagem, passei a analisar como as pessoas respondem, quais caminhos despertam mais interesse e onde a estratégia precisa ser ajustada.",
    ],
    pullQuote:
      "Os dados mostram o que está acontecendo. O estudo do comportamento ajuda a interpretar por que aquilo está acontecendo.",
  },
  {
    icon: BrainCircuit,
    title: "Tecnologia a favor da estratégia",
    paragraphs: [
      "Também venho ampliando meus conhecimentos em automações com inteligência artificial, criação de agentes, assistentes e processos que ajudam a organizar tarefas e tornar a operação mais eficiente. Ao mesmo tempo, aprofundei meus estudos em landing pages, páginas de vendas e sites. Essas estruturas têm uma função clara dentro da estratégia: receber o visitante, apresentar a oferta, responder dúvidas e facilitar o contato ou a compra. Hoje, o trabalho da Aya reúne estratégia, identidade visual, copy, conteúdo, páginas, tráfego pago e análise dentro de uma visão completa da presença digital.",
    ],
  },
];

export default function SobreTrajetoria() {
  return (
    <section className="bg-[#FFFDFC] px-6 py-16">
      <div className="mx-auto max-w-3xl space-y-16">
        {etapas.map((etapa, i) => {
          const Icon = etapa.icon;
          return (
            <motion.div
              key={etapa.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E7664C]">
                  <Icon className="h-5 w-5 text-white" />
                </span>
                <h2 className="text-xl font-bold text-[#123B46] sm:text-2xl">
                  {etapa.title}
                </h2>
              </div>

              <div className="mt-4 space-y-4 pl-[3.25rem]">
                {etapa.paragraphs.map((paragrafo) => (
                  <p key={paragrafo} className="text-[#202629]/80">
                    {paragrafo}
                  </p>
                ))}
              </div>

              {etapa.pullQuote && (
                <blockquote className="mt-6 border-l-4 border-[#E7664C] pl-6 text-lg font-medium italic text-[#123B46]">
                  {etapa.pullQuote}
                </blockquote>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
