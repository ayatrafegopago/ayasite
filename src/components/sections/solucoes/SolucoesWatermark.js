"use client";

import Image from "next/image";

export default function SolucoesWatermark() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -bottom-20 -right-16 h-[35rem] w-[28rem] opacity-10">
        <Image src="/logo/logo-aya-reversa.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
}
