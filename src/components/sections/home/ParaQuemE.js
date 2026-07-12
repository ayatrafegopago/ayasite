"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, Check } from "lucide-react";
import AnimatedSection, {
  AnimatedTitle,
  AnimatedSubtitle,
} from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const segmentos = [
  {
    icon: MapPin,
    miniHeadline:
      "Mais presença na região. Mais constância na geração de oportunidades.",
    description:
      "Clínicas, salões, restaurantes, lojas e outros negócios que precisam atrair pessoas próximas, aumentar o movimento e gerar mais agendamentos, visitas ou pedidos de orçamento.",
    necessidades: [
      "Atrair clientes da própria região",
      "Reduzir a dependência do boca a boca",
      "Divulgar serviços, ofertas e diferenciais",
      "Entender quais ações geram retorno",
    ],
    exemplos:
      "Clínicas, consultórios, academias, salões, restaurantes, pet shops, escolas e comércios locais.",
  },
  {
    icon: Briefcase,
    miniHeadline:
      "Mais clareza para comunicar valor. Mais confiança antes do contato.",
    description:
      "Consultores, profissionais liberais e especialistas que vendem conhecimento, experiência e confiança, mas precisam demonstrar seu valor antes da conversa comercial.",
    necessidades: [
      "Fortalecer o posicionamento",
      "Atrair contatos mais qualificados",
      "Comunicar melhor seus diferenciais",
      "Reduzir objeções antes do orçamento",
    ],
    exemplos:
      "Advogados, arquitetos, contadores, corretores, consultores, terapeutas, nutricionistas e especialistas.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ParaQuemE() {
  return (
    <AnimatedSection className="bg-[#FFFDFC] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedTitle className="text-3xl font-bold text-[#123B46] sm:text-4xl">
            Para quem é
          </AnimatedTitle>
          <AnimatedSubtitle className="mt-4 text-[#202629]/70">
            Para negócios que querem crescer além da indicação.
          </AnimatedSubtitle>
          <motion.p
            className="mt-6 text-[#202629]/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A Aya atende negócios locais e prestadores de serviço que entregam
            um bom trabalho, mas ainda atraem clientes de forma irregular. A
            estratégia considera como cada negócio é encontrado, avaliado e
            escolhido pelo público.
          </motion.p>
        </div>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          {segmentos.map((segmento) => {
            const Icon = segmento.icon;
            return (
              <motion.div key={segmento.miniHeadline} variants={item}>
                <Card className="flex h-full flex-col p-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E7664C]">
                    <Icon className="h-7 w-7 text-white" />
                  </span>

                  <h3 className="mt-5 text-lg font-bold text-[#123B46]">
                    {segmento.miniHeadline}
                  </h3>

                  <p className="mt-3 text-[#202629]/70">
                    {segmento.description}
                  </p>

                  <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-[#123B46]/80">
                    Para quem precisa
                  </p>
                  <ul className="mt-3 space-y-2">
                    {segmento.necessidades.map((necessidade) => (
                      <li key={necessidade} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#E7664C]" />
                        <span className="text-[#202629]/80">
                          {necessidade}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 border-t border-black/10 pt-4 text-sm text-[#202629]/50">
                    {segmento.exemplos}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mx-auto mt-12 max-w-3xl rounded-2xl bg-[#E3D3B4]/40 px-8 py-10 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-lg font-medium text-[#123B46]">
            Negócios locais precisam ser encontrados na região. Prestadores de
            serviço precisam construir confiança antes da contratação. A
            estratégia acompanha essa diferença.
          </p>
          <Button href="/diagnostico" variant="outline" className="mt-6">
            Quero meu diagnóstico gratuito
          </Button>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
