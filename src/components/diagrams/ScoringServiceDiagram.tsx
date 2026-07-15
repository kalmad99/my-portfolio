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

export function ScoringServiceDiagram() {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="flex w-full flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-center sm:gap-2">
        <DiagramNode
          label="Banking features in"
          subtitle="Request payload"
          className="sm:min-w-[7.5rem]"
        />
        <FlowArrow />
        <DiagramNode
          label="PMML scorecards"
          subtitle="Score evaluation"
          className="sm:min-w-[7.5rem]"
        />
        <FlowArrow />
        <DiagramNode
          label="Rules engine"
          subtitle="Rule evaluation"
          className="sm:min-w-[7.5rem]"
        />
        <FlowArrow />
        <DiagramNode
          label="Decision out"
          subtitle="Approve / reject + limit"
          variant="accent"
          className="sm:min-w-[7.5rem]"
        />
      </div>

      <div className="flex flex-col items-center gap-2">
        <DiagramArrow direction="down" />
        <DiagramNode
          label="Celery / Redis"
          subtitle="Async layer"
          variant="muted"
          className="min-w-[8rem]"
        />
      </div>
    </div>
  );
}
