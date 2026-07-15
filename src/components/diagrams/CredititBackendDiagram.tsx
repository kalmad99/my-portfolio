import { DiagramArrow } from "./DiagramArrow";
import { DiagramNode } from "./DiagramNode";

export function CredititBackendDiagram() {
  return (
    <div className="flex w-full flex-col items-center gap-3">
      <div className="flex w-full flex-col items-stretch gap-2 sm:flex-row sm:justify-center sm:gap-3">
        <DiagramNode
          label="Credit scoring"
          subtitle="Financial metrics"
          className="sm:min-w-[8rem]"
        />
        <DiagramNode
          label="Payment forecasting"
          subtitle="ML pipeline"
          className="sm:min-w-[8rem]"
        />
        <DiagramNode
          label="Statement extraction"
          subtitle="OCR pipeline"
          className="sm:min-w-[8rem]"
        />
      </div>

      <DiagramArrow direction="down" />

      <DiagramNode
        label="Creditit platform"
        subtitle="Shared invoice-financing backend"
        variant="accent"
        className="min-w-[12rem]"
      />
    </div>
  );
}
