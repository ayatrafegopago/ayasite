import AnimatedSection, {
  AnimatedTitle,
  AnimatedSubtitle,
} from "@/components/ui/AnimatedSection";

export default function SolucoesIntro() {
  return (
    <AnimatedSection className="px-6 pb-8 pt-12 sm:pt-16">
      <div className="mx-auto max-w-3xl text-center">
        <AnimatedTitle as="h1" className="text-3xl font-bold text-[#E7664C] sm:text-4xl">
          Uma base sólida para começar. Gestão contínua para evoluir.
        </AnimatedTitle>
        <AnimatedSubtitle className="mx-auto mt-4 max-w-2xl text-[#E3D3B4]">
          A Aya estrutura os pontos que sustentam sua presença digital e
          acompanha o desempenho ao longo do tempo. Assim, marca, conteúdo,
          páginas e campanhas avançam com mais clareza, continuidade e
          critério.
        </AnimatedSubtitle>
      </div>
    </AnimatedSection>
  );
}
