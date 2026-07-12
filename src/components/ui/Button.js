import Link from "next/link";

const variants = {
  primary: "bg-[#E7664C] text-white hover:bg-[#d1543b]",
  secondary: "bg-[#123B46] text-white hover:bg-[#0d2c34]",
  outline: "border border-[#123B46] text-[#123B46] hover:bg-[#123B46] hover:text-white",
  "outline-light": "border border-[#FFFDFC]/40 text-[#FFFDFC] hover:bg-[#FFFDFC]/10",
};

export default function Button({ href, children, variant = "primary", className = "", ...props }) {
  const classes = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
