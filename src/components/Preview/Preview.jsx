import Button from './../Button/Button';

import appScreenshot from './../../images/content/app-screenshot.jpg'

const Preview = () => {
    return (
        <section className="preview">
            <div className="container">
                <div className="preview__inner">
                    <div className="preview-top">
                        <h2 className="title preview-top__title">
                            All the power. Easy to use.
                        </h2>
                        <p className="preview-top__text">
                            By collaborating with real ecommerce teams we've built the next-gen personalization tool. No code. No clunkiness.
                        </p>
                    </div>
                    <div className="preview__img">
                        <img src={appScreenshot} alt="app preview" />
                    </div>
                    <div className="preview__links d-flex align-items-center justify-content-center flex-wrap">
                        <Button className="preview-links__btn button--accent" children="See products" />
                        <Button className="preview-links__btn" children="Book a demo" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Preview;
