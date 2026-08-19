import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function CopyAction({
  value,
  label,
  icon,
  className,
}: {
  value: string;
  label?: string;
  icon?: React.ReactNode;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      /* clipboard geweigerd — feedback blijft uit */
      return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Kopieer ${label ?? value}`}
      className={cn(
        "stamp-press group inline-flex items-center gap-2.5 border-2 border-ebony bg-card px-4 py-2.5 font-mono text-[10px] tracking-[0.16em] text-ebony uppercase hover:bg-moss/[0.06]",
        className,
      )}
    >
      {icon ?? <span aria-hidden="true">✉</span>}
      <span className="truncate">{label ?? value}</span>
      <span className="ml-1 inline-flex items-center gap-1 text-moss">
        {copied ? <Check size={11} /> : <Copy size={11} />}
        <span className="text-[9px]">{copied ? "GEKOPIEERD" : "COPY"}</span>
      </span>
    </button>
  );
}
