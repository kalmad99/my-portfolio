import type { DiagramKey } from "./types";
import { CredititBackendDiagram } from "./CredititBackendDiagram";
import { NewDashboardDiagram } from "./NewDashboardDiagram";
import { ScoringServiceDiagram } from "./ScoringServiceDiagram";
import { SecureViewDiagram } from "./SecureViewDiagram";

interface ArchitectureDiagramProps {
  diagram: DiagramKey;
}

export function ArchitectureDiagram({ diagram }: ArchitectureDiagramProps) {
  switch (diagram) {
    case "scoring-service":
      return <ScoringServiceDiagram />;
    case "secure-view":
      return <SecureViewDiagram />;
    case "new-dashboard":
      return <NewDashboardDiagram />;
    case "creditit-backend":
      return <CredititBackendDiagram />;
    default:
      return null;
  }
}
