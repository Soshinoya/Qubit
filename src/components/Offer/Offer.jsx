import InputWithBtn from './../InputWithBtn/InputWithBtn.jsx'

const Offer = () => {
    return (
        <section className="offer">
            <div className="container">
                <div className="offer__inner">
                    <div className="offer-info">
                        <p className="offer-info__subtitle">
                            Driving growth with personalization.
                        </p>
                        <h1 className="offer-info__title title">
                            Make ecommerce
                            <br />
                            <span>
                                More personal.
                            </span>
                        </h1>
                        <p className="offer-info__text">
                            Hundreds of brands use <span>Qubit CommerceAI</span>  to power the next generation of product recommendations, badging and insights to build exceptional customer experiences.
                        </p>
                        <InputWithBtn inputPlaceholder="Enter your email" inputReq btnInner="Book a demo" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer