interface CaseChildFuncProps {
  layout: UnitLayoutsType[];
}

interface CaseProps {
  layouts: UnitLayoutsType[][];
  children: (args: CaseChildFuncProps) => JSX.Element[];
}

interface LineProps {
  line: number;
  children: ReactNode;
}
