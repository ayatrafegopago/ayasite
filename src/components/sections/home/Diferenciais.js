"use client";

import { motion } from "framer-motion";
import { Users, Compass, TrendingUp, Store } from "lucide-react";
import AnimatedSection, {
  AnimatedTitle,
  AnimatedSubtitle,
} from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";

const diferenciais = [
  {
    icon: Users,
    title: "Contato direto",
    description: "Você fala com quem planeja e executa.",
  },
  {
    icon: Compass,
    title: "Estratégia com contexto",
    description: "Cada ação parte da realidade do negócio.",
  },
  {
    icon: TrendingUp,
    title: "Evolução orientada por dados",
    description: "Resultados transformados em próximos passos.",
  },
  {
    icon: Store,
    title: "Foco no seu modelo de negócio",
    description:
      "Soluções pensadas para negócios locais e prestadores de serviço.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Diferenciais() {
  return (
    <AnimatedSection className="bg-[#FFFDFC] px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedTitle className="text-3xl font-bold text-[#123B46] sm:text-4xl">
            Clareza no processo, proximidade na execução.
          </AnimatedTitle>
          <AnimatedSubtitle className="mt-4 text-[#202629]/70">
            A Aya acompanha cada etapa de perto, combinando entendimento do
            negócio, execução estratégica e decisões baseadas em dados.
          </AnimatedSubtitle>
        </div>

        <motion.div
          className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {diferenciais.map((diferencial) => {
            const Icon = diferencial.icon;
            return (
              <motion.div key={diferencial.title} variants={item}>
                <Card className="h-full text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E7664C]">
                    <Icon className="h-7 w-7 text-white" />
                  </span>
                  <h3 className="mt-4 font-bold text-[#123B46]">
                    {diferencial.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#202629]/70">
                    {diferencial.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
