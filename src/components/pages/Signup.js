import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


import '../../styles/signup.css';

export default function Signup() {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [userData, setUserData] = useState(null); // State to store the response data

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { name, email, username, password };
        try {
            const response = await axios.post('http://localhost:9090/user/addUser', user);
            setUserData(response.data); // Store response data in state
            console.info(userData);
            toast.success('User created successfully!', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            setSuccess('User created successfully!');
            setError(null);
            navigate('/login'); // Redirect to the contact list page after successful deletion

        } catch (error) {
            toast.error('There was an error creating the user.', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            setError('There was an error creating the user.');
            setSuccess(null);
        }

    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3 row">
                    <label htmlFor="inputFirstName" className="col-sm-2 col-form-label">
                        Name
                    </label>
                    <div className="col-sm-4">
                        <input type="text" value={name} className="form-control" onChange={(e) => setName(e.target.value)} required />
                    </div>

                    <label htmlFor="inputLastName" className="col-sm-2 col-form-label">
                        Email
                    </label>
                    <div className="col-sm-4">
                        <input type="email" value={email} className="form-control" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
                        Username
                    </label>
                    <div className="col-sm-4">
                        <input type="text" value={username} className="form-control" onChange={(e) => setUsername(e.target.value)} required />
                    </div>

                    <label htmlFor="inputPhone" className="col-sm-2 col-form-label">
                        Password
                    </label>
                    <div className="col-sm-4">
                        <input type="password" value={password} className="form-control" onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                </div>

                {/* <div className="mb-3 row">
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
                </div> */}

                {/* <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                        Password
                    </label>
                    <div className="col-sm-4">
                        <input type="password" className="form-control" id="inputPassword" />
                    </div>
                </div> */}

                <div className="mb-3 row">
                    <div className="col-sm-10 offset-sm-2">
                        <button type="submit" className="btn btn-primary">
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    );
};


