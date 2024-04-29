import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'; // Import Box from Material-UI

export const Contact = () => {
    const contactContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px', // Adjust padding as needed
    };

    const inputFieldStyle = {
        width: '100%',
        marginBottom: '16px', // Adjust margin bottom for spacing between fields
    };

    const handleSubmit = () => {
        // Handle form submission logic here
        console.log('Form submitted!');
    };

    return (
        <Box style={contactContainerStyle}>
            <TextField
                style={inputFieldStyle}
                label="First Name"
                variant="outlined"
                placeholder="First Name"
            />
            <TextField
                style={inputFieldStyle}
                label="Last Name"
                variant="outlined"
                placeholder="Last Name"
            />
            <TextField
                style={inputFieldStyle}
                label="Work"
                variant="outlined"
                placeholder="Work"
            />
            <TextField
                style={inputFieldStyle}
                label="Email"
                variant="outlined"
                placeholder="Email"
            />
            <TextField
                style={inputFieldStyle}
                label="Phone"
                variant="outlined"
                placeholder="Phone"
            />
            <TextField
                style={inputFieldStyle}
                label="Description"
                variant="outlined"
                multiline
                rows={4}
                placeholder="Description"
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
            </Button>
        </Box>
    );
}
