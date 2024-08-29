import "./case.css";

function Line({ line, children }: LineProps) {
  return (
    <div className="case-line" data-testid={`case-line-${line}`}>
      {children}
    </div>
  );
}

export function Case({ layouts, children }: CaseProps) {
  return (
    <div className="case-container" data-testid="case-container">
      {layouts.map((layout, index) => (
        <Line line={index} key={`line-${index}`}>
          {children({ layout })}
        </Line>
      ))}
    </div>
  );
}
