"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/", label: "Início" },
  { href: "/solucoes", label: "Soluções" },
  { href: "/resultados", label: "Resultados" },
  { href: "/sobre", label: "Sobre" },
  { href: "/diagnostico", label: "Contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#FFFDFC]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <span className="relative h-9 w-9">
              <Image
                src="/logo/logo-aya-3.png"
                alt="Aya Tráfego Pago"
                fill
                className="object-contain"
                sizes="2.25rem"
              />
            </span>
            <span className="text-lg font-bold tracking-tight text-[#123B46]">
              AYA
            </span>
          </Link>

          <span className="hidden border-l border-[#123B46]/20 pl-3 text-xs text-[#123B46] sm:block">
            Tráfego Pago &amp; Performance Digital
          </span>
        </div>

        <nav className="hidden items-center gap-3 text-sm font-medium md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full bg-[#123B46] px-4 py-2 text-white transition-colors hover:bg-[#0d2c34]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#123B46] text-white transition-colors hover:bg-[#0d2c34] md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-black/10 md:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-full bg-[#123B46] px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-[#0d2c34]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
