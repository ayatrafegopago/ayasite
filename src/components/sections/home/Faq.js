import AnimatedSection, { AnimatedTitle } from "@/components/ui/AnimatedSection";
import { faq } from "@/data/faq";

export default function Faq() {
  return (
    <AnimatedSection className="mx-auto max-w-6xl px-6 py-16">
      <AnimatedTitle className="text-2xl font-bold text-[#123B46]">
        Perguntas Frequentes
      </AnimatedTitle>
      {faq.length === 0 ? (
        <p className="mt-4 text-[#202629]/70">Perguntas em construção.</p>
      ) : (
        <ul className="mt-8 space-y-4">
          {faq.map((item) => (
            <li key={item.pergunta}>
              <p className="font-semibold text-[#123B46]">{item.pergunta}</p>
              <p className="text-[#202629]/80">{item.resposta}</p>
            </li>
          ))}
        </ul>
      )}
    </AnimatedSection>
  );
}
