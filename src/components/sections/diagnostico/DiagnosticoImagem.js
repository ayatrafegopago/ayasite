"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DiagnosticoImagem() {
  return (
    <motion.div
      className="mx-auto mt-16 max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Image
        src="/fotos/aya-16.png"
        alt="Ilustração 3D de diagnóstico de negócio: lupa, gráfico de crescimento e checklist"
        width={960}
        height={540}
        className="mx-auto h-auto w-full object-contain"
        sizes="(max-width: 768px) 100vw, 42rem"
      />
    </motion.div>
  );
}
