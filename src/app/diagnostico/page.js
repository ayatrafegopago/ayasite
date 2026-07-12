import AnimatedSection, {
  AnimatedTitle,
  AnimatedSubtitle,
} from "@/components/ui/AnimatedSection";
import FormularioDiagnostico from "@/components/sections/diagnostico/FormularioDiagnostico";

export const metadata = {
  title: "Diagnóstico | Aya Tráfego Pago",
};

export default function DiagnosticoPage() {
  return (
    <AnimatedSection className="mx-auto max-w-2xl px-6 py-16">
      <AnimatedTitle as="h1" className="text-3xl font-bold text-[#123B46]">
        Diagnóstico
      </AnimatedTitle>
      <AnimatedSubtitle className="mt-4 text-[#202629]/70">
        Preencha o formulário abaixo ou fale direto pelo WhatsApp.
      </AnimatedSubtitle>
      <FormularioDiagnostico />
    </AnimatedSection>
  );
}
