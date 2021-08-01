import React from 'react'

const ContactUs = () => {
    return (
        <>
            <section id="contactus" className="topSpace">
                <div className="container">
                    <form>
                        <div className="heading text-center m-3">Contact us</div>
                        <div className="form-group row mt-md-4">
                            <label for="name" className="col-sm-2 col-form-label">Who are you ?</label>
                            <div className="ml-3">
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customer" name="who" className="custom-control-input" />
                                    <label className="custom-control-label" for="customer">User</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="restaurantOwner" name="who" className="custom-control-input" />
                                    <label className="custom-control-label" for="restaurantOwner">Restaurant partner</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="career" name="who" className="custom-control-input" />
                                    <label className="custom-control-label" for="career">For career</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row mt-md-4">
                            <label for="name" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext pl-3" id="name"
                                    placeholder="Enter your Full Name" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="mail" className="col-sm-2 col-form-label">Mail</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control-plaintext pl-3" id="mail"
                                    placeholder="Enter Your Mail Address" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="number" className="col-sm-2 col-form-label">Number</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext pl-3" id="number"
                                    placeholder="Enter your Mobile Number" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="name" className="col-sm-2 col-form-label">Description</label>
                            <div className="col-sm-10">
                                <textarea className="form-control-plaintext pl-3" id="desc" rows="3"
                                    placeholder="Tell us whats in your mind....?"></textarea>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <input className="submit pl-4 pr-4" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default ContactUs;