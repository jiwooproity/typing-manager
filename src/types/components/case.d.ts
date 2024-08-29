interface CaseProps {
  layouts: UnitType[][];
  children: (args: LineChildrenArgsProps) => JSX.Element[];
}

interface LineChildrenArgsProps {
  layout: UnitType[];
}

interface LineProps {
  children: ReactNode;
}
