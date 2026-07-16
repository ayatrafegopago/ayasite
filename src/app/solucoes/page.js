import SolucoesWatermark from "@/components/sections/solucoes/SolucoesWatermark";
import SolucoesIntro from "@/components/sections/solucoes/SolucoesIntro";
import SolucoesPacote from "@/components/sections/solucoes/SolucoesPacote";
import SolucoesMetodoHumano from "@/components/sections/solucoes/SolucoesMetodoHumano";
import SolucoesAdicional from "@/components/sections/solucoes/SolucoesAdicional";
import SolucoesInvestimento from "@/components/sections/solucoes/SolucoesInvestimento";
import SolucoesCtaFinal from "@/components/sections/solucoes/SolucoesCtaFinal";

export const metadata = {
  title: "Soluções | Aya Tráfego Pago",
};

export default function SolucoesPage() {
  return (
    <div className="relative isolate overflow-hidden bg-[#123B46]">
      <SolucoesWatermark />
      <SolucoesIntro />
      <SolucoesPacote />
      <SolucoesMetodoHumano />
      <SolucoesAdicional />
      <SolucoesInvestimento />
      <SolucoesCtaFinal />
    </div>
  );
}
