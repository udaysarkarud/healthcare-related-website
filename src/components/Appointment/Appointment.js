import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuthContext from '../../hook/useAuthContext';
import aboutJpg from '../../images/about.jpg'
const Appointment = () => {
    const { userProfile } = useAuthContext();
    const [appointmentDetails, setAppointmentDetails] = useState({});
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setAppointmentDetails(data)
    };
    return (
        <section className="container custom-section-margin" id="about">
            <div className="row gx-lg-5">
                <div className="col-12 col-md-6">
                    <img style={{ border: "10px solid #0e1a60" }} className="img-fluid" src={aboutJpg} alt="" />
                </div>

                <div className="col-12 col-md-6">
                    <h3>Request an Appointment</h3>
                    <p className="lead">Complete the request form, and we'll reach out to you shortly to schedule your appointment.
                    </p>


                    {
                        appointmentDetails?.email ?
                            <div className="card bg-dark text-white">
                                <div className="card-body">
                                    <h5 className="card-title text-center  mb-5">Your Appointment Details</h5>
                                    <p className="card-text fs-5">
                                        <span className="fw-bold">Name: </span>
                                        {appointmentDetails.name} <br />
                                        <span className="fw-bold">Email: </span>
                                        {appointmentDetails.email} <br />
                                        <span className="fw-bold">Apointment Date: </span> {appointmentDetails.appointdate} <br />
                                        <span className="fw-bold">Subject: </span> {appointmentDetails.subject} <br />
                                        <span className="fw-bold">Details: </span> {appointmentDetails.details}
                                    </p>
                                    <div className="text-center mt-5">
                                        <button className="btn btn-outline-light">Download</button>
                                    </div>
                                </div>
                            </div>
                            :
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <div className="form-floating mb-3">


                                    <input type="text" defaultValue={userProfile.displayName} {...register("name", { required: true })} className="form-control" id="floatingInput" autoComplete="off" />
                                    {errors.name ? <label htmlFor="floatingInput">Your name is required</label> : <label htmlFor="floatingInput">Your name</label>}

                                </div>

                                <div className="form-floating mb-3">
                                    <input type="email" defaultValue={userProfile.email} {...register("email", { required: true })} className="form-control" id="floatingInput" autoComplete="off" />
                                    {errors.email ? <label htmlFor="floatingInput">Your email is required</label> : <label htmlFor="floatingInput">Your email</label>}


                                </div>

                                <div className="row g-2  mb-3">
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input type="text" {...register("subject", { required: true })} className="form-control" id="floatingInput" autoComplete="off" />
                                            {errors.subject ? <label htmlFor="floatingInput"><span className="text-danger">Your Problem Subject</span></label> : <label htmlFor="floatingInput">Problem Subject</label>}
                                        </div>
                                    </div>

                                    <div className="col-md">
                                        <div className="form-floating">
                                            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example" {...register("appointdate", { required: true })}>
                                                <option value="15/11/2021">08/11/2021</option>
                                                <option value="16/11/2021">08/11/2021</option>
                                                <option value="17/11/2021">08/11/2021</option>
                                                <option value="18/11/2021">08/11/2021</option>
                                                <option value="19/11/2021">08/11/2021</option>
                                                <option value="20/11/2021">08/11/2021</option>
                                                <option value="21/11/2021">08/11/2021</option>
                                                <option value="22/11/2021">08/11/2021</option>
                                                <option value="23/11/2021">08/11/2021</option>
                                                <option value="24/11/2021">08/11/2021</option>
                                                <option value="25/11/2021">08/11/2021</option>
                                                <option value="26/11/2021">08/11/2021</option>
                                            </select>
                                            {errors.date ? <label htmlFor="floatingSelectGrid">Your email is required</label> : <label htmlFor="floatingSelectGrid">Your email</label>}
                                        </div>
                                    </div>
                                </div>

                                <div className="form-floating mb-3">


                                    <textarea type="text" {...register("details", { required: true })} className="form-control" id="floatingTextarea2"></textarea>



                                    {errors.details ? <label htmlFor="floatingInput"><span className="text-danger">Write Problem details</span></label> : <label htmlFor="floatingInput">Problem details</label>}
                                </div>


                                <div className="">
                                    <button className="btn btn-lg btn-outline-secondary custom-btn-reverse" type="submit">Take Appointment</button>
                                </div>
                            </form>
                    }
                </div>
            </div>
        </section>
    );
};

export default Appointment;