import React from 'react';
import abc from '../../../images/neurology-icon.png'

const ServicesSection = () => {
    return (
        <section className="services-section py-5" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-12 my-5">
                        <h2 className="section-title text-center">Services</h2>
                    </div>
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <img src={abc} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Neurology</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in
                                    to additional content.This content is a little bit longer.</p>
                                <div className="text-center">
                                    <a href="#" className="btn btn-outline-primary custom-btn">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src={abc} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Eyes care</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in
                                    to additional content.This content is a little bit longer.</p>
                                <div className="text-center">
                                    <a href="#" className="btn btn-outline-primary custom-btn">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src={abc} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Pulomonary</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in
                                    to additional content.</p>
                                <div className="text-center">
                                    <a href="#" className="btn btn-outline-primary custom-btn">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src={abc} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Cardiology</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in
                                    to additional content.This content is a little bit longer.</p>
                                <div className="text-center">
                                    <a href="#" className="btn btn-outline-primary custom-btn">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src={abc} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dental Care</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in
                                    to additional content.This content is a little bit longer.</p>
                                <div className="text-center">
                                    <a href="#" className="btn btn-outline-primary custom-btn">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src={abc} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Hepatology</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in
                                    to additional content.This content is a little bit longer.</p>
                                <div className="text-center">
                                    <a href="#" className="btn btn-outline-primary custom-btn">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServicesSection;