"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import AnimatedSection, { AnimatedTitle } from "@/components/ui/AnimatedSection";

const ajustes = [
  "Segmentação de público",
  "Distribuição do orçamento",
  "Posicionamentos dos anúncios",
  "Criativos e copies",
  "Páginas de destino",
  "Ofertas e chamadas para ação",
  "Etapas do processo de contato",
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ResultadosProcesso() {
  return (
    <AnimatedSection className="px-6 py-12">
      <div className="mx-auto max-w-3xl space-y-14">
        <div>
          <AnimatedTitle className="text-xl font-bold text-[#123B46] sm:text-2xl">
            Criativos testados com base na resposta do público
          </AnimatedTitle>
          <p className="mt-4 text-[#202629]/80">
            As campanhas podem começar com diferentes versões de imagem,
            vídeo, copy, oferta e chamada para ação. Essas variações ajudam a
            identificar quais abordagens despertam mais interesse e geram
            respostas mais qualificadas. O volume de testes é definido de
            acordo com o orçamento disponível e a quantidade de dados gerados
            pela campanha. Os criativos com melhor desempenho recebem
            prioridade. Os que apresentam resultado fraco são revisados,
            pausados ou substituídos por novas variações. Esse processo
            também ajuda a evitar que os anúncios permaneçam iguais por
            tempo demais e percam força diante do público.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#123B46] sm:text-2xl">
            Otimização contínua
          </h2>
          <p className="mt-4 text-[#202629]/80">
            Ao longo do mês, as campanhas são revisadas para identificar
            oportunidades e gargalos. A análise pode gerar ajustes em:
          </p>

          <motion.ul
            className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {ajustes.map((ajuste) => (
              <motion.li key={ajuste} variants={item} className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#E7664C]" />
                <span className="text-[#202629]/80">{ajuste}</span>
              </motion.li>
            ))}
          </motion.ul>

          <p className="mt-4 text-[#202629]/80">
            As decisões são feitas a partir de dados suficientes para
            comparação. Isso evita mudanças precipitadas e permite
            compreender melhor o impacto de cada ajuste.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#123B46] sm:text-2xl">
            Os dados também precisam conversar com o negócio
          </h2>
          <p className="mt-4 text-[#202629]/80">
            Uma campanha pode gerar contatos com um bom custo e ainda assim
            não produzir o resultado esperado. Isso acontece quando existem
            gargalos depois do anúncio, como demora no atendimento,
            dificuldade para agendar, uma oferta pouco clara ou contatos que
            não correspondem ao perfil desejado. Quando informações sobre
            agendamentos, orçamentos e vendas são compartilhadas, a análise
            se torna mais completa. Assim, conseguimos avaliar a campanha
            além das métricas da plataforma e entender a qualidade real das
            oportunidades geradas.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
