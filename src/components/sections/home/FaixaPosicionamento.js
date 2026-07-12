"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { Target, PenTool, MonitorSmartphone, Megaphone } from "lucide-react";
import AnimatedSection, {
  AnimatedTitle,
  AnimatedSubtitle,
} from "@/components/ui/AnimatedSection";

const pilares = [
  {
    icon: Target,
    title: "Estratégia",
    description:
      "Definição de público, objetivos e prioridades para orientar cada ação.",
  },
  {
    icon: PenTool,
    title: "Marca e Conteúdo",
    description:
      "Identidade visual, calendário editorial, copy e roteiros alinhados ao posicionamento da marca.",
  },
  {
    icon: MonitorSmartphone,
    title: "Sites e Páginas",
    description:
      "Landing pages, páginas de vendas e sites criados para apresentar sua oferta e facilitar o próximo passo.",
  },
  {
    icon: Megaphone,
    title: "Anúncios",
    description:
      "Campanhas direcionadas ao público certo, com acompanhamento e otimização contínua.",
  },
];

const LINE_DURATION = 1.8;
const FLOW_DURATION = 3.5;
const POSITIONS = [0.125, 0.375, 0.625, 0.875];

function delayForIndex(index) {
  const first = POSITIONS[0];
  const last = POSITIONS[POSITIONS.length - 1];
  const fraction = (POSITIONS[index] - first) / (last - first);
  return fraction * LINE_DURATION;
}

const DESKTOP_PATH =
  "M 12.5 12 C 20 0, 30 0, 37.5 12 C 45 24, 55 24, 62.5 12 C 70 0, 80 0, 87.5 12";
const MOBILE_PATH =
  "M 24 12.5 C 44 20, 44 30, 24 37.5 C 4 45, 4 55, 24 62.5 C 44 70, 44 80, 24 87.5";

function ConnectorLine({ d, className, viewBoxHeight = 24, amount = 0.4 }) {
  return (
    <>
      {/* entrance: line draws in once */}
      <motion.path
        d={d}
        stroke="#E7664C"
        strokeOpacity="0.5"
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
        stroke="#E7664C"
        strokeOpacity="0.8"
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

function PillarCircle({ Icon, delay }) {
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
      className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E7664C] text-white shadow-md"
    >
      <Icon className="h-6 w-6" />
    </motion.span>
  );
}

export default function FaixaPosicionamento() {
  return (
    <AnimatedSection className="bg-[#FFFDFC] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedTitle className="text-3xl font-bold text-[#123B46] sm:text-4xl">
            Todas as frentes do seu marketing, conectadas.
          </AnimatedTitle>
          <AnimatedSubtitle className="mt-4 text-[#202629]/70">
            Uma estrutura integrada para fortalecer sua presença digital e
            gerar novas oportunidades para o seu negócio.
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

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-4 sm:gap-6">
            {pilares.map((pilar, i) => {
              const circleDelay = delayForIndex(i);
              const textDelay = circleDelay + 0.25;

              return (
                <div
                  key={pilar.title}
                  className="relative flex items-start gap-4 sm:flex-col sm:items-center sm:gap-0 sm:text-center"
                >
                  <PillarCircle Icon={pilar.icon} delay={circleDelay} />

                  <motion.div
                    className="sm:mt-4"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: textDelay, ease: "easeOut" }}
                  >
                    <h3 className="text-lg font-semibold text-[#123B46]">
                      {pilar.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#202629]/70">
                      {pilar.description}
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
