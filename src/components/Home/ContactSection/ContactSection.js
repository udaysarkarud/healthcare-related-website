import React from 'react';

const ContactSection = () => {
    return (
        <section className="contact-section bg-overlay" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-col">
                            <h4>Make An Appointment</h4>
                            <h3>Get Free Consultation</h3>
                        </div>

                        <form>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Name" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Email" />
                                    </div>
                                </div>


                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Subject" />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea className="form-control" placeholder="Message"></textarea>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="submit" value="Submit" className="btn btn-light btn-lg" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;