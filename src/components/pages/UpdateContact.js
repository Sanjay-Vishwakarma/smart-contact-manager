import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, CircularProgress } from '@mui/material';
import axios from 'axios';

const UpdateContact = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [contact, setContact] = useState(null);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("update cont::: "+id);
        const fetchContact = async () => {
            try {
                const response = await axios.get(`http://localhost:9090/contact/getContact/${id}`);
                console.log("data::::"+response)
                setContact(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching contact:', error);
                setError('Error fetching contact');
                setLoading(false);
            }
        };

        fetchContact();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUpdating(true);
        try {
            await axios.put(`http://localhost:9090/contact/updateContact/${id}`, contact);
            setUpdating(false);
            navigate('/contact-list');
        } catch (error) {
            console.error('Error updating contact:', error);
            setError('Error updating contact');
            setUpdating(false);
        }
    };

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2>Update Contact</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    name="firstName"
                    label="First Name"
                    value={contact.firstName}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="lastName"
                    label="Last Name"
                    value={contact.lastName}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="email"
                    label="Email"
                    value={contact.email}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="phone"
                    label="Phone"
                    value={contact.phone}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="description"
                    label="Description"
                    value={contact.description}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={updating}
                >
                    {updating ? 'Updating...' : 'Update Contact'}
                </Button>
            </form>
        </div>
    );
};

export default UpdateContact;
