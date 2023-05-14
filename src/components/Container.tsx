import { useState } from "react";

import CheckBox from "@/common/CheckBox";
import { KeyBoardControl } from "@/components";

import lightbulb from "@/assets/svg/lightbulb.svg";
import darkbulb from "@/assets/svg/darkbulb.svg";

const Container = () => {
    const [theme, setTheme] = useState<boolean>(false);

    const onChangeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            document.documentElement.setAttribute('color-theme', 'dark');
        } else {
            document.documentElement.setAttribute('color-theme', 'light');
        }

        setTheme(!theme);
    }

    return (
        <div className="container">
            <div className="wrapper">
                <div className="theme_container">
                    <CheckBox id="theme" className="checkbox" checked={theme} hidden={true} onChange={onChangeTheme}/>
                    <label htmlFor="theme">
                        <img className="theme_img" src={theme ? darkbulb : lightbulb}/>
                    </label>
                </div>
                <div className="keyboard_container">
                    <KeyBoardControl />
                </div>
            </div>
        </div>
    )
}

export default Container;