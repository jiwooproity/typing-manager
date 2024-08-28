import "./case.css";

function Line({ children }: LineProps) {
  return <div className="case-line">{children}</div>;
}

export function Case({ children }: CaseProps) {
  return <div className="case-container">{children}</div>;
}

Case.Line = Line;
