import AnimatedSection, { AnimatedTitle } from "@/components/ui/AnimatedSection";
import CaseCard from "@/components/sections/resultados/CaseCard";
import { projetos } from "@/data/projetos";

export const metadata = {
  title: "Resultados | Aya Tráfego Pago",
};

export default function ResultadosPage() {
  return (
    <AnimatedSection className="mx-auto max-w-6xl px-6 py-16">
      <AnimatedTitle as="h1" className="text-3xl font-bold text-[#123B46]">
        Resultados
      </AnimatedTitle>
      {projetos.length === 0 ? (
        <p className="mt-4 text-[#202629]/70">Cases em construção.</p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projetos.map((projeto) => (
            <CaseCard key={projeto.slug} projeto={projeto} />
          ))}
        </div>
      )}
    </AnimatedSection>
  );
}
