import AnimatedSection, { AnimatedTitle } from "@/components/ui/AnimatedSection";

export default function SolucoesInvestimento() {
  return (
    <AnimatedSection className="px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <AnimatedTitle className="text-2xl font-bold text-[#E7664C] sm:text-3xl">
          Investimento
        </AnimatedTitle>
        <p className="mt-4 text-[#E3D3B4]/90">
          O projeto combina uma etapa inicial de implementação e uma
          mensalidade de gestão contínua. Os valores e a recomendação de
          verba para anúncios são apresentados após o diagnóstico,
          considerando o segmento, os objetivos, a região de atuação e o
          nível de concorrência. A verba de mídia é paga diretamente às
          plataformas e não está incluída no valor da gestão.
        </p>
      </div>
    </AnimatedSection>
  );
}
