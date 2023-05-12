import { useState } from "react";
import { KeyBoard } from "@/components";

const KeyDown = 'keydown' as const;
const SLEFT = 'ShiftLeft' as const;
const SRIGHT = 'ShiftRight' as const;

type ChangeActiveIF = {
    code: string,
    active: boolean
}

let keyPerformance: { [key: string]: number } = {};

const KeyBoardControl = (): JSX.Element => {
    const [pressedStatus, setPressedStatus] = useState<{ [key: string]: boolean }>({});

    const onChangeActive = ({ code, active }: ChangeActiveIF) => {
        const key = document.getElementById(code);

        if(key) {
            active ? key.classList.add('press') : key.classList.remove('press');
        }
    }
    
    const onKeyDown = (e: KeyboardEvent) => { 
        e.preventDefault();

        if (!keyPerformance[e.code]) {
            keyPerformance[e.code] = performance.now()    
        };

        !pressedStatus[e.code] && setPressedStatus((state) => { return { ...state, [e.code]: true } })

        onChangeActive({ code: e.code, active: true });
    }

    const onKeyUp = (e: KeyboardEvent) => {        
        e.preventDefault();

        switch (e.code) {
            case SLEFT:
            case SRIGHT:
                const SHIFTKEYS = [SLEFT, SRIGHT];
                SHIFTKEYS.forEach((val) => onChangeActive({ code: val, active: false }));
                break;
            default:
                onChangeActive({ code: e.code, active: false });
                break;
        }

        let upTime = performance.now();
        let heldTime = Math.ceil(upTime - keyPerformance[e.code]);
        
        const getTimeAreaElement = document.querySelector('#keyboard_scan-rate_ul');
        const createListElement = document.createElement('li');
        const performanceContent = document.createTextNode(`${e.code}: ${heldTime}ms`);
        createListElement.appendChild(performanceContent);
        getTimeAreaElement.insertBefore(createListElement, getTimeAreaElement.firstChild);

        keyPerformance[e.code] = null;
    }

    // 입력 활성화 초기화
    const onReset = () => {
        setPressedStatus({});
    }

    return (
        <KeyBoard state={pressedStatus} onKeyDown={onKeyDown} onKeyUp={onKeyUp} onReset={onReset} />
    )
}

export default KeyBoardControl;