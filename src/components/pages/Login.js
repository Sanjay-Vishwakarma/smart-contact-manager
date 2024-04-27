import React from 'react';

import '../../styles/login.css'
const Login = () => {
    return (
        <div className="login-container">
            <form>
                <div className="mb-3 row">
                    <label htmlFor="inputUsername" className="col-sm-4 col-form-label">
                        Username
                    </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputUsername" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                        Password
                    </label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
