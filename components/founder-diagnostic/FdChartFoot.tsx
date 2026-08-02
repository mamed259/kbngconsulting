"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
};

function parseFoot(text: string) {
  const match = text.match(/^(\d+)\s*(.*)$/);
  if (!match) return { target: null as number | null, rest: text };
  return { target: Number(match[1]), rest: match[2].trim() };
}

export function FdChartFoot({ text }: Props) {
  const { target, rest } = parseFoot(text);
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (target === null) return;

    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setCount(target);
      setDone(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting) || started.current) return;
        started.current = true;
        observer.disconnect();

        const duration = 1400;
        const start = performance.now();

        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setCount(Math.round(target * eased));
          if (t < 1) {
            requestAnimationFrame(tick);
          } else {
            setCount(target);
            setDone(true);
          }
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  if (target === null) {
    return (
      <div className="chart-foot">
        <span>{text}</span>
      </div>
    );
  }

  return (
    <div className={`chart-foot${done ? " is-done" : ""}`} ref={ref}>
      <span>
        <b>{count}</b> {rest}
      </span>
    </div>
  );
}
