import React from 'react'
import { useHistory } from "react-router-dom";

const Footer = () => {
    const history = useHistory();
    return (
        <>
            <hr />
            <section id="footer">
                <div className="row justify-content-center">
                    <div className="col-md-5 text-center">
                        <div className="p-2" onClick={() => history.push('/contactUs')}>
                            <a>
                                Career
                            </a>
                        </div>
                        <div className="p-2" onClick={() => history.push('/contactUs')}>
                            <a>
                                Contact us
                            </a>
                        </div>
                        <div className="p-2" onClick={() => history.push('/t&c')}>
                            <a>
                                Terms & Conditions
                            </a>
                        </div>
                        <div className="p-2" onClick={() => history.push('/privacyPolicy')}>
                            <a>
                                Privacy policy
                            </a>
                        </div>
                    </div>
                    <div className="vl"></div>
                    <div className="col-md-5">
                        <div className="social d-flex text-center align-items-center justify-content-center p-2">
                            <a href="https://www.instagram.com/menucart.in/?hl=en" target="_blank">
                                <img src="./assets/socialIcon/insta.png" alt="" srcset="" />
                            </a>
                            <a href="https://www.facebook.com/menucart.in/?hc_ref=ARTJUQ-UY6KRUEyhFyfz6CcNkmle_pSzPI8M1Rj_hL3bYIbsEhZ11TX1ZLa1e2RlCwk&fref=nf&__tn__=kC-R" target="_blank">
                                <img src="./assets/socialIcon/fb.png" alt="" srcset="" />
                            </a>
                            <a href="https://www.linkedin.com/company/menucart" target="_blank">
                                <img src="./assets/socialIcon/li.png" alt="" srcset="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
