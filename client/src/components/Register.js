import React from 'react';

const Register = () => {

    return (
        <div className="box">
            <div className="header">
                <img className="logo" src="/logo.svg" />
                <span className="logo-text">Create school account</span>
            </div>
            <div className="form">
                <div className="form-register">
                    <div className="form-title">Welcome to Globilti</div>
                    <div className="form-text">Create your school account</div>
                    <div className="form-group">
                        <label htmlFor="name">What's your full name?</label><br />
                        <input type="text" id="name" className="form-control" />
                    </div>
                    <div className="form-group" >
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" id="password" className="form-control" minLength="8" />
                        <span className="form-pwd">Password must be 8 characters or longer.</span>
                    </div>
                    <button type="submit" className="form-btn">Create Account</button>

                </div>
                <img className="form-img" src="/form-img.svg" alt="" width="509px" height="425px" />
                <img className="group204" src="Group_204.svg" alt="" width=" 296px" height="252px" />
            </div>
            <img className="group202" src="Group_202.svg" alt="" width=" 96px" height=" 80px" />
        </div>
    )
}

export default Register

