import AnimatedSection, {
  AnimatedTitle,
  AnimatedSubtitle,
} from "@/components/ui/AnimatedSection";

export default function ResultadosIntro() {
  return (
    <AnimatedSection className="px-6 pb-8 pt-12 sm:pt-16">
      <div className="mx-auto max-w-3xl text-center">
        <AnimatedTitle as="h1" className="text-3xl font-bold text-[#123B46] sm:text-4xl">
          Performance e otimização
        </AnimatedTitle>
        <AnimatedSubtitle className="mx-auto mt-4 max-w-2xl text-[#202629]/70">
          Cada campanha evolui a partir do que os dados mostram.
        </AnimatedSubtitle>
        <p className="mx-auto mt-6 max-w-2xl text-[#202629]/80">
          Na Aya, o acompanhamento não termina quando o anúncio entra no ar.
          Analisamos atenção, custo, conversão e qualidade dos contatos para
          entender o que merece continuidade, o que precisa de ajuste e
          quais testes devem ser feitos em seguida.
        </p>
      </div>
    </AnimatedSection>
  );
}
