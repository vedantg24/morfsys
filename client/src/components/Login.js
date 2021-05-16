import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/userActions";
import { useHistory } from "react-router-dom";

import Toast from "react-bootstrap/Toast";

const Login = ({ login, error, isAuthenticated }) => {
    let history = useHistory()
    useEffect(() => {
        if (isAuthenticated) {
            history.push('/dashboard');
        }

        // eslint-disable-next-line
    }, [isAuthenticated]);

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [show, setShow] = useState(false);

    const { email, password } = user;

    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(error);

        if (error === "Invalid Credentials") {
            return (
                <div>
                    {<Toast show={show} onClose={() => setShow(false)} delay={3000} autohide>
                        <Toast.Header>
                            <strong className="mr-auto">Error</strong>
                        </Toast.Header>
                        <Toast.Body>Invalid Credentials</Toast.Body>
                    </Toast>}
                </div>
            )
        }

        login({
            email,
            password,
        });
    };

    return (
        <div className="box">
            <div className="header">
                <img className="logo" src="/logo.svg" />
            </div>
            <form className="form" onSubmit={onSubmit}>
                <div className="form-register">
                    <div className="form-title">Welcome to Globilti</div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label><br />
                        <input type="email" id="email" name="email" value={email} onChange={onChange} required className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={onChange} required className="form-control" />
                    </div>
                    <input type="submit" value="Login" className="form-btn" />

                </div>
                <img className="form-img" src="/form-img.svg" alt="" width="509px" height="425px" />
                <img className="group204" src="Group_204.svg" alt="" width=" 296px" height="252px" />
            </form>
            <img className="group202" src="Group_202.svg" alt="" width=" 96px" height=" 80px" />
        </div>
    )
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.user.isAuthenticated,
    error: state.user.error,
});

export default connect(mapStateToProps, { login })(Login);
