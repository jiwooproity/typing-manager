const KeyLineElement = (value: string, index: number): JSX.Element => {
    return (
        <button className={value} key={index}>
            <span>{value}</span>
        </button>
    )
} 

const KeyBoard = () => {
    const oneLine: string[] = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
    const twoLine: string[] = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'];
    const threeLine: string[] = ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter'];
    const fourLine: string[] = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift'];
    const fiveLine: string[] = ['Ctrl', 'Win', 'Alt', 'Spacebar', 'Alt', 'Fn', 'Doc', 'Ctrl'];

    return (
        <div className="keyboard_box">
            <div className="keyboard_row one">
                {oneLine.map(KeyLineElement)}
            </div>
            <div className="keyboard_row two">
                {twoLine.map(KeyLineElement)}
            </div>
            <div className="keyboard_row three">
                {threeLine.map(KeyLineElement)}
            </div>
            <div className="keyboard_row four">
                {fourLine.map(KeyLineElement)}
            </div>
            <div className="keyboard_row five">
                {fiveLine.map(KeyLineElement)}
            </div>
        </div>
    )
}

export default KeyBoard;