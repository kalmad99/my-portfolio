interface DiagramNodeProps {
  label: string;
  subtitle?: string;
  variant?: "default" | "accent" | "muted";
  className?: string;
}

export function DiagramNode({
  label,
  subtitle,
  variant = "default",
  className = "",
}: DiagramNodeProps) {
  const variantClasses = {
    default: "border-border bg-card text-foreground",
    accent: "border-accent/40 bg-accent-subtle text-accent",
    muted: "border-border bg-background text-muted",
  }[variant];

  return (
    <div
      className={`rounded-md border px-3 py-2 text-center ${variantClasses} ${className}`}
    >
      <p className="font-mono text-xs font-medium leading-snug">{label}</p>
      {subtitle && (
        <p className="mt-0.5 font-mono text-[10px] leading-snug text-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
}
