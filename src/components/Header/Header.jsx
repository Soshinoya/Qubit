import { NavLink } from "react-router-dom"
import Headroom from "react-headroom"

import Button from './../Button/Button'
import Link from "../Link/Link"

import qubitImg from './../../images/icons/qubit.png'

const Header = () => {
    return (
        <Headroom>
            <header className="header">
                <div className="header__inner d-flex align-items-center justify-content-between">
                    <a className="header__logo" href="#">
                        <img src={qubitImg} alt="qubit" />
                    </a>
                    <nav className="header-menu">
                        <ul className="header-menu__list d-flex align-items-center">
                            <li className="header-menu__item">
                                <Link className="header-menu__link" href="#">Why Qubit?</Link>
                            </li>
                            <li className="header-menu__item">
                                <Link className="header-menu__link" href="#">Products</Link>
                            </li>
                            <li className="header-menu__item">
                                <Link className="header-menu__link" href="#">Solutions</Link>
                            </li>
                            <li className="header-menu__item">
                                <Link className="header-menu__link" href="#">Customers</Link>
                            </li>
                            <li className="header-menu__item">
                                <Link className="header-menu__link" href="#">Case studies</Link>
                            </li>
                            <li className="header-menu__item">
                                <Link className="header-menu__link" href="#">Resources</Link>
                            </li>
                            <li className="header-menu__item">
                                <Link className="header-menu__link" href="#">More</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-btns d-flex align-items-center">
                        <Button className="header-btns__item" children="Book a demo" />
                        <NavLink to="login" className="header-btns__link">Log In</NavLink>
                    </div>
                </div>
            </header>
        </Headroom>
    )
}

export default Header