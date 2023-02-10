import { NavLink } from "react-router-dom"
import Headroom from "react-headroom"

import Button from './../Button/Button'

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
                                <a className="header-menu__link" href="#">Why Qubit?</a>
                            </li>
                            <li className="header-menu__item">
                                <a className="header-menu__link" href="#">Products</a>
                            </li>
                            <li className="header-menu__item">
                                <a className="header-menu__link" href="#">Solutions</a>
                            </li>
                            <li className="header-menu__item">
                                <a className="header-menu__link" href="#">Customers</a>
                            </li>
                            <li className="header-menu__item">
                                <a className="header-menu__link" href="#">Case studies</a>
                            </li>
                            <li className="header-menu__item">
                                <a className="header-menu__link" href="#">Resources</a>
                            </li>
                            <li className="header-menu__item">
                                <a className="header-menu__link" href="#">More</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-btns d-flex align-items-center">
                        <Button className="header-btns__item button--accent" children="Book a demo" />
                        <NavLink to="login" className="header-btns__link">Log In</NavLink>
                    </div>
                </div>
            </header>
        </Headroom>
    )
}

export default Header