import AnimatedSection, { AnimatedTitle } from "@/components/ui/AnimatedSection";
import CaseCard from "@/components/sections/resultados/CaseCard";
import { projetos } from "@/data/projetos";

export default function ResultadosPreview() {
  return (
    <AnimatedSection className="mx-auto max-w-6xl px-6 py-16">
      <AnimatedTitle className="text-2xl font-bold text-[#123B46]">
        Resultados
      </AnimatedTitle>
      {projetos.length === 0 ? (
        <p className="mt-4 text-[#202629]/70">Cases em construção.</p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projetos.map((projeto) => (
            <CaseCard key={projeto.slug} projeto={projeto} />
          ))}
        </div>
      )}
    </AnimatedSection>
  );
}
