"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const imagens = [
  { src: "/fotos/aya-12.png", alt: "Mockup de painel de campanhas do Meta Ads" },
  { src: "/fotos/aya-13.png", alt: "Mockup de gráficos de ROI, CPA e origem de tráfego" },
];

export default function ResultadosImagens() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
        {imagens.map((imagem, i) => (
          <motion.div
            key={imagem.src}
            className="relative aspect-video"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
          >
            <Image
              src={imagem.src}
              alt={imagem.alt}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 90vw, 32rem"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
