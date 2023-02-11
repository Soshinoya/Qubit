import { useState, useRef } from "react"
import { NavLink } from "react-router-dom"
import Headroom from "react-headroom"

import Button from './../Button/Button'

import qubitImg from './../../images/icons/qubit.png'

const Header = () => {

    const menu = (
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
    )

    const headerBtns = (
        <div className="header-btns d-flex align-items-center">
            <Button className="header-btns__item button--accent" children="Book a demo" />
            <NavLink to="login" className="header-btns__link">Log In</NavLink>
        </div>
    )

    const [contentInBurger, setContentInBurger] = useState(null)

    const hamb = useRef(null)

    const popup = useRef(null)

    const body = document.body

    const hambClickHandler = e => {
        e.preventDefault()
        hamb.current.classList.toggle("active")
        popup.current.classList.toggle("open")
        body.classList.toggle("noscroll")
        renderContentToBurger()
    }

    const renderContentToBurger = () => setContentInBurger([menu, headerBtns])


    return (
        <>
            <Headroom>
                <header className="header">
                    <div className="header__inner d-flex align-items-center justify-content-between">
                        <a className="header__logo" href="#">
                            <img src={qubitImg} alt="qubit" />
                        </a>
                        <nav className="header-menu">
                            {menu}
                        </nav>
                        {headerBtns}
                        <div ref={hamb} className="hamb" onClick={hambClickHandler}>
                            <div className="hamb__field" id="hamb">
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                            </div>
                        </div>
                    </div>
                </header>
            </Headroom>
            <div ref={popup} className="header-popup" id="header-popup">{contentInBurger?.map(el => el)}</div>
        </>
    )
}

export default Header