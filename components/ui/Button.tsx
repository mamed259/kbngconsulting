import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
}

function isContactHref(href: string) {
  return /contacts/i.test(href) || href === "#contact";
}

export function Button({ href, children, variant = "solid", className }: ButtonProps) {
  const variantClass = variant === "solid" ? "btn btn-solid" : "btn btn-ghost";
  const contactAttrs = isContactHref(href) ? ({ "data-contact-trigger": true } as const) : null;

  if (href.startsWith("http")) {
    if (contactAttrs) {
      return (
        <a href={href} className={cn(variantClass, className)} {...contactAttrs}>
          {children}
        </a>
      );
    }
    return (
      <a href={href} className={cn(variantClass, className)} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  if (href.startsWith("#") || contactAttrs) {
    return (
      <a href={href} className={cn(variantClass, className)} {...(contactAttrs || {})}>
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
