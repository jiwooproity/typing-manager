import { KeyDataIF } from "@/utils/keyInterface";
import { CSSProperties } from "react";

interface RowComponentTypes {
    className?: string;
    data: KeyDataIF[];
    style?: CSSProperties;
    createElement?: (value: KeyDataIF, index: number) => JSX.Element;
}

const KeyBoardRow = ({ className, data, style, createElement }: RowComponentTypes): JSX.Element => {

    return (
        <div className={className} style={style}>
            {data.map(createElement)}
        </div>
    )
}

KeyBoardRow.defaultProps = {
    className: "",
    style: {}
}

export default KeyBoardRow;