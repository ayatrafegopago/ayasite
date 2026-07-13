"use client";

export default function ResultadosWatermark() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -bottom-24 -right-20 h-[38rem] w-[34rem] opacity-10"
      style={{
        backgroundColor: "#202629",
        WebkitMaskImage: "url(/logo/logo-aya-4.png)",
        maskImage: "url(/logo/logo-aya-4.png)",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}
