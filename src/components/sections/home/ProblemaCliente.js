"use client";

import { motion } from "framer-motion";
import AnimatedSection, {
  AnimatedTitle,
  AnimatedSubtitle,
} from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";

const problemas = [
  {
    title: "Dependência de indicação",
    description:
      "O negócio vive de boca a boca e sente o baque assim que as indicações diminuem.",
  },
  {
    title: "Anúncios que atraem curiosos",
    description:
      "Os anúncios rodam, geram cliques, mas trazem curiosos em vez de clientes prontos para comprar.",
  },
  {
    title: "Conteúdo sem planejamento",
    description:
      "Os posts saem no impulso, sem estratégia por trás, e não constroem percepção de valor ao longo do tempo.",
  },
  {
    title: "Comunicação desconectada",
    description:
      "Site, redes e anúncios falam de formas diferentes, e isso gera desconfiança em quem está decidindo fechar.",
  },
  {
    title: "Poucos pedidos qualificados",
    description:
      "Os contatos chegam, mas boa parte não tem o perfil ou a urgência pra fechar negócio.",
  },
  {
    title: "Decisões no escuro",
    description:
      "Sem dado claro sobre o que funciona, cada decisão de investimento vira uma aposta.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: ({ fromLeft }) => ({ opacity: 0, x: fromLeft ? -40 : 40 }),
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProblemaCliente() {
  return (
    <AnimatedSection className="bg-[linear-gradient(to_bottom,#E3D3B4_0%,#8A3D2A_100%)] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedTitle className="text-3xl font-bold text-[#123B46] sm:text-4xl">
            Um fluxo instável de clientes costuma começar em um marketing sem
            direção.
          </AnimatedTitle>
          <AnimatedSubtitle className="mt-4 text-[#202629]/70">
            Quando conteúdo, páginas e anúncios seguem caminhos diferentes, o
            negócio até aparece, mas não constrói uma entrada consistente de
            novas oportunidades.
          </AnimatedSubtitle>
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-[#123B46]/70">
            É assim que essa falta de direção aparece no dia a dia:
          </p>
        </div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {problemas.map((problema, i) => (
            <motion.div
              key={problema.title}
              custom={{ fromLeft: i % 2 === 0 }}
              variants={cardVariants}
            >
              <Card className="h-full">
                <h3 className="font-bold text-[#123B46]">{problema.title}</h3>
                <p className="mt-2 text-sm text-[#202629]/70">
                  {problema.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
