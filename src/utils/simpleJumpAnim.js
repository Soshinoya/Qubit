import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const simpleJumpAnim = (inner, selectorArr) => {

    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.defaults({
        toggleActions: 'play pause resume reset',
    })

    const gsapSelector = gsap.utils.selector(inner)

    const animEase = "back.out(4)"

    const animOffsetY = 100

    const animDuration = .7

    selectorArr.forEach((e, i) => {
        gsap.to(gsapSelector(e), {
            scrollTrigger: e,
            keyframes: {
                "0%": { y: `${animOffsetY}px`, opacity: 0, ease: animEase },
                "100%": { y: '0', opacity: 1, ease: animEase }
            },
            duration: animDuration + (i * .3),
        })
    })
}

export default simpleJumpAnim;
