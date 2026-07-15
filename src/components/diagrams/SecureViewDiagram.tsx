import { DiagramArrow } from "./DiagramArrow";
import { DiagramNode } from "./DiagramNode";

function FlowArrow() {
  return (
    <>
      <DiagramArrow className="hidden sm:flex" direction="right" />
      <DiagramArrow className="sm:hidden" direction="down" />
    </>
  );
}

export function SecureViewDiagram() {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="flex w-full flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-center sm:gap-2">
        <DiagramNode
          label="Client"
          subtitle="Android"
          className="sm:min-w-[7rem]"
        />
        <FlowArrow />
        <DiagramNode
          label="API"
          subtitle="FastAPI"
          className="sm:min-w-[7rem]"
        />
        <FlowArrow />
        <DiagramNode
          label="Envelope encryption"
          subtitle="Server-side"
          className="sm:min-w-[7.5rem]"
        />
        <FlowArrow />
        <DiagramNode
          label="Object storage"
          subtitle="Cloudflare R2"
          variant="accent"
          className="sm:min-w-[7rem]"
        />
      </div>

      <div className="flex flex-col items-center gap-2">
        <DiagramArrow direction="down" />
        <DiagramNode
          label="Audit log"
          subtitle="Access events"
          variant="muted"
          className="min-w-[8rem]"
        />
      </div>
    </div>
  );
}
