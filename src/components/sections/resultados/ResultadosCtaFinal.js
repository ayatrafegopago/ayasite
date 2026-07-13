"use client";

import { motion } from "framer-motion";
import AnimatedSection, {
  AnimatedTitle,
  AnimatedSubtitle,
} from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function ResultadosCtaFinal() {
  return (
    <AnimatedSection className="px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <AnimatedTitle className="text-3xl font-bold text-[#123B46] sm:text-4xl">
          Quer entender quais dados realmente importam para o seu negócio?
        </AnimatedTitle>
        <AnimatedSubtitle className="mx-auto mt-4 max-w-xl text-[#202629]/70">
          Em uma conversa inicial, analisamos seus objetivos, sua estrutura
          atual e os indicadores que precisam ser acompanhados para orientar
          as próximas decisões.
        </AnimatedSubtitle>

        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
        >
          <Button href="/diagnostico" variant="primary">
            Quero analisar meu marketing
          </Button>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
