import InputWithBtn from './../InputWithBtn/InputWithBtn'

const Subscribe = () => {
    return (
        <section className="subscribe">
            <div className="container">
                <div className="subscribe__inner">
                    <h2 className="title subscribe__title">Book a demo today.</h2>
                    <InputWithBtn innerClass="subscribe__input-with-btn" btnClass="subscribe__btn" btnInner="Book a demo" inputClass="subscribe__input" inputPlaceholder="Enter your email" inputReq />
                </div>
            </div>
        </section>
    )
};

export default Subscribe;
