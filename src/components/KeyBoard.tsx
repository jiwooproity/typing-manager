import { useEffect, useState } from "react";

import { KeyDataIF } from "@/utils/keyInterface";
import { getKeyCapInterface } from "@/utils/keyInterface";

const KeyDown = 'keydown' as const;
// const keyUp = 'keyup' as const;

const KeyBoard = (): JSX.Element => {
    const [pressedStatus, setPressedStatus] = useState<{ [key: string]: boolean }>({});

    const keyLineArray = ['topLine', 'oneLine', 'twoLine', 'threeLine', 'fourLine', 'fiveLine'];
    const keyLineInterface = keyLineArray.map((value) => getKeyCapInterface(value));
    
    const onKeyEvent = (e: KeyboardEvent) => {        
        e.preventDefault();
        if(e.type === KeyDown && !pressedStatus[e.code]) setPressedStatus((state) => { return { ...state, [e.code]: true } })

        const key = document.getElementById(e.code);
        if(key) key.classList.add("press");
    }

    const onKeyUp = (e: KeyboardEvent) => {
        e.preventDefault();
        const key = document.getElementById(e.code);
        if(key) key.classList.remove("press");
    }

    const onResetEvent = () => {
        setPressedStatus({});
    }

    useEffect(() => {        
        document.addEventListener("keydown", onKeyEvent);
        document.addEventListener('keyup', onKeyUp);

        return () => {
            document.removeEventListener("keydown", onKeyEvent);
            document.removeEventListener('keyup', onKeyUp);
        }
    }, []);

    const KeyLineElement = (value: KeyDataIF, index: number): JSX.Element => {
        const keyPressed = pressedStatus[value.keyCode] || false;

        return (
            <button id={`${value.keyCode}`} className={`${value.keyCap}${keyPressed ? " press active" : ""}`} key={index}>
                <span>{value.keyCap}</span>
            </button>
        )
    }

    return (
        <div className="keyboard_area">
            <div className="keyboard_box">
                <div className="keyboard_top">
                    <div className="keyboard_top_row">
                        {keyLineInterface[0].filter((val) => val.keyCode === "Escape").map(KeyLineElement)}
                    </div>
                    <div className="keyboard_top_row">
                        {keyLineInterface[0].slice(1, 5).map(KeyLineElement)}
                    </div>
                    <div className="keyboard_top_row">
                        {keyLineInterface[0].slice(5, 9).map(KeyLineElement)}
                    </div>
                    <div className="keyboard_top_row">
                        {keyLineInterface[0].slice(9, 13).map(KeyLineElement)}
                    </div>
                </div>
                <div className="keyboard_row one">
                    {keyLineInterface[1].map(KeyLineElement)}
                </div>
                <div className="keyboard_row two">
                    {keyLineInterface[2].map(KeyLineElement)}
                </div>
                <div className="keyboard_row three">
                    {keyLineInterface[3].map(KeyLineElement)}
                </div>
                <div className="keyboard_row four">
                    {keyLineInterface[4].map(KeyLineElement)}
                </div>
                <div className="keyboard_row five">
                    {keyLineInterface[5].map(KeyLineElement)}
                </div>
            </div>
            <button onClick={onResetEvent}>
                <span>Reset</span>
            </button>
        </div>
    )
}

export default KeyBoard;