import "./case.css";

function Line({ children }: LineProps) {
  return (
    <div className="case-line" data-testId="case-line">
      {children}
    </div>
  );
}

export function Case({ layouts, children }: CaseProps) {
  return (
    <div className="case-container" data-testId="case-container">
      {layouts.map((layout, index) => (
        <Line key={index}>{children({ layout })}</Line>
      ))}
    </div>
  );
}
