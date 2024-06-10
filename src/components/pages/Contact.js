import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from 'axios';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const contactContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
    };

    const inputFieldStyle = {
        width: '100%',
        marginBottom: '16px',
    };

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [uid, setUid] = useState('');

    useEffect(() => {
        const storedUid = localStorage.getItem('uid');
        console.log("cont  uid " + storedUid);

        if (storedUid) {
            setUid(storedUid);
        } else {
            // Handle the case where uid is not available, maybe redirect to login
            toast.error('User not logged in.', {
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
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const contact = { firstName, lastName, phone, email, description, uid };

        try {
            const response = await axios.post('http://localhost:9090/contact/addContact', contact);
            toast.success('Contact added successfully!', {
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
            setSuccess('Contact added successfully!');
            setError(null);

        } catch (error) {
            toast.error('There was an error creating the contact.', {
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
            setError('There was an error creating the contact.');
            setSuccess(null);
        }
    };

    return (
        <Box style={contactContainerStyle} component="form" onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <TextField
                style={inputFieldStyle}
                label="First Name"
                variant="outlined"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
            />
            <TextField
                style={inputFieldStyle}
                label="Last Name"
                variant="outlined"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
            />
            <TextField
                style={inputFieldStyle}
                label="Phone"
                variant="outlined"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <TextField
                style={inputFieldStyle}
                label="Email"
                variant="outlined"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <TextField
                style={inputFieldStyle}
                label="Description"
                variant="outlined"
                multiline
                rows={4}
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <Button variant="contained" color="primary" type="submit">
                Submit
            </Button>
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
        </Box>
    );
}

export default Contact;
