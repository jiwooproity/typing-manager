interface CaseProps {
  layouts: UnitLayoutsType[][];
  children: (args: LineChildrenArgsProps) => JSX.Element[];
}

interface LineChildrenArgsProps {
  layout: UnitLayoutsType[];
}

interface LineProps {
  line: number;
  children: ReactNode;
}
