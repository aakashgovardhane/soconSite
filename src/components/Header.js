import React from 'react'
import { useHistory } from "react-router-dom";

export const Header = () => {
    const history = useHistory();
    return <>
        <div className="navbar navbar-fixed-top">
            <a className="navbar-brand" onClick={()=>history.push('/')}>
                <img className="img-responsive" src="./assets/images/soconlogo.png" width="68" height="62" alt="" loading="lazy" />
            </a>
        </div>
        <div className="row menu justify-content-center mt-3 mb-3">
            <div className="col-6 text-center">
                <span><a href="#home" onClick={() => history.push(`/`)}>About us</a></span>
            </div>
            <div className="col-6 text-center">
                <span> <a href="#partner" onClick={() => history.push(`/#partner`)}>Our partners</a></span>
            </div>
        </div>
    </>
}