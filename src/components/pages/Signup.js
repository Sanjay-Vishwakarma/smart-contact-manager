import React from 'react';

import '../../styles/signup.css';

export default function Signup () {
    return (
        <div className="signup-container">
            <form>
                <div className="mb-3 row">
                    <label htmlFor="inputFirstName" className="col-sm-2 col-form-label">
                        First Name
                    </label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" id="inputFirstName" />
                    </div>

                    <label htmlFor="inputLastName" className="col-sm-2 col-form-label">
                        Last Name
                    </label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" id="inputLastName" />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
                        Email
                    </label>
                    <div className="col-sm-4">
                        <input type="email" className="form-control" id="inputEmail" />
                    </div>

                    <label htmlFor="inputPhone" className="col-sm-2 col-form-label">
                        Phone
                    </label>
                    <div className="col-sm-4">
                        <input type="tel" className="form-control" id="inputPhone" />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="inputCity" className="col-sm-2 col-form-label">
                        City
                    </label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" id="inputCity" />
                    </div>

                    <label htmlFor="inputUsername" className="col-sm-2 col-form-label">
                        Username
                    </label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" id="inputUsername" />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                        Password
                    </label>
                    <div className="col-sm-4">
                        <input type="password" className="form-control" id="inputPassword" />
                    </div>
                </div>

                <div className="mb-3 row">
                    <div className="col-sm-10 offset-sm-2">
                        <button type="submit" className="btn btn-primary">
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>

        </div>
    );
};


