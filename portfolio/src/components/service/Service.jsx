import React, { useState } from 'react'
import "./service.css"

const Service = () => {
    const [toggle, setToggle] = useState(0)

    const toggleTab = (index) => {
        setToggle(index);
    }
    return (
        <section className="service section" id="service">
            <h2 className='section__title'>Services</h2>
            <span className="section__subtitle">What i can supply</span>

            <div className="service__container container grid">
                <div className="service__content">
                    <div>
                        <i className="uil uil-web-grid service__icon"></i>
                        <h3 className="service title">Product <br></br> Designer</h3>
                    </div>

                    <span className="service__button" onClick={() => toggleTab(1)}>View More
                        <i className="uil uil-arrow-right service__button-icon"></i>
                    </span>

                    <div className={toggle === 1 ? "service__modal active-modal" : "service__modal"}>
                        <div className="service__modal-content">
                            <i className="uil uil-times service__modal-close" onClick={() => setToggle(0)}></i>

                            <h3 className="service__modal-title">Product Designer</h3>
                            <p className="service__modal-description">Temp description</p>

                            <ul className="service__modal-services grid">
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle service__modal-icon"></i>
                                    <p className="service__modal-infor">I develop the user interface</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle service__modal-icon"></i>
                                    <p className="service__modal-infor">Web page development</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle service__modal-icon"></i>
                                    <p className="service__modal-infor">I create UX element interaction</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle service__modal-icon"></i>
                                    <p className="service__modal-infor">Design and mockups of products for school projects</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="service__content">
                    <div>
                        <i class="uil uil-arrow service__icon"></i>
                        <h3 className="service title">UI/UX <br></br> Designer</h3>
                    </div>

                    <span className="service__button" onClick={() => toggleTab(2)}>View More
                        <i className="uil uil-arrow-right service__button-icon"></i>
                    </span>

                    <div className={toggle === 2 ? "service__modal active-modal" : "service__modal"}>
                        <div className="service__modal-content">
                            <i className="uil uil-times service__modal-close" onClick={() => setToggle(0)}></i>

                            <h3 className="service__modal-title">UI/UX Designer</h3>
                            <p className="service__modal-description">Temp description</p>

                            <ul className="service__modal-services grid">
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle service__modal-icon"></i>
                                    <p className="service__modal-infor">I develop the user interface</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle service__modal-icon"></i>
                                    <p className="service__modal-infor">Web page development</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle service__modal-icon"></i>
                                    <p className="service__modal-infor">I create UX element interaction</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle service__modal-icon"></i>
                                    <p className="service__modal-infor">Design and mockups of products for school projects</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="service__content">
                    <div>
                        <i class="uil uil-edit service__icon"></i>
                        <h3 className="service title">Visual <br></br> Designer</h3>
                    </div>

                    <span className="service__button" onClick={() => toggleTab(3)}>View More
                        <i className="uil uil-arrow-right service__button-icon"></i>
                    </span>

                    <div className={toggle === 3 ? "service__modal active-modal" : "service__modal"}>
                        <div className="service__modal-content">
                            <i className="uil uil-times service__modal-close" onClick={() => setToggle(0)}></i>

                            <h3 className="service__modal-title">Visual Designer</h3>
                            <p className="service__modal-description">Temp description</p>

                            <ul className="service__modal-services grid">
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle service__modal-icon"></i>
                                    <p className="service__modal-infor">I develop the user interface</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle service__modal-icon"></i>
                                    <p className="service__modal-infor">Web page development</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle service__modal-icon"></i>
                                    <p className="service__modal-infor">I create UX element interaction</p>
                                </li>
                                <li className="service__modal-service">
                                    <i className="uil uil-check-circle service__modal-icon"></i>
                                    <p className="service__modal-infor">Design and mockups of products for school projects</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    )
}

export default Service