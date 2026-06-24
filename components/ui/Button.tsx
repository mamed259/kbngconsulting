import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
}

export function Button({ href, children, variant = "solid", className }: ButtonProps) {
  const variantClass = variant === "solid" ? "btn btn-solid" : "btn btn-ghost";

  if (href.startsWith("http")) {
    return (
      <a href={href} className={cn(variantClass, className)} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} className={cn(variantClass, className)}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(variantClass, className)}>
      {children}
    </Link>
  );
}
