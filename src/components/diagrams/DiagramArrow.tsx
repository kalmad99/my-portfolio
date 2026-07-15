import { ArrowDown, ArrowRight } from "lucide-react";

interface DiagramArrowProps {
  direction?: "right" | "down";
  className?: string;
}

export function DiagramArrow({
  direction = "right",
  className = "",
}: DiagramArrowProps) {
  const Icon = direction === "down" ? ArrowDown : ArrowRight;

  return (
    <div
      className={`flex shrink-0 items-center justify-center text-muted ${className}`}
      aria-hidden
    >
      <Icon className="h-4 w-4" strokeWidth={1.75} />
    </div>
  );
}
