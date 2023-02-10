import { Link } from "react-router-dom"

const CustomLink = ({ className, to, children }) => {
    return (
        <Link to={to} className={`custom-link ${className ? className : ''}`}>
            {children}
        </Link>
    )
}

export default CustomLink