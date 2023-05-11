type ButtonPropsType = {
    className?: string;
    buttonText: string;
    onClick: () => void;
}

const Button = ({ className, buttonText, onClick }: ButtonPropsType): JSX.Element => {
    return (
        <button className={className} onClick={onClick}>
            <span>{buttonText}</span>
        </button>
    )
}

Button.defaultProps = {
    className: "",
}

export default Button;