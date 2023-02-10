import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import CustomLink from "../CustomLink/CustomLink"

import barbour from './../../images/icons/barbour.png'
import dx from './../../images/icons/dx.png'
import estee from './../../images/icons/estee.png'
import gStar from './../../images/icons/g-star.png'
import kate from './../../images/icons/kate.png'
import lvmh from './../../images/icons/lvmh.png'
import radisson from './../../images/icons/radisson.png'
import river from './../../images/icons/river.png'

const Partners = () => {

    const partnersGap = '60px'

    const marqueeContentElemFirst = useRef(null)

    const marqueeContentElemSecond = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.defaults({
        scrub: 1,
        toggleActions: 'play pause resume reset'
    })

    useEffect(() => {
        if (marqueeContentElemFirst === null || marqueeContentElemSecond === null) return
        const marquees = [marqueeContentElemFirst.current, marqueeContentElemSecond.current]
        gsap.to(marquees, {
            scrollTrigger: {
                trigger: marquees,
            },
            x: '-50%'
        })
    }, [])

    return (
        <section className="partners">
            <div className="partners__inner">
                <h3 className="partners__title title">
                    Trusted by world-class brands.
                </h3>
                <div className="partners-marquee" style={{ gap: partnersGap }}>
                    <ul ref={marqueeContentElemFirst} className="partners-marquee__content" style={{ gap: partnersGap }}>
                        <Link to="#" className="partners-marquee__content-link">
                            <img src={barbour} alt="barbour" />
                        </Link>
                        <Link to="#" className="partners-marquee__content-link">
                            <img src={dx} alt="dx" />
                        </Link>
                        <Link to="#" className="partners-marquee__content-link">
                            <img src={estee} alt="estee" />
                        </Link>
                        <Link to="#" className="partners-marquee__content-link">
                            <img src={gStar} alt="gStar" />
                        </Link>
                        <Link to="#" className="partners-marquee__content-link">
                            <img src={kate} alt="kate" />
                        </Link>
                        <Link to="#" className="partners-marquee__content-link">
                            <img src={lvmh} alt="lvmh" />
                        </Link>
                        <Link to="#" className="partners-marquee__content-link">
                            <img src={radisson} alt="radisson" />
                        </Link>
                        <Link to="#" className="partners-marquee__content-link">
                            <img src={river} alt="river" />
                        </Link>
                    </ul>
                    <ul ref={marqueeContentElemSecond} className="partners-marquee__content" style={{ gap: partnersGap }} aria-hidden="true">
                        <Link to="#" className="partners-marquee__content-link">
                            <img src={barbour} alt="barbour" />
                        </Link>
                        <Link to="#" className="partners-marquee__content-link">
                            <img src={dx} alt="dx" />
                        </Link>
                        <Link to="#" className="partners-marquee__content-link">
                            <img src={estee} alt="estee" />
                        </Link>
                        <Link to="#" className="partners-marquee__content-link">
                            <img src={gStar} alt="gStar" />
                        </Link>
                        <Link to="#" className="partners-marquee__content-link">
                            <img src={kate} alt="kate" />
                        </Link>
                        <Link to="#" className="partners-marquee__content-link">
                            <img src={lvmh} alt="lvmh" />
                        </Link>
                        <Link to="#" className="partners-marquee__content-link">
                            <img src={radisson} alt="radisson" />
                        </Link>
                        <Link to="#" className="partners-marquee__content-link">
                            <img src={river} alt="river" />
                        </Link>
                    </ul>
                </div>
                <CustomLink to="#" children="Meet our customers >" />
            </div>
        </section>
    )
}

export default Partners