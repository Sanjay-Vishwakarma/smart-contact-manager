import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignOut = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear uid from localStorage
        localStorage.removeItem('uid');

        // Update login status
        setIsLoggedIn(false);

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

        // Redirect to home page after signing out
        setTimeout(() => {
            navigate('/');
        }, 500);
    }, [navigate, setIsLoggedIn]);

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
