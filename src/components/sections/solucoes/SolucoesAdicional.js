"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const items = [
  "Calendário editorial",
  "12 posts mensais por rede social",
  "Artes estáticas e carrosséis",
  "Copy para as publicações",
  "Roteiros para gravação de Reels",
  "Pacotes adicionais conforme a necessidade de volume",
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function SolucoesAdicional() {
  return (
    <section className="px-6 py-12">
      <motion.div
        className="mx-auto max-w-4xl rounded-2xl border border-[#E3D3B4]/20 bg-white/5 p-8 sm:p-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-[#E3D3B4]/60">
          Serviço adicional
        </span>
        <h2 className="mt-2 text-2xl font-bold text-[#E7664C] sm:text-3xl">
          Conteúdo para redes sociais
        </h2>
        <p className="mt-2 text-[#E3D3B4]">
          Uma presença ativa, coerente e alinhada à estratégia.
        </p>
        <p className="mt-4 text-[#E3D3B4]/90">
          Para negócios que também precisam manter uma rotina de conteúdo, a
          Aya oferece planejamento e produção mensal para redes sociais.
        </p>

        <motion.ul
          className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {items.map((it) => (
            <motion.li key={it} variants={item} className="flex items-start gap-2">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#E7664C]" />
              <span className="text-[#E3D3B4]/90">{it}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
