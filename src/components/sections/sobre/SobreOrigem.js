import AnimatedSection, { AnimatedTitle } from "@/components/ui/AnimatedSection";

const blocos = [
  {
    title: "Por que a Aya nasceu",
    paragraph:
      "A Aya nasceu de uma necessidade real de construir uma rotina profissional com mais flexibilidade, mas também de uma paixão pela comunicação e pelo impacto que ela pode gerar. Uma comunicação bem direcionada ajuda alguém a reconhecer um problema, compreender uma solução, perceber valor e tomar uma decisão com mais segurança. Foi a partir dessa visão que comecei a construir uma forma de trabalhar que combina análise, comportamento, comunicação e execução. Cada projeto parte da compreensão do negócio e das pessoas que ele precisa alcançar. A estratégia só ganha sentido quando considera os dois lados dessa relação.",
  },
  {
    title: "O significado de Aya",
    paragraph:
      "O nome Aya foi inspirado em um símbolo da tradição Adinkra, criada pelo povo Akan, de Gana. Representado por uma samambaia, Aya simboliza resistência, perseverança, independência e capacidade de adaptação. A escolha desse nome traduz a forma como enxergo o desenvolvimento de uma marca e de um negócio. Crescer exige direção, mas também exige disposição para observar, aprender, ajustar e continuar avançando. Essa ideia está presente na forma como a Aya pensa e conduz cada projeto.",
  },
];

export default function SobreOrigem() {
  return (
    <AnimatedSection className="bg-[#FFFDFC] px-6 py-16">
      <div className="mx-auto max-w-3xl space-y-14">
        {blocos.map((bloco) => (
          <div key={bloco.title}>
            <AnimatedTitle className="text-xl font-bold text-[#123B46] sm:text-2xl">
              {bloco.title}
            </AnimatedTitle>
            <p className="mt-4 text-[#202629]/80">{bloco.paragraph}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
