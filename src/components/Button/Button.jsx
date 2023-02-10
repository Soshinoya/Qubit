const Button = ({ className, minWidth, children }) => {
    return <button className={`button button--accent ${className ? className : ''}`} style={{ minWidth: `${minWidth}px` }}>{children}</button>
}

export default Button