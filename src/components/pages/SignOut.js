// src/components/pages/SignOut.js

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignOut = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear user data from localStorage or cookies
        localStorage.removeItem('user'); // Adjust based on your authentication method
        toast.success('Successfully signed out!', {
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

        // Redirect to login page after signing out
        setTimeout(() => {
            navigate('/');
        }, 2000);
    }, [navigate]);

    return (
        <div>
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
            <p>Signing you out...</p>
        </div>
    );
};

export default SignOut;
