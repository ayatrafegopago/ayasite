"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { ClipboardList, Layers, Rocket, RefreshCw, LineChart } from "lucide-react";
import AnimatedSection, {
  AnimatedTitle,
  AnimatedSubtitle,
} from "@/components/ui/AnimatedSection";

const etapas = [
  {
    icon: ClipboardList,
    title: "Diagnóstico estratégico",
    description:
      "Entendemos seu negócio, seu público, seus objetivos e os pontos que hoje limitam a geração de oportunidades.",
  },
  {
    icon: Layers,
    title: "Estruturação",
    description:
      "Definimos persona, posicionamento, identidade visual, calendário editorial e as páginas necessárias para sustentar a estratégia.",
  },
  {
    icon: Rocket,
    title: "Implementação",
    description:
      "Configuramos públicos, mensuração, criativos e campanhas para iniciar a divulgação com uma base consistente.",
  },
  {
    icon: RefreshCw,
    title: "Gestão contínua",
    description:
      "Acompanhamos as campanhas, desenvolvemos novos criativos e atualizamos copy e conteúdo conforme a resposta do público.",
  },
  {
    icon: LineChart,
    title: "Análise e evolução",
    description:
      "Organizamos os dados, identificamos gargalos e definimos os próximos ajustes para melhorar o desempenho mês a mês.",
  },
];

const LINE_DURATION = 1.8;
const FLOW_DURATION = 3.5;
const POSITIONS = [0.1, 0.3, 0.5, 0.7, 0.9];

function delayForIndex(index) {
  const first = POSITIONS[0];
  const last = POSITIONS[POSITIONS.length - 1];
  const fraction = (POSITIONS[index] - first) / (last - first);
  return fraction * LINE_DURATION;
}

const DESKTOP_PATH =
  "M 10 12 C 16 0, 24 0, 30 12 C 36 24, 44 24, 50 12 C 56 0, 64 0, 70 12 C 76 24, 84 24, 90 12";
const MOBILE_PATH =
  "M 24 10 C 44 16, 44 24, 24 30 C 4 36, 4 44, 24 50 C 44 56, 44 64, 24 70 C 4 76, 4 84, 24 90";

function ConnectorLine({ d, amount = 0.4 }) {
  return (
    <>
      {/* entrance: line draws in once per viewport entry */}
      <motion.path
        d={d}
        stroke="#E3D3B4"
        strokeOpacity="0.6"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: false, amount }}
        transition={{ duration: LINE_DURATION, ease: "easeInOut" }}
      />
      {/* continuous energy flow, starts once the entrance finishes */}
      <motion.path
        d={d}
        stroke="#E3D3B4"
        strokeOpacity="0.95"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="6 10"
        vectorEffect="non-scaling-stroke"
        initial={{ opacity: 0, strokeDashoffset: 0 }}
        whileInView={{ opacity: 1, strokeDashoffset: -16 }}
        viewport={{ once: false, amount }}
        transition={{
          opacity: { duration: 0.4, delay: LINE_DURATION },
          strokeDashoffset: {
            duration: FLOW_DURATION,
            repeat: Infinity,
            ease: "linear",
            delay: LINE_DURATION,
          },
        }}
      />
    </>
  );
}

function EtapaCircle({ Icon, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.4 });
  const controls = useAnimationControls();

  useEffect(() => {
    let cancelled = false;

    if (!inView) {
      controls.start({ scale: 0, opacity: 0, transition: { duration: 0.2 } });
      return;
    }

    async function playSequence() {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { delay, type: "spring", stiffness: 300, damping: 14 },
      });
      if (cancelled) return;
      controls.start({
        scale: [1, 1.05, 1],
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
      });
    }

    playSequence();
    return () => {
      cancelled = true;
    };
  }, [inView, controls, delay]);

  return (
    <motion.span
      ref={ref}
      initial={{ scale: 0, opacity: 0 }}
      animate={controls}
      className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFFDFC] text-[#123B46] shadow-md"
    >
      <Icon className="h-6 w-6" />
    </motion.span>
  );
}

export default function ComoFunciona() {
  return (
    <AnimatedSection className="bg-[linear-gradient(to_bottom,#8A3D2A_0%,#123B46_100%)] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedTitle className="text-3xl font-bold text-[#FFFDFC] sm:text-4xl">
            Do diagnóstico à otimização, em 5 etapas.
          </AnimatedTitle>
          <AnimatedSubtitle className="mt-4 text-[#E3D3B4]">
            Um processo organizado para entender seu momento, estruturar sua
            presença digital, colocar as campanhas em prática e melhorar o
            desempenho com base em dados.
          </AnimatedSubtitle>
        </div>

        <div className="relative mt-20">
          <svg
            className="pointer-events-none absolute left-0 top-6 hidden w-full sm:block"
            height="24"
            viewBox="0 0 100 24"
            preserveAspectRatio="none"
            fill="none"
          >
            <ConnectorLine d={DESKTOP_PATH} amount={0.4} />
          </svg>

          <svg
            className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:hidden"
            viewBox="0 0 48 100"
            preserveAspectRatio="none"
            fill="none"
          >
            <ConnectorLine d={MOBILE_PATH} amount={0.2} />
          </svg>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-5 sm:gap-4">
            {etapas.map((etapa, i) => {
              const circleDelay = delayForIndex(i);
              const textDelay = circleDelay + 0.25;

              return (
                <div
                  key={etapa.title}
                  className="relative flex items-start gap-4 sm:flex-col sm:items-center sm:gap-0 sm:text-center"
                >
                  {i < etapas.length - 1 && (
                    <span className="absolute left-6 top-12 h-10 w-px border-l-2 border-dashed border-[#E3D3B4]/60 sm:hidden" />
                  )}
                  <EtapaCircle Icon={etapa.icon} delay={circleDelay} />

                  <motion.div
                    className="sm:mt-4"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: textDelay, ease: "easeOut" }}
                  >
                    <h3 className="text-lg font-semibold text-[#FFFDFC]">
                      {etapa.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#E3D3B4]/90">
                      {etapa.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
