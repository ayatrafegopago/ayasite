"use client";

import { motion } from "framer-motion";
import AnimatedSection, {
  AnimatedTitle,
  AnimatedSubtitle,
} from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function SobreCtaFinal() {
  return (
    <AnimatedSection className="bg-[linear-gradient(to_bottom,#FFFDFC_0%,#E3D3B4_100%)] px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <AnimatedTitle className="text-3xl font-bold text-[#123B46] sm:text-4xl">
          Seu negócio já entrega valor. Sua comunicação precisa tornar isso
          visível.
        </AnimatedTitle>
        <AnimatedSubtitle className="mx-auto mt-6 max-w-xl text-[#202629]/70">
          Vamos olhar para o momento atual da sua marca e identificar o que
          precisa ser organizado para que seu marketing avance com mais
          direção.
        </AnimatedSubtitle>

        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
        >
          <Button href="/diagnostico" variant="primary">
            Vamos conversar sobre o seu negócio
          </Button>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
