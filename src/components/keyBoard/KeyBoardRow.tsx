import { KeyDataIF } from "@/utils/keyInterface";

type RowComponentTypes = {
    className: string;
    data: KeyDataIF[];
    createElement: (value: KeyDataIF, index: number) => JSX.Element;
}

const KeyBoardRow = ({ className, data, createElement }: RowComponentTypes): JSX.Element => {

    return (
        <div className={className}>
            {data.map(createElement)}
        </div>
    )
}

export default KeyBoardRow;