import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline-white";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
  className?: string;
  external?: boolean;
  download?: string | boolean;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-terracotta text-white hover:bg-terracotta-dark border border-terracotta",
  secondary:
    "bg-white text-terracotta border border-terracotta hover:bg-terracotta/5",
  "outline-white":
    "bg-transparent text-white border border-white hover:bg-white/10",
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
  external = false,
  download,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors";

  const content = (
    <>
      {children}
      {icon}
    </>
  );

  if (external || download !== undefined) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        download={download}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {content}
    </Link>
  );
}
