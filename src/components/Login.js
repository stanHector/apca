import React, { useState } from "react";

import img from '../assets/logo.jpg'
import '../App.css'


const App = (props) => {

    return (
        <div className="container" style={{ marginTop: "15px", padding: "50px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card my-5">
                        <form className="card-body cardbody-color p-lg-5">
                                <div className="text-center">
                                    <img src={img} className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                                        width="100px" alt="profile" />
                                </div>

                                <div className="mb-3">
                                    <input type="text" className="form-control" id="username" aria-describedby="emailHelp"
                                        placeholder="Username" />
                                </div>
                                <div className="mb-3">
                                    <input type="Password" className="form-control" id="password" placeholder="Password" />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-color" style={{backgroundColor:"#77457F", fontWeight:"bold", color:"white", height:"50px"}}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;