import AnimatedSection, { AnimatedTitle } from "@/components/ui/AnimatedSection";

export const metadata = {
  title: "Sobre | Aya Tráfego Pago",
};

export default function SobrePage() {
  return (
    <AnimatedSection className="mx-auto max-w-4xl px-6 py-16">
      <AnimatedTitle as="h1" className="text-3xl font-bold text-[#123B46]">
        Sobre
      </AnimatedTitle>
      <p className="mt-4 text-[#202629]/70">Conteúdo em construção.</p>
    </AnimatedSection>
  );
}
