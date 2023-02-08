import { Link } from 'react-router-dom'

import qubitImg from './../../images/icons/qubit-white.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner d-flex flex-column">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="footer-col">
                                <h4 className="footer-col__title title">
                                    Featured Capabilities
                                </h4>
                                <ul className="footer-col__links">
                                    <li className="footer-col__links-item">
                                        <Link to='#'>
                                            A/B testing
                                        </Link>
                                    </li>
                                    <li className="footer-col__links-item">
                                        <Link to='#'>
                                            Abandonment recovery
                                        </Link>
                                    </li>
                                    <li className="footer-col__links-item">
                                        <Link to='#'>
                                            Customer insights
                                        </Link>
                                    </li>
                                    <li className="footer-col__links-item">
                                        <Link to='#'>
                                            Customer polling and feedback
                                        </Link>
                                    </li>
                                    <li className="footer-col__links-item">
                                        <Link to='#'>
                                            Customer segmentation
                                        </Link>
                                    </li>
                                    <li className="footer-col__links-item">
                                        <Link to='#'>
                                            Data collection
                                        </Link>
                                    </li>
                                    <li className="footer-col__links-item">
                                        <Link to='#'>
                                            Ecommerce merchandising
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-col">
                                <h4 className="footer-col__title title">
                                    Company
                                </h4>
                                <ul className="footer-col__links">
                                    <li className="footer-col__links-item">
                                        <Link to='#'>
                                            Custom machine learning
                                        </Link>
                                    </li>
                                    <li className="footer-col__links-item">
                                        <Link to='#'>
                                            Journey Personalization
                                        </Link>
                                    </li>
                                    <li className="footer-col__links-item">
                                        <Link to='#'>
                                            Mobile app personalization
                                        </Link>
                                    </li>
                                    <li className="footer-col__links-item">
                                        <Link to='#'>
                                            Cross-channel personalization
                                        </Link>
                                    </li>
                                    <li className="footer-col__links-item">
                                        <Link to='#'>
                                            Social proofing
                                        </Link>
                                    </li>
                                    <li className="footer-col__links-item">
                                        <Link to='#'>
                                            Website personalization
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-col">
                                <h4 className="footer-col__title title">
                                    Products
                                </h4>
                                <ul className="footer-col__links">
                                    <li className="footer-col__links-item">
                                        <Link to='#'>
                                            1:1 Product recommendations
                                        </Link>
                                    </li>
                                    <li className="footer-col__links-item">
                                        <Link to='#'>
                                            1:1 Product badging
                                        </Link>
                                    </li>
                                    <li className="footer-col__links-item">
                                        <Link to='#'>
                                            1:1 Journey personalization
                                        </Link>
                                    </li>
                                    <li className="footer-col__links-item">
                                        <Link to='#'>
                                            Personalized content
                                        </Link>
                                    </li>
                                    <li className="footer-col__links-item">
                                        <Link to='#'>
                                            Product insights
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-col">
                                <h4 className="footer-col__title title">
                                    Resources
                                </h4>
                                <ul className="footer-col__links">
                                    <li className="footer-col__links-item">
                                        <Link to='#'>
                                            Resources
                                        </Link>
                                    </li>
                                    <li className="footer-col__links-item">
                                        <Link to='#'>
                                            Customers
                                        </Link>
                                    </li>
                                    <li className="footer-col__links-item">
                                        <Link to='#'>
                                            Qubit Blog.
                                        </Link>
                                    </li>
                                    <li className="footer-col__links-item">
                                        <Link to='#'>
                                            Glossary
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-col">
                                <h4 className="footer-col__title title">
                                    Company
                                </h4>
                                <ul className="footer-col__links">
                                    <li className="footer-col__links-item">
                                        <Link to='#'>
                                            Why Qubit?
                                        </Link>
                                    </li>
                                    <li className="footer-col__links-item">
                                        <Link to='#'>
                                            About us
                                        </Link>
                                    </li>
                                    <li className="footer-col__links-item">
                                        <Link to='#'>
                                            Careers
                                        </Link>
                                    </li>
                                    <li className="footer-col__links-item">
                                        <Link to='#'>
                                            Press
                                        </Link>
                                    </li>
                                    <li className="footer-col__links-item">
                                        <Link to='#'>
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-col">
                                <h4 className="footer-col__title title">
                                    Working with us
                                </h4>
                                <ul className="footer-col__links">
                                    <li className="footer-col__links-item">
                                        <Link to='#'>
                                            Legal
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="footer-bottom d-flex flex-column align-items-center">
                                <a className="footer-bottom__logo header__logo" href="#">
                                    <img src={qubitImg} alt="qubit" />
                                </a>
                                <p className="footer-bottom__text">
                                    © 2021 Qubit. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer