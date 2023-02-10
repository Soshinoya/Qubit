const Button = ({ className, minWidth, children }) => {
    return <button className={`button ${className ? className : ''}`} style={{ minWidth: `${minWidth}px` }}>{children}</button>
}

export default Button