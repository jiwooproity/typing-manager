import { useEffect, useState } from "react";

import { KeyDataIF } from "@/utils/keyInterface";
import { getKeyCapInterface } from "@/utils/keyInterface";

const KeyDown = 'keydown' as const;
// const keyUp = 'keyup' as const;

const KeyBoard = (): JSX.Element => {
    const [pressedStatus, setPressedStatus] = useState<{ [key: string]: boolean }>({});

    const keyLineArray = ['oneLine', 'twoLine', 'threeLine', 'fourLine', 'fiveLine'];
    const keyLineInterface = keyLineArray.map((value) => getKeyCapInterface(value));

    const onKeyEvent = (e: KeyboardEvent) => {        
        e.preventDefault();
        
        if(e.type === KeyDown) {
            setPressedStatus((state) => { return { ...state, [e.code]: true } })
        }
    }

    const onResetEvent = () => {
        setPressedStatus({});
    }

    useEffect(() => {        
        document.addEventListener("keydown", onKeyEvent);

        return () => {
            document.removeEventListener("keydown", onKeyEvent);
        }
    }, []);

    const KeyLineElement = (value: KeyDataIF, index: number): JSX.Element => {
        const keyPressed = pressedStatus[value.keyCode] || false;

        return (
            <button className={`${value.keyCap}${keyPressed ? " active" : ""}`} key={index}>
                <span>{value.keyCap}</span>
            </button>
        )
    } 

    return (
        <div className="keyboard_area">
            <div className="keyboard_box">
                <div className="keyboard_row one">
                    {keyLineInterface[0].map(KeyLineElement)}
                </div>
                <div className="keyboard_row two">
                    {keyLineInterface[1].map(KeyLineElement)}
                </div>
                <div className="keyboard_row three">
                    {keyLineInterface[2].map(KeyLineElement)}
                </div>
                <div className="keyboard_row four">
                    {keyLineInterface[3].map(KeyLineElement)}
                </div>
                <div className="keyboard_row five">
                    {keyLineInterface[4].map(KeyLineElement)}
                </div>
            </div>
            <button onClick={onResetEvent}>
                <span>Reset</span>
            </button>
        </div>
    )
}

export default KeyBoard;