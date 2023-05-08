export interface KeyDataIF {
    keyCap: string,
    keyCode: string,
    pressed: boolean
}

interface ReturnTypeKeyInterface {
    [key: string]: KeyDataIF
}

export interface KeyInterfaceIF {
    [key: string]: ReturnTypeKeyInterface
}

export const keyInterface: KeyInterfaceIF = {
    'topLine': {
        'Escape': {
            keyCap: 'ESC',
            keyCode: 'Escape',
            pressed: false,
        },
        'F1': {
            keyCap: 'F1',
            keyCode: 'F1',
            pressed: false,
        },
        'F2': {
            keyCap: 'F2',
            keyCode: 'F2',
            pressed: false,
        },
        'F3': {
            keyCap: 'F3',
            keyCode: 'F3',
            pressed: false,
        },
        'F4': {
            keyCap: 'F4',
            keyCode: 'F4',
            pressed: false,
        },
        'F5': {
            keyCap: 'F5',
            keyCode: 'F5',
            pressed: false,
        },
        'F6': {
            keyCap: 'F6',
            keyCode: 'F6',
            pressed: false,
        },
        'F7': {
            keyCap: 'F7',
            keyCode: 'F7',
            pressed: false,
        },
        'F8': {
            keyCap: 'F8',
            keyCode: 'F8',
            pressed: false,
        },
        'F9': {
            keyCap: 'F9',
            keyCode: 'F9',
            pressed: false,
        },
        'F10': {
            keyCap: 'F10',
            keyCode: 'F10',
            pressed: false,
        },
        'F11': {
            keyCap: 'F11',
            keyCode: 'F11',
            pressed: false,
        },
        'F12': {
            keyCap: 'F12',
            keyCode: 'F12',
            pressed: false,
        },
    },
    'oneLine': {
        'Backquote': {
            keyCap: '`',
            keyCode: 'Backquote',
            pressed: false,
        },
        'Digit1': {
            keyCap: '1',
            keyCode: 'Digit1',
            pressed: false,
        },
        'Digit2': {
            keyCap: '2',
            keyCode: 'Digit2',
            pressed: false,
        },
        'Digit3': {
            keyCap: '3',
            keyCode: 'Digit3',
            pressed: false,
        },
        'Digit4': {
            keyCap: '4',
            keyCode: 'Digit4',
            pressed: false,
        },
        'Digit5': {
            keyCap: '5',
            keyCode: 'Digit5',
            pressed: false,
        },
        'Digit6': {
            keyCap: '6',
            keyCode: 'Digit6',
            pressed: false,
        },
        'Digit7': {
            keyCap: '7',
            keyCode: 'Digit7',
            pressed: false,
        },
        'Digit8': {
            keyCap: '8',
            keyCode: 'Digit8',
            pressed: false,
        },
        'Digit9': {
            keyCap: '9',
            keyCode: 'Digit9',
            pressed: false,
        },
        'Digit0': {
            keyCap: '0',
            keyCode: 'Digit0',
            pressed: false,
        },
        'Minus': {
            keyCap: '-',
            keyCode: 'Minus',
            pressed: false,
        },
        'Equal': {
            keyCap: '=',
            keyCode: 'Equal',
            pressed: false,
        },
        'Backspace': {
            keyCap: 'Backspace',
            keyCode: 'Backspace',
            pressed: false,
        },
    },
    'twoLine': {
        'Tab': {
            keyCap: 'Tab',
            keyCode: 'Tab',
            pressed: false,
        },
        'KeyQ': {
            keyCap: 'Q',
            keyCode: 'KeyQ',
            pressed: false,
        },
        'KeyW': {
            keyCap: 'W',
            keyCode: 'KeyW',
            pressed: false,
        },
        'KeyE': {
            keyCap: 'E',
            keyCode: 'KeyE',
            pressed: false,
        },
        'KeyR': {
            keyCap: 'R',
            keyCode: 'KeyR',
            pressed: false,
        },
        'KeyT': {
            keyCap: 'T',
            keyCode: 'KeyT',
            pressed: false,
        },
        'KeyY': {
            keyCap: 'Y',
            keyCode: 'KeyY',
            pressed: false,
        },
        'KeyU': {
            keyCap: 'U',
            keyCode: 'KeyU',
            pressed: false,
        },
        'KeyI': {
            keyCap: 'I',
            keyCode: 'KeyI',
            pressed: false,
        },
        'KeyO': {
            keyCap: 'O',
            keyCode: 'KeyO',
            pressed: false,
        },
        'KeyP': {
            keyCap: 'P',
            keyCode: 'KeyP',
            pressed: false,
        },
        'BracketLeft': {
            keyCap: '[',
            keyCode: 'BracketLeft',
            pressed: false,
        },
        'BracketRight': {
            keyCap: ']',
            keyCode: 'BracketRight',
            pressed: false,
        },
        'Backslash': {
            keyCap: '\\',
            keyCode: 'Backslash',
            pressed: false,
        },
    },
    'threeLine': {
        'CapsLock': {
            keyCap: 'CapsLock',
            keyCode: 'CapsLock',
            pressed: false,
        },
        'KeyA': {
            keyCap: 'A',
            keyCode: 'KeyA',
            pressed: false,
        },
        'KeyS': {
            keyCap: 'S',
            keyCode: 'KeyS',
            pressed: false,
        },
        'KeyD': {
            keyCap: 'D',
            keyCode: 'KeyD',
            pressed: false,
        },
        'KeyF': {
            keyCap: 'F',
            keyCode: 'KeyF',
            pressed: false,
        },
        'KeyG': {
            keyCap: 'G',
            keyCode: 'KeyG',
            pressed: false,
        },
        'KeyH': {
            keyCap: 'H',
            keyCode: 'KeyH',
            pressed: false,
        },
        'KeyJ': {
            keyCap: 'J',
            keyCode: 'KeyJ',
            pressed: false,
        },
        'KeyK': {
            keyCap: 'K',
            keyCode: 'KeyK',
            pressed: false,
        },
        'KeyL': {
            keyCap: 'L',
            keyCode: 'KeyL',
            pressed: false,
        },
        'Semicolon': {
            keyCap: ';',
            keyCode: 'Semicolon',
            pressed: false,
        },
        'Quote': {
            keyCap: '\'',
            keyCode: 'Quote',
            pressed: false,
        },
        'Enter': {
            keyCap: 'Enter',
            keyCode: 'Enter',
            pressed: false,
        },
    },
    'fourLine': {
        'ShiftLeft': {
            keyCap: 'Shift',
            keyCode: 'ShiftLeft',
            pressed: false,
        },
        'KeyZ': {
            keyCap: 'Z',
            keyCode: 'KeyZ',
            pressed: false,
        },
        'KeyX': {
            keyCap: 'X',
            keyCode: 'KeyX',
            pressed: false,
        },
        'KeyC': {
            keyCap: 'C',
            keyCode: 'KeyC',
            pressed: false,
        },
        'KeyV': {
            keyCap: 'V',
            keyCode: 'KeyV',
            pressed: false,
        },
        'KeyB': {
            keyCap: 'B',
            keyCode: 'KeyB',
            pressed: false,
        },
        'KeyN': {
            keyCap: 'N',
            keyCode: 'KeyN',
            pressed: false,
        },
        'KeyM': {
            keyCap: 'M',
            keyCode: 'KeyM',
            pressed: false,
        },
        'Comma': {
            keyCap: ',',
            keyCode: 'Comma',
            pressed: false,
        },
        'Period': {
            keyCap: '.',
            keyCode: 'Period',
            pressed: false,
        },
        'Slash': {
            keyCap: '/',
            keyCode: 'Slash',
            pressed: false,
        },
        'ShiftRight': {
            keyCap: 'Shift',
            keyCode: 'ShiftRight',
            pressed: false,
        }
    },
    'fiveLine': {
        'ControlLeft': {
            keyCap: 'Ctrl',
            keyCode: 'ControlLeft',
            pressed: false,
        },
        'MetaLeft': {
            keyCap: 'Win',
            keyCode: 'MetaLeft',
            pressed: false,
        },
        'AltLeft': {
            keyCap: 'Alt',
            keyCode: 'AltLeft',
            pressed: false,
        },
        'Space': {
            keyCap: 'Spacebar',
            keyCode: 'Space',
            pressed: false,
        },
        'AltRight': {
            keyCap: 'Alt',
            keyCode: 'AltRight',
            pressed: false,
        },
        'Fn': {
            keyCap: 'Fn',
            keyCode: 'Fn',
            pressed: false,
        },
        'ContextMenu': {
            keyCap: 'Menu',
            keyCode: 'ContextMenu',
            pressed: false,
        },
        'ControlRight': {
            keyCap: 'Ctrl',
            keyCode: 'ControlRight',
            pressed: false,
        }
    }
}

export const getKeyCapInterface = (lineType: string): KeyDataIF[] => {
    return Object.values(keyInterface[lineType]);
}

export const getKeyInterfaces = (): { [key: string]: KeyDataIF } => {
    return {
        ...keyInterface.topLine,
        ...keyInterface.oneLine,
        ...keyInterface.twoLine,
        ...keyInterface.threeLine,
        ...keyInterface.fourLine,
    }
}