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
            <button id={`${value.keyCode}`} className={`${value.keyCap}${keyPressed ? " active" : ""}`} key={index}>
                <span>{value.keyCap}</span>
            </button>
        )
    } 

    return (
        <div className="keyboard_area">
            <div className="keyboard_box">
                <div className="keyboard_top">
                    <div className="keyboard_top_row">
                        <button>
                            <span>ESC</span>
                        </button>
                    </div>
                    <div className="keyboard_top_row">
                        <button>
                            <span>F1</span>
                        </button>
                        <button>
                            <span>F2</span>
                        </button>
                        <button>
                            <span>F3</span>
                        </button>
                        <button>
                            <span>F4</span>
                        </button>
                    </div>
                    <div className="keyboard_top_row">
                        <button>
                            <span>F5</span>
                        </button>
                        <button>
                            <span>F6</span>
                        </button>
                        <button>
                            <span>F7</span>
                        </button>
                        <button>
                            <span>F8</span>
                        </button>
                    </div>
                    <div className="keyboard_top_row">
                        <button>
                            <span>F9</span>
                        </button>
                        <button>
                            <span>F10</span>
                        </button>
                        <button>
                            <span>F11</span>
                        </button>
                        <button>
                            <span>F12</span>
                        </button>
                    </div>
                </div>
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