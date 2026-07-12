import AnimatedSection, { AnimatedTitle } from "@/components/ui/AnimatedSection";
import ServicoDetalhado from "@/components/sections/solucoes/ServicoDetalhado";
import { servicos } from "@/data/servicos";

export const metadata = {
  title: "Soluções | Aya Tráfego Pago",
};

export default function SolucoesPage() {
  return (
    <AnimatedSection className="mx-auto max-w-6xl px-6 py-16">
      <AnimatedTitle as="h1" className="text-3xl font-bold text-[#123B46]">
        Soluções
      </AnimatedTitle>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {servicos.map((servico) => (
          <ServicoDetalhado key={servico.slug} servico={servico} />
        ))}
      </div>
    </AnimatedSection>
  );
}
