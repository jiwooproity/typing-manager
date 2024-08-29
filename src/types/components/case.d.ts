interface CaseChildFuncProps {
  layout: UnitLayoutsType[];
}

interface CaseProps {
  layouts: UnitLayoutsType[][];
  children: (args: LineChildrenArgsProps) => JSX.Element[];
}

interface LineProps {
  line: number;
  children: ReactNode;
}
