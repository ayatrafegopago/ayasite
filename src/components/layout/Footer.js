import Image from "next/image";
import Link from "next/link";

const menuLinks = [
  { href: "/", label: "Início" },
  { href: "/solucoes", label: "Soluções" },
  { href: "/resultados", label: "Resultados" },
  { href: "/sobre", label: "Sobre" },
  { href: "/diagnostico", label: "Contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-[#16181A] text-[#E3D3B4]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 divide-y divide-[#E7664C]/30 px-6 py-10 sm:grid-cols-[2fr_1fr_1fr] sm:gap-12 sm:divide-x sm:divide-y-0">
        <div className="min-w-0 max-w-md sm:pr-10">
          <div className="relative h-24 w-full max-w-[16rem] sm:h-32">
            <Image
              src="/logo/logo-aya-4.png"
              alt="Aya Tráfego Pago"
              fill
              className="object-contain object-left"
              sizes="16rem"
            />
          </div>
          <p className="mt-4 text-sm text-[#E3D3B4]/80">
            Gestão de tráfego pago e presença digital para negócios locais e
            prestadores de serviço em todo o Brasil, com atendimento remoto.
          </p>
        </div>

        <div className="min-w-0 pt-8 sm:px-10 sm:pt-0">
          <p className="text-sm font-semibold text-[#FFFDFC]">Menu</p>
          <ul className="mt-3 space-y-2 text-sm">
            {menuLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[#FFFDFC]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0 max-w-xs pt-8 sm:pl-10 sm:pt-0">
          <p className="text-sm font-semibold text-[#FFFDFC]">Contato</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href="https://wa.me/5551982414249?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20de%20Aya%20Tr%C3%A1fego%20Pago"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFFDFC]"
              >
                WhatsApp: 51 98241-4249
              </a>
            </li>
            <li>
              <a
                href="mailto:ayatrafegopago@gmail.com"
                className="hover:text-[#FFFDFC]"
              >
                ayatrafegopago@gmail.com
              </a>
            </li>
            <li>Porto Alegre, RS — atendimento remoto para todo o Brasil</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 pb-8 pt-6 text-xs text-[#E3D3B4]/70 sm:pb-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 sm:flex-row">
          <p>&copy; {year} Aya Tráfego Pago. Todos os direitos reservados.</p>
          <Link href="/politica-de-privacidade" className="hover:text-[#FFFDFC]">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
