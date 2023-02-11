import Button from './../Button/Button';
import ecosystemImg from './../../images/content/ecosystem.png'

const Ecosystem = () => {
    return (
        <section className="ecosystem">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="ecosystem-content">
                            <h2 className="title ecosystem-content__title">
                                A connected ecosystem.
                            </h2>
                            <p className="ecosystem-content__text">
                                The Qubit personalization platform is designed with enterprise and high-growth businesses in mind.
                                Our open ecosystem approach means you can connect any data source and deliver personalization across any channel.
                            </p>
                            <Button className="ecosystem-content__btn button--accent" children="See our integrations" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ecosystem__img">
                            <img src={ecosystemImg} alt="ecosystem" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Ecosystem;
