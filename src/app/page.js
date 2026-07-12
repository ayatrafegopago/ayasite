import Hero from "@/components/sections/home/Hero";
import MarqueeValores from "@/components/sections/home/MarqueeValores";
import FaixaPosicionamento from "@/components/sections/home/FaixaPosicionamento";
import ProblemaCliente from "@/components/sections/home/ProblemaCliente";
import ApresentacaoSolucao from "@/components/sections/home/ApresentacaoSolucao";
import ComoFunciona from "@/components/sections/home/ComoFunciona";
import ServicosResumo from "@/components/sections/home/ServicosResumo";
import Diferenciais from "@/components/sections/home/Diferenciais";
import ResultadosPreview from "@/components/sections/home/ResultadosPreview";
import ParaQuemE from "@/components/sections/home/ParaQuemE";
import SobrePreview from "@/components/sections/home/SobrePreview";
import CtaDiagnostico from "@/components/sections/home/CtaDiagnostico";
import Faq from "@/components/sections/home/Faq";
import ChamadaFinal from "@/components/sections/home/ChamadaFinal";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeValores />
      <FaixaPosicionamento />
      <ProblemaCliente />
      <ApresentacaoSolucao />
      <ComoFunciona />
      <ServicosResumo />
      <Diferenciais />
      <ParaQuemE />
      <SobrePreview />
      <ResultadosPreview />
      <CtaDiagnostico />
      <Faq />
      <ChamadaFinal />
    </>
  );
}
