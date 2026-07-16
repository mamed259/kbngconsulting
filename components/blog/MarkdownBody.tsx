import type { ReactNode } from "react";

interface MarkdownBodyProps {
  content: string;
  className?: string;
}

const INLINE_PATTERN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

function renderInline(text: string): ReactNode[] {
  const parts = text.split(INLINE_PATTERN).filter((part) => part !== "");

  return parts.map((part, index) => {
    const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
    if (boldMatch) {
      return <strong key={index}>{boldMatch[1]}</strong>;
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      const isExternal = /^https?:\/\//.test(href);
      return (
        <a
          key={index}
          href={href}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {label}
        </a>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

function isListLine(line: string): boolean {
  return /^(-|•)\s+/.test(line.trim());
}

function isHr(line: string): boolean {
  return /^(-{3,}|\*{3,}|_{3,})$/.test(line.trim());
}

export function MarkdownBody({ content, className }: MarkdownBodyProps) {
  const blocks = content
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  const nodes: ReactNode[] = [];

  blocks.forEach((block, blockIndex) => {
    const lines = block.split("\n").map((line) => line.trim());

    if (lines.length === 1 && isHr(lines[0])) {
      nodes.push(<hr key={blockIndex} />);
      return;
    }

    if (lines.length === 1 && lines[0].startsWith("### ")) {
      nodes.push(<h3 key={blockIndex}>{renderInline(lines[0].slice(4).trim())}</h3>);
      return;
    }

    if (lines.length === 1 && lines[0].startsWith("## ")) {
      nodes.push(<h2 key={blockIndex}>{renderInline(lines[0].slice(3).trim())}</h2>);
      return;
    }

    if (lines.every(isListLine)) {
      nodes.push(
        <ul key={blockIndex}>
          {lines.map((line, lineIndex) => (
            <li key={lineIndex}>{renderInline(line.replace(/^(-|•)\s+/, ""))}</li>
          ))}
        </ul>,
      );
      return;
    }

    nodes.push(<p key={blockIndex}>{renderInline(lines.join(" "))}</p>);
  });

  return <div className={className}>{nodes}</div>;
}
