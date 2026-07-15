interface StackTagProps {
  label: string;
}

export function StackTag({ label }: StackTagProps) {
  return (
    <span className="inline-block rounded border border-accent/25 bg-accent-subtle px-2 py-0.5 font-mono text-[11px] leading-relaxed text-accent">
      {label}
    </span>
  );
}
