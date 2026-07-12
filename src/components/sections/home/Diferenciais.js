"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { Users, Compass, TrendingUp, Store } from "lucide-react";
import Image from "next/image";
import AnimatedSection, {
  AnimatedTitle,
  AnimatedSubtitle,
} from "@/components/ui/AnimatedSection";

const diferenciais = [
  {
    icon: Users,
    title: "Contato direto",
    description: "Você fala com quem planeja e executa.",
    // top, right, bottom, left around the hub
    style: { top: "6%", left: "50%" },
  },
  {
    icon: Compass,
    title: "Estratégia com contexto",
    description: "Cada ação parte da realidade do negócio.",
    style: { top: "50%", left: "94%" },
  },
  {
    icon: TrendingUp,
    title: "Evolução orientada por dados",
    description: "Resultados transformados em próximos passos.",
    style: { top: "94%", left: "50%" },
  },
  {
    icon: Store,
    title: "Foco no seu modelo de negócio",
    description:
      "Soluções pensadas para negócios locais e prestadores de serviço.",
    style: { top: "50%", left: "6%" },
  },
];

// Diagram is a fixed-size square (in px) so the icon-to-container radius
// ratio can be computed precisely — this is what lets each spoke line
// stop exactly on a circle's edge instead of over/undershooting it.
const DIAGRAM_PX = 400;
const HUB_DIAMETER_PX = 64; // h-16
const SAT_DIAMETER_PX = 44; // h-11
const HUB_R_PCT = (HUB_DIAMETER_PX / 2 / DIAGRAM_PX) * 100;
const SAT_R_PCT = (SAT_DIAMETER_PX / 2 / DIAGRAM_PX) * 100;

// Builds a spoke path (in 0-100 viewBox units) between the hub and one
// differentiator, inset by each circle's own radius on both ends so the
// drawn line touches the edge of each circle exactly — never reaching
// past it into the label/description text below.
function spokePath(satTop, satLeft) {
  if (satLeft === 50) {
    const dir = satTop < 50 ? -1 : 1;
    const hubEdge = 50 + dir * HUB_R_PCT;
    const satEdge = satTop - dir * SAT_R_PCT;
    return `M 50 ${hubEdge} L 50 ${satEdge}`;
  }
  const dir = satLeft < 50 ? -1 : 1;
  const hubEdge = 50 + dir * HUB_R_PCT;
  const satEdge = satLeft - dir * SAT_R_PCT;
  return `M ${hubEdge} 50 L ${satEdge} 50`;
}

const SPOKE_PATHS = diferenciais.map((d) =>
  spokePath(parseFloat(d.style.top), parseFloat(d.style.left))
);

// Text sits below each icon; centered items (top/bottom) place text on
// the same vertical line as the spoke, so the gap here must clear the
// spoke's endpoint (icon edge) with room to spare before the label starts.
const TEXT_OFFSET_REM = 2.25;

const LINE_DURATION = 1.4;
const FLOW_DURATION = 3;
const RING_DURATION = 75;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const WAVE_D =
  "M -50 20 C 0 0, 50 0, 100 20 C 150 40, 200 40, 250 20 C 300 0, 350 0, 400 20 C 450 40, 500 40, 550 20";

const WAVES = [
  { top: "18%", duration: 24, opacity: 0.08, delay: 0 },
  { top: "48%", duration: 30, opacity: 0.06, delay: 1.5 },
  { top: "80%", duration: 27, opacity: 0.08, delay: 0.7 },
];

function BackgroundWaves() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden lg:block"
    >
      {WAVES.map((wave, i) => (
        <motion.svg
          key={i}
          className="absolute left-[-15%] h-16 w-[130%]"
          style={{ top: wave.top }}
          viewBox="0 0 400 40"
          preserveAspectRatio="none"
          fill="none"
          animate={{ x: [0, -60, 0] }}
          transition={{
            duration: wave.duration,
            delay: wave.delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <path
            d={WAVE_D}
            stroke="#E3D3B4"
            strokeOpacity={wave.opacity}
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </motion.svg>
      ))}
    </div>
  );
}

