import React from 'react'
import { useHistory } from "react-router-dom";

export const OurPartner = () => {
    const history = useHistory();
    return (
        <>
            <section id="partner">
                <div className="partner">
                    <div className="star-right">
                        <img className="img-fluid" src="./assets/designs/starr.png" />
                    </div>
                    <div className="content text-center">
                        <div className="p-2 heading">Be our Partner</div>
                        <div className="p-2 description">Marketing rocket<br />
                            <span style={{color: "#5EE211"}}>fuel</span> to your <br />
                            <span style={{color: "#188DFB"}}>restaurant</span>
                        </div>
                        <div
                            className="d-flex flex-column text-center align-items-center justify-content-center p-2 download-buttons">
                            <a href="">
                                <div className="buttons contact-btn m-2 justify-content-center p-2 pl-4 pr-4" onClick={()=>history.push('/ContactUs')}>
                                    Contact us
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="star-left">
                        <img className="img-fluid" src="./assets/designs/starl.png" />
                    </div>
                </div>
                <div className="screen d-flex align-items-center">
                    <div className="spread row align-items-center justify-content-center">
                        <div className="left-side col-md-5 col-12 p-4 pt-4 text-center">
                            <span>WE DON'T DELIVER FOOD <br /> <br />WE GET YOU NEW WORD OF MOUTH CUSTOMERS 🧚‍♀️<br /> <br />YOU
                                OWN THE CONTROL 😎</span>
                        </div>
                        <div className="right-side col-md-6 col-12">
                            <img className="img-fluid p-md-0 p-4" src="./assets/images/own.jpg" alt="" srcset="" />
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="p-2 heading text-center mb-md-4">To your loyal customers</div>
                    <div className="row align-items-center justify-content-md-center">
                        <div className="col-md-3 col-12 row justify-content-center mr-md-4 ml-md-4">
                            <img className="img-fluid ml-4" src="./assets/images/reward2.jpg " alt="" srcset="" />
                            <br />
                            <div className="heading text-center p-2">reward</div>
                        </div>
                        <div className="col-md-3 col-12 row justify-content-center mr-md-4 ml-md-4">
                            <img className="img-fluid" src="./assets/images/engage.png" alt="" srcset="" />
                            <br />
                            <div className="heading text-center p-2">Engage</div>
                        </div>
                        <div className="col-md-3 col-12 row justify-content-center mr-md-4 ml-md-4">
                            <img className="img-fluid p-5" src="./assets/images/smiley.png" alt="" srcset="" />
                            <br />
                            <div className="heading text-center p-md-2 mt-md-5">Repeat</div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center font-weight-bold mt-5">
                    <div className="package col-md-2 col-10">
                        <div className="p-heading text-center mt-4">
                            <div>PACKAGE</div>
                            <div>1 Month free</div>
                        </div>
                        <div className="container m-4 pb-2">
                            <div>&#10003; Worth of mouth</div>
                            <div>&#10003; Repeat customer</div>
                            <div>&#10003; Increase a profit</div>
                            <div>&#10003; Loyalty program</div>
                            <div>&#10003; Auto upsell</div>
                        </div>
                    </div>
                </div>
                <div className="container text-center heading mt-4 mb-4">Be the part of new wave</div>
                <div
                    className="d-flex flex-column text-center align-items-center justify-content-center p-2 download-buttons mb-md-4">

                    <a href="">
                        <div className="buttons join-btn m-2 justify-content-center p-2 pl-4 pr-4" onClick={()=>history.push('/ContactUs')}>
                            Join us now
                        </div>
                    </a>
                </div>
            </section>
        </>
    )
}
