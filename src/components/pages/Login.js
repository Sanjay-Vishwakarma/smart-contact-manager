import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams, useNavigate } from 'react-router-dom';


import '../../styles/login.css'
const Login = () => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [userData, setUserData] = useState(null); // State to store the response data
    const navigate = useNavigate();




    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { username, password };
        try {
            const response = await axios.post('http://localhost:9090/user/sign', user);
            setUserData(response.data); // Store response data in state
            console.info(userData);
            toast.success('User Sign in successfully!', {
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
            setSuccess('User sign in successfully!');
            setError(null);
            navigate('/contact-list'); // Redirect to the contact list page after successful deletion
        } catch (error) {
            toast.error('There was an error sign in  the user.', {
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





    // main
    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3 row">
                    <label htmlFor="inputUsername" className="col-sm-4 col-form-label">
                        Username
                    </label>
                    <div className="col-sm-10">
                        <input type="text" value={username} className="form-control" id="inputUsername" onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                        Password
                    </label>
                    <div className="col-sm-10">
                        <input type="password" value={password} className="form-control" id="inputPassword"  onChange={(e)=>setPassword(e.target.value)} required/>
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

export default Login;
