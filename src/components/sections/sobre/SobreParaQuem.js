import AnimatedSection, { AnimatedTitle } from "@/components/ui/AnimatedSection";

export default function SobreParaQuem() {
  return (
    <AnimatedSection className="bg-[#FFFDFC] px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <AnimatedTitle className="text-xl font-bold text-[#123B46] sm:text-2xl">
          Para quem a Aya trabalha
        </AnimatedTitle>
        <p className="mt-4 text-[#202629]/80">
          A Aya atende negócios locais e prestadores de serviço que já
          entregam valor, mas ainda precisam organizar a forma como se
          posicionam, comunicam e atraem novas oportunidades. São empresas e
          profissionais que muitas vezes dependem de indicação, publicam sem
          uma direção clara ou investem em ações que não fazem parte de uma
          estratégia contínua. Meu papel é acompanhar esse processo de perto,
          reduzindo a distância entre planejamento e execução. Isso significa
          compreender o contexto, organizar as prioridades, construir a
          estrutura necessária, colocar a estratégia em prática e analisar os
          próximos passos com clareza.
        </p>
      </div>
    </AnimatedSection>
  );
}
