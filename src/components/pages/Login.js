import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import '../../styles/login.css';

const Login = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { username, password };
        try {
            const response = await axios.post('http://localhost:9090/user/sign', user);
            console.log("Full response data:", response.data);

            const uid = response.data.uid;
            console.log("Extracted uId:", uid);

            toast.success('User signed in successfully!', {
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

            setIsLoggedIn(true);
            localStorage.setItem('uid', uid);

            // Example condition to determine which page to navigate to
            const navigateTo = username === 'admin' ? '/contact-list' : '/contact';

            navigate(navigateTo);

        } catch (error) {
            toast.error('There was an error signing in the user.', {
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
            setError('There was an error signing in the user.');
        }
    };

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
                        <input type="password" value={password} className="form-control" id="inputPassword" onChange={(e) => setPassword(e.target.value)} required />
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
