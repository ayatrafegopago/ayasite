import ResultadosWatermark from "@/components/sections/resultados/ResultadosWatermark";
import ResultadosIntro from "@/components/sections/resultados/ResultadosIntro";
import ResultadosMetricas from "@/components/sections/resultados/ResultadosMetricas";
import ResultadosImagens from "@/components/sections/resultados/ResultadosImagens";
import ResultadosProcesso from "@/components/sections/resultados/ResultadosProcesso";
import ResultadosRelatorio from "@/components/sections/resultados/ResultadosRelatorio";
import ResultadosCtaFinal from "@/components/sections/resultados/ResultadosCtaFinal";

export const metadata = {
  title: "Resultados | Aya Tráfego Pago",
};

export default function ResultadosPage() {
  return (
    <div className="relative isolate overflow-hidden bg-[#E3D3B4]">
      <ResultadosWatermark />
      <ResultadosIntro />
      <ResultadosMetricas />
      <ResultadosImagens />
      <ResultadosProcesso />
      <ResultadosRelatorio />
      <ResultadosCtaFinal />
    </div>
  );
}
