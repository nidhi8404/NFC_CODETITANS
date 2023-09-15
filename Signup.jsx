import { faFacebook, faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import './Login.css';


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { handleFacebookSignIN, signInWithGithub } = useAuth();

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // const githubProvider = new GithubAuthProvider();

    const singnInWithGoogleHeander = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            // setUser(result.user);
            console.log(result.user);
            navigate('/approved')
        })
        .catch(error => {
            // setError(error.message);
            console.log(error)
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then(resutlt => {
            const user = resutlt.user
            console.log(user);
        })
        navigate("/approved");
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    return (
        <>
            <section className="h-100 gradient-form pb-5">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">
                                            <div className="text-center">
                                            <img src="https://static.vecteezy.com/system/resources/previews/019/813/073/original/modern-medical-and-health-care-center-ayurvedic-logo-design-illustration-free-vector.jpg" className="card-img" alt="logo" />
                                                <h4 className="mt-1 mb-5 pb-1">Sattva</h4>
                                            </div>
                                            <p className="d-flex justify-content-start">Please Sign Up</p>
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-outline mb-4">
                                                    <input onBlur={handlePasswordChange} type="name" id="form2Example22" placeholder="Name" className="form-control" required />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input onBlur={handleEmailChange} type="email" id="form2Example11" className="form-control"
                                                        placeholder="Email Address" required />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input onBlur={handlePasswordChange} type="password" id="form2Example22" placeholder="Password" className="form-control" required />
                                                </div>

                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <button className="theme-btn btn-fill green-btn" type="submit">Sign Up</button>
                                                   
                                                </div>

                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">Already a member?</p>
                                                    
                                                    <button type="button" className="btn btn-outline-danger green-btn">Login</button>
                                                </div>

                                            </form>

                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 className="mb-4">"Discover Ayurveda: Nature's Path to Health and Wellness."</h4>
                                            <p className="small mb-0">"Experience Ayurveda's Timeless Healing: Elevating Health, Harmony, and Happiness Naturally.
                                             Embrace Nature's Wisdom, Nurture Your Well-being, and Rediscover Your Vitality with Ayurvedic Solutions."</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row my-5">
                                    <div className="col-12">
                                        <div className="text-center">
                                            <h4>or sign up with:</h4>
                                            <div className="doctors-social">
                                                <button className="loginbtn" onClick={singnInWithGoogleHeander}><FontAwesomeIcon icon={faGoogle} /></button>
                                                <button className="loginbtn" onClick={signInWithGithub}><FontAwesomeIcon icon={faGithub} /></button>
                                                <button className="loginbtn" onClick={handleFacebookSignIN}><FontAwesomeIcon icon={faFacebook} /></button>
                                                <button className="loginbtn"><FontAwesomeIcon icon={faTwitter} /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;