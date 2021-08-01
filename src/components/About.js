import React from 'react'
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

export const About = (props) => {
    useEffect(() => {
        Aos.init({});
    }, [])
    return <section className="container" id="home" >
        <div className="d-flex flex-column text-center">
            <div className="mobileApp">
                <img src="./assets/images/mobileApp.png" width="230px" alt="" data-aos="zoom-out"
                    data-aos-duration="2000" />
                <div data-aos="zoom-in" data-aos-duration="2000">
                    <div className="desc p-2">
                        <span>A social food platform made for friends!</span>
                    </div>
                    <div
                        className="d-flex flex-md-row flex-column text-center align-items-center justify-content-center p-2 download-buttons">
                        <a href="https://main.d3fhjqmi2ce99d.amplifyapp.com/">
                            <div className="d-flex align-items-center m-1 button justify-content-center">
                                <img src="./assets/images/android.png" className="m-1" width="25px" className="img-fluid"
                                    alt="Android" />
                                <span className="p-2">Download Now</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="screen d-flex align-items-center">
            <div className="queue row align-items-center justify-content-center">
                <div className="left-side col-md-5 col-12 p-4 pt-4 text-center" data-aos="fade-right"
                    data-aos-duration="2000">
                    <span>Skip the queue for takeaways</span>
                </div>
                <div className="right-side col-md-6 col-12" data-aos="fade-left" data-aos-duration="2000">
                    <img className="img-fluid p-md-0 p-4" src="./assets/images/queue.jpg" alt="" srcset="" />
                </div>
            </div>
        </div>
        <div className="screen d-flex align-items-center">
            <div className="reward row align-items-center justify-content-center">
                <div className="left-side col-md-5 col-12 p-4 pt-4 text-center" data-aos="fade-up" data-aos-duration="2000"
                    data-aos-anchor-placement="bottom-bottom">
                    <span>Get rewarded <br /> and <br /> pass it on</span>
                </div>
                <div className="right-side col-md-6 col-12" data-aos="fade-up" data-aos-duration="2000"
                    data-aos-anchor-placement="bottom-bottom">
                    <img className="img-fluid p-md-0 p-4" src="./assets/images/reward.jpg" alt="" srcset="" />
                </div>
            </div>
        </div>
        <div className="screen d-flex align-items-center">
            <div className="spread row align-items-center justify-content-center">
                <div className="left-side col-md-5 col-12 p-4 pt-4 text-center" data-aos="zoom-in-right"
                    data-aos-duration="2000">
                    <span>Spread the love <br /> through food</span>
                </div>
                <div className="right-side col-md-6 col-12" data-aos="zoom-in-left" data-aos-duration="2000">
                    <img className="img-fluid p-md-0 p-4" src="./assets/images/spread.jpg" alt="" srcset="" />
                </div>
            </div>
        </div>
    </section>
}
