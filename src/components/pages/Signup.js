import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import '../../styles/signup.css';
import backgroundImage from '../../bgImages/signUp.jpg';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [userData, setUserData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { name, email, username, password };
        try {
            const response = await axios.post('http://localhost:9090/user/addUser', user);
            setUserData(response.data);
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
            navigate('/login');
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
        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            minHeight: '100vh',
            opacity: 0.8 // Adjust transparency
        }}>
        <div className="signup-container">
            <div className="image-container">
                <img src="path-to-your-image.jpg" alt="Signup Illustration" className="signup-image" />
            </div>
            <div className="signup-form">
                <h5 className="text-center mb-4">Sign Up</h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputName" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputUsername" className="form-label">Username</label>
                        <input type="text" className="form-control" id="inputUsername" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-primary d-block mx-auto">Sign Up</button>
                </form>
            </div>
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
        </div>
    );
};

export default Signup;
