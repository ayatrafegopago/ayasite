"use client";

import { motion } from "framer-motion";
import AnimatedSection, {
  AnimatedTitle,
  AnimatedSubtitle,
} from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function ChamadaFinal() {
  return (
    <AnimatedSection className="bg-[#FFFDFC] px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <AnimatedTitle className="text-3xl font-bold text-[#123B46] sm:text-4xl">
          O valor do seu negócio precisa aparecer antes da primeira conversa.
        </AnimatedTitle>
        <AnimatedSubtitle className="mx-auto mt-6 max-w-xl text-[#202629]/70">
          A Aya ajuda você a identificar o que precisa ser ajustado para que
          sua marca comunique melhor, atraia as pessoas certas e facilite o
          próximo passo.
        </AnimatedSubtitle>

        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
        >
          <Button href="/diagnostico" variant="primary">
            Quero conversar sobre minha estratégia
          </Button>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
