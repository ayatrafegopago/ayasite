"use client";

import { motion } from "framer-motion";
import { AnimatedTitle } from "@/components/ui/AnimatedSection";

const letras = [
  { letra: "H", palavra: "ipóteses" },
  { letra: "U", palavra: "suário" },
  { letra: "M", palavra: "ensagem" },
  { letra: "A", palavra: "quisição" },
  { letra: "N", palavra: "utrição" },
  { letra: "O", palavra: "timização" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function SolucoesMetodoHumano() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <AnimatedTitle className="text-2xl font-bold text-[#E7664C] sm:text-3xl">
            O Método HUMANO
          </AnimatedTitle>

          <motion.div
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {letras.map((l) => (
              <motion.span
                key={l.letra}
                variants={item}
                className="rounded-full border border-[#E3D3B4]/30 px-4 py-1.5 text-sm text-[#E3D3B4]"
              >
                <span className="font-bold text-[#E7664C]">{l.letra}</span>
                {l.palavra}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-[#E3D3B4]/90">
          Com base na proposta da Aya, o Método HUMANO transforma tráfego
          pago em uma estrutura completa de comunicação, aquisição e
          melhoria contínua. Ele une formação em Psicologia, entendimento do
          comportamento humano, construção da presença digital e análise de
          dados em Meta Ads e Google Ads.
        </p>

        <motion.div
          className="mx-auto mt-10 max-w-2xl rounded-2xl border border-[#E3D3B4]/20 bg-white/5 px-8 py-8 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-lg font-medium italic text-[#FFFDFC]">
            &ldquo;Transformar negócios que dependem de indicação e ações
            improvisadas em marcas capazes de atrair, orientar e converter
            clientes com mais clareza e previsibilidade.&rdquo;
          </p>
        </motion.div>

        <div className="mt-14">
          <h3 className="text-xl font-bold text-[#E7664C]">
            Como o método organiza os serviços
          </h3>
          <p className="mt-4 text-[#E3D3B4]/90">
            Hipóteses e Usuário representam a parte estratégica — antes de
            anunciar, entendemos o negócio, o mercado, o público e os
            motivos que influenciam a decisão. Mensagem representa a
            construção da presença digital: identidade visual, copy,
            conteúdo, criativos, páginas e posicionamento. Aquisição
            representa a gestão técnica de tráfego pago, transformando
            estratégia em campanhas no Meta Ads e Google Ads. Nutrição
            representa a preparação do público, com conteúdo, remarketing e
            páginas que geram confiança. Otimização representa a gestão
            contínua, analisando o que precisa ser mantido, alterado ou
            ampliado.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-bold text-[#E7664C]">
            Aplicação no pacote
          </h3>
          <p className="mt-4 text-[#E3D3B4]/90">
            Na etapa inicial do pacote, são executadas principalmente as
            fases de Hipóteses, Usuário, Mensagem e Aquisição — diagnóstico,
            definição de público, organização da comunicação e implementação
            das campanhas. Na mensalidade de gestão, são trabalhadas
            principalmente as fases de Nutrição e Otimização —
            acompanhamento de resultados, novos criativos, ajustes e testes.
            O serviço adicional de conteúdo participa especialmente das
            etapas de Mensagem e Nutrição.
          </p>
        </div>

        <motion.p
          className="mx-auto mt-16 max-w-2xl text-center text-2xl font-bold text-[#FFFDFC] sm:text-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Método HUMANO: dados mostram o caminho,{" "}
          <span className="text-[#E7664C]">pessoas tomam a decisão.</span>
        </motion.p>
      </div>
    </section>
  );
}
