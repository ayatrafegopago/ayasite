import AnimatedSection, {
  AnimatedTitle,
  AnimatedSubtitle,
} from "@/components/ui/AnimatedSection";
import FormularioDiagnostico from "@/components/sections/diagnostico/FormularioDiagnostico";
import DiagnosticoImagem from "@/components/sections/diagnostico/DiagnosticoImagem";

export const metadata = {
  title: "Diagnóstico | Aya Tráfego Pago",
};

export default function DiagnosticoPage() {
  return (
    <AnimatedSection className="bg-[#123B46] px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <AnimatedTitle as="h1" className="text-3xl font-bold text-[#FFFDFC] sm:text-4xl">
          Vamos entender o momento do seu negócio.
        </AnimatedTitle>
        <AnimatedSubtitle className="mx-auto mt-4 max-w-xl text-[#E3D3B4]">
          Preencha as informações abaixo — a Aya analisa e retorna com os
          próximos passos.
        </AnimatedSubtitle>
      </div>

      <div className="mx-auto mt-12 max-w-xl">
        <FormularioDiagnostico />
      </div>

      <DiagnosticoImagem />
    </AnimatedSection>
  );
}
