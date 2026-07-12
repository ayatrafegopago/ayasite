import AnimatedSection, { AnimatedTitle } from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function ChamadaFinal() {
  return (
    <AnimatedSection className="mx-auto max-w-6xl px-6 py-24 text-center">
      <AnimatedTitle className="text-2xl font-bold text-[#123B46]">
        Chamada Final
      </AnimatedTitle>
      <p className="mt-4 text-[#202629]/70">Conteúdo em construção.</p>
      <div className="mt-6 flex justify-center">
        <Button href="/diagnostico" variant="secondary">
          Solicitar Diagnóstico
        </Button>
      </div>
    </AnimatedSection>
  );
}
