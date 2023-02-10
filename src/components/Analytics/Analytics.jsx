import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Button from './../Button/Button';
import CustomLink from './../CustomLink/CustomLink'

const Analytics = () => {

    const analyticsGap = '120px'

    const analyticsInfo = useRef(null)

    const analyticsInfoInnerFirst = useRef(null)

    const analyticsInfoInnerSecond = useRef(null)

    const analyticsInfoFirst = useRef(null)

    const analyticsInfoFirstClone = useRef(null)

    const analyticsInfoSecond = useRef(null)

    const analyticsInfoSecondClone = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.defaults({
        toggleActions: 'play pause resume reset'
    })

    useEffect(() => {
        if (analyticsInfo === null || analyticsInfoFirst === null || analyticsInfoFirstClone === null || analyticsInfoSecond === null || analyticsInfoSecondClone === null || analyticsInfoInnerFirst === null || analyticsInfoInnerSecond === null) return

        const yTransform = 100

        const analyticsInfoFirstHeight = analyticsInfoFirst.current.offsetHeight

        analyticsInfo.current.style.maxHeight = analyticsInfoFirstHeight + 'px'

        const marqueesFirst = [analyticsInfoFirst.current, analyticsInfoFirstClone.current]
        const marqueesSecond = [analyticsInfoSecond.current, analyticsInfoSecondClone.current]

        gsap.to(marqueesFirst, {
            scrollTrigger: {
                trigger: marqueesFirst,
                start: `${analyticsInfoFirstHeight} bottom`,
                end: `${analyticsInfoFirstHeight + analyticsInfoFirstHeight} top`,
                scrub: 1,
            },
            keyframes: {
                "0%": { y: `-${analyticsInfoFirstHeight + yTransform}px`},
                "100%": { y: `0`}
            }
        })

        gsap.to(marqueesSecond, {
            scrollTrigger: {
                trigger: marqueesSecond,
                scrub: 1,
            },
            y: `-${yTransform}%`
        })
    }, [])

    return (
        <section className="analytics">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="analytics-content d-flex flex-column">
                            <h2 className="title analytics-content__title">
                                Grow 2.5x faster than your competitors.
                            </h2>
                            <div className="analytics-content__links d-flex align-items-center flex-wrap">
                                <Button className="analytics-content__btn" children="Book a demo" />
                                <CustomLink className="analytics-content__link custom-link--stripe-right" to="#" children="Meet our customers >" />
                            </div>
                            <div className="analytics-content__texts">
                                <p className="analytics-content__desc">
                                    *PwC audited methodology.
                                </p>
                                <a className="analytics-content__more" href="#">
                                    Read the report
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 overflow-hidden">
                        <div ref={analyticsInfo} className="analytics-info">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div ref={analyticsInfoInnerFirst} className="analytics-info__inner d-flex flex-column" style={{ gap: analyticsGap }}>
                                        <ul ref={analyticsInfoFirst} className="analytics-info__list d-flex flex-column" style={{ gap: analyticsGap }}>
                                            <li className="analytics-info__item">
                                                <h2 className="title analytics-info__item-title">140%</h2>
                                                <p className="analytics-info__item-desc">
                                                    Qubit's top customers annual growth rate.
                                                </p>
                                            </li>
                                            <li className="analytics-info__item">
                                                <h2 className="title analytics-info__item-title">$20bn</h2>
                                                <p className="analytics-info__item-desc">
                                                    Online sales generated by our customers in 2020.
                                                </p>
                                            </li>
                                            <li className="analytics-info__item">
                                                <h2 className="title analytics-info__item-title">364</h2>
                                                <p className="analytics-info__item-desc">
                                                    Ecommerce stores are growing faster with Qubit.
                                                </p>
                                            </li>
                                        </ul>
                                        <ul ref={analyticsInfoFirstClone} className="analytics-info__list d-flex flex-column" aria-hidden="true" style={{ gap: analyticsGap }}>
                                            <li className="analytics-info__item">
                                                <h2 className="title analytics-info__item-title">140%</h2>
                                                <p className="analytics-info__item-desc">
                                                    Qubit's top customers annual growth rate.
                                                </p>
                                            </li>
                                            <li className="analytics-info__item">
                                                <h2 className="title analytics-info__item-title">$20bn</h2>
                                                <p className="analytics-info__item-desc">
                                                    Online sales generated by our customers in 2020.
                                                </p>
                                            </li>
                                            <li className="analytics-info__item">
                                                <h2 className="title analytics-info__item-title">364</h2>
                                                <p className="analytics-info__item-desc">
                                                    Ecommerce stores are growing faster with Qubit.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div ref={analyticsInfoInnerSecond} className="analytics-info__inner d-flex flex-column" style={{ gap: analyticsGap }}>
                                        <ul ref={analyticsInfoSecond} className="analytics-info__list d-flex flex-column" style={{ gap: analyticsGap }}>
                                            <li className="analytics-info__item">
                                                <h2 className="title analytics-info__item-title">9.5m</h2>
                                                <p className="analytics-info__item-desc">
                                                    Personalized experiences delivered every hour.
                                                </p>
                                            </li>
                                            <li className="analytics-info__item">
                                                <h2 className="title analytics-info__item-title">4.4m</h2>
                                                <p className="analytics-info__item-desc">
                                                    Shoppers influenced by Qubit every day.
                                                </p>
                                            </li>
                                            <li className="analytics-info__item">
                                                <h2 className="title analytics-info__item-title">$1.6bn</h2>
                                                <p className="analytics-info__item-desc">
                                                    Incremental revenue generated by our customers in 2020.*
                                                </p>
                                            </li>
                                        </ul>
                                        <ul ref={analyticsInfoSecondClone} className="analytics-info__list d-flex flex-column" aria-hidden="true" style={{ gap: analyticsGap }}>
                                            <li className="analytics-info__item">
                                                <h2 className="title analytics-info__item-title">9.5m</h2>
                                                <p className="analytics-info__item-desc">
                                                    Personalized experiences delivered every hour.
                                                </p>
                                            </li>
                                            <li className="analytics-info__item">
                                                <h2 className="title analytics-info__item-title">4.4m</h2>
                                                <p className="analytics-info__item-desc">
                                                    Shoppers influenced by Qubit every day.
                                                </p>
                                            </li>
                                            <li className="analytics-info__item">
                                                <h2 className="title analytics-info__item-title">$1.6bn</h2>
                                                <p className="analytics-info__item-desc">
                                                    Incremental revenue generated by our customers in 2020.*
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Analytics;