"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, BarChart3 } from "lucide-react";

export default function SobreVenn() {
  return (
    <section className="bg-[#FFFDFC] px-6 pb-16">
      <div className="relative mx-auto aspect-[5/3] w-full max-w-md">
        {/* left circle: Comportamento Humano */}
        <motion.div
          className="absolute left-0 top-0 aspect-square w-[60%] rounded-full bg-[#123B46]/90"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute left-[33%] top-1/2 flex w-[26%] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center text-white">
            <Brain className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" />
            <span className="mt-2 text-[0.65rem] font-semibold leading-tight sm:text-xs">
              Comportamento Humano
            </span>
          </div>
        </motion.div>

        {/* right circle: Dados & Performance */}
        <motion.div
          className="absolute right-0 top-0 aspect-square w-[60%] rounded-full bg-[#E7664C]/90"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute right-[33%] top-1/2 flex w-[26%] -translate-y-1/2 translate-x-1/2 flex-col items-center text-center text-white">
            <BarChart3 className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" />
            <span className="mt-2 text-[0.65rem] font-semibold leading-tight sm:text-xs">
              Dados &amp; Performance
            </span>
          </div>
        </motion.div>

        {/* intersection badge */}
        <motion.div
          className="absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md sm:h-16 sm:w-16"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <span className="relative h-7 w-7 sm:h-8 sm:w-8">
            <Image src="/logo/logo-aya-3.png" alt="" fill className="object-contain" />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
