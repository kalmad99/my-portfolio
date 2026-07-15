import { DiagramArrow } from "./DiagramArrow";
import { DiagramNode } from "./DiagramNode";

export function NewDashboardDiagram() {
  return (
    <div className="flex w-full flex-col items-center gap-3">
      <DiagramNode
        label="Shared codebase"
        subtitle="Next.js platform"
        className="min-w-[10rem]"
      />
      <DiagramArrow direction="down" />
      <DiagramNode
        label="Theme / routing layer"
        subtitle="Per-bank white-labeling"
        className="min-w-[11rem]"
      />
      <DiagramArrow direction="down" />
      <DiagramNode
        label="RBAM / PBAM"
        subtitle="Permission layer"
        className="min-w-[10rem]"
      />
      <DiagramArrow direction="down" />

      <div className="flex w-full flex-col items-stretch gap-2 sm:flex-row sm:justify-center sm:gap-3">
        <DiagramNode label="Bank A" variant="accent" className="sm:min-w-[6rem]" />
        <DiagramNode label="Bank B" variant="accent" className="sm:min-w-[6rem]" />
        <DiagramNode label="Bank C" variant="accent" className="sm:min-w-[6rem]" />
      </div>
    </div>
  );
}