function Spoke({ d, delay }) {
  return (
    <>
      {/* entrance: spoke draws in from the hub outward */}
      <motion.path
        d={d}
        stroke="#E3D3B4"
        strokeOpacity="0.6"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: LINE_DURATION, delay, ease: "easeInOut" }}
      />
      {/* continuous flow, starts once this spoke finishes drawing */}
      <motion.path
        d={d}
        stroke="#E7664C"
        strokeOpacity="0.9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 5"
        vectorEffect="non-scaling-stroke"
        initial={{ opacity: 0, strokeDashoffset: 0 }}
        whileInView={{ opacity: 1, strokeDashoffset: -8 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          opacity: { duration: 0.4, delay: delay + LINE_DURATION },
          strokeDashoffset: {
            duration: FLOW_DURATION,
            repeat: Infinity,
            ease: "linear",
            delay: delay + LINE_DURATION,
          },
        }}
      />
    </>
  );
}

function NodeCircle({ children, delay, size = "h-11 w-11" }) {
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
      className={`relative z-10 mx-auto flex ${size} shrink-0 items-center justify-center rounded-full bg-[#E7664C] shadow-md`}
    >
      {children}
    </motion.span>
  );
}

function RadialLayout() {
  return (
    <div
      className="relative mx-auto hidden aspect-square w-full max-w-[400px] lg:block"
    >
      <BackgroundWaves />

      {/* slow rotating dotted orbit ring — purely decorative, behind everything */}
      <motion.svg
        aria-hidden
        className="pointer-events-none absolute inset-0"
        viewBox="0 0 100 100"
        style={{ originX: 0.5, originY: 0.5 }}
        animate={{ rotate: 360 }}
        transition={{ duration: RING_DURATION, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="#123B46"
          strokeOpacity="0.25"
          strokeWidth="0.6"
          strokeDasharray="1.5 4"
          vectorEffect="non-scaling-stroke"
        />
      </motion.svg>

      {/* spokes connecting the hub to each differentiator */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0"
        viewBox="0 0 100 100"
      >
        {SPOKE_PATHS.map((d, i) => (
          <Spoke key={d} d={d} delay={i * 0.15} />
        ))}
      </svg>

      {/* central hub */}
      <div
        className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
        style={{ top: "50%", left: "50%" }}
      >
        <NodeCircle delay={0} size="h-16 w-16">
          <span className="relative h-8 w-8">
            <Image
              src="/logo/logo-aya-5.png"
              alt=""
              fill
              className="object-contain"
            />
          </span>
        </NodeCircle>
      </div>

      {/* the 4 differentiators, fixed in place around the hub.
          The icon is anchored exactly on the target point (so the
          spoke line touches its edge precisely); the text block is
          positioned independently below it, so a tall description
          never pushes the icon off its mark, and never sits inside
          the spoke's path. */}
      {diferenciais.map((diferencial, i) => {
        const Icon = diferencial.icon;
        return (
          <div key={diferencial.title}>
            <div
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={diferencial.style}
            >
              <NodeCircle delay={i * 0.15 + LINE_DURATION}>
                <Icon className="h-5 w-5 text-white" />
              </NodeCircle>
            </div>
            <div
              className="absolute z-10 w-40 -translate-x-1/2 text-center"
              style={{
                left: diferencial.style.left,
                top: `calc(${diferencial.style.top} + ${TEXT_OFFSET_REM}rem)`,
              }}
            >
              <h3 className="text-sm font-bold text-[#123B46]">
                {diferencial.title}
              </h3>
              <p className="mt-1 text-xs text-[#202629]/70">
                {diferencial.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function StackedLayout() {
  return (
    <motion.div
      className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:hidden"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {diferenciais.map((diferencial) => {
        const Icon = diferencial.icon;
        return (
          <motion.div key={diferencial.title} variants={item} className="text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E7664C]">
              <Icon className="h-7 w-7 text-white" />
            </span>
            <h3 className="mt-4 font-bold text-[#123B46]">{diferencial.title}</h3>
            <p className="mt-2 text-sm text-[#202629]/70">
              {diferencial.description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default function Diferenciais() {
  return (
    <AnimatedSection className="bg-[#FFFDFC] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <AnimatedTitle className="text-3xl font-bold text-[#123B46] sm:text-4xl">
              Clareza no processo, proximidade na execução.
            </AnimatedTitle>
            <AnimatedSubtitle className="mt-4 text-[#202629]/70 lg:mt-6">
              A Aya acompanha cada etapa de perto, combinando entendimento do
              negócio, execução estratégica e decisões baseadas em dados.
            </AnimatedSubtitle>
          </div>

          <RadialLayout />
        </div>

        <div className="mt-10">
          <StackedLayout />
        </div>
      </div>
    </AnimatedSection>
  );
}
