import SobreIntro from "@/components/sections/sobre/SobreIntro";
import SobreVenn from "@/components/sections/sobre/SobreVenn";
import SobreTrajetoria from "@/components/sections/sobre/SobreTrajetoria";
import SobreOrigem from "@/components/sections/sobre/SobreOrigem";
import SobreVisaoGrid from "@/components/sections/sobre/SobreVisaoGrid";
import SobreParaQuem from "@/components/sections/sobre/SobreParaQuem";
import SobreCtaFinal from "@/components/sections/sobre/SobreCtaFinal";

export const metadata = {
  title: "Sobre | Aya Tráfego Pago",
};

export default function SobrePage() {
  return (
    <>
      <SobreIntro />
      <SobreVenn />
      <SobreTrajetoria />
      <SobreOrigem />
      <SobreVisaoGrid />
      <SobreParaQuem />
      <SobreCtaFinal />
    </>
  );
}
