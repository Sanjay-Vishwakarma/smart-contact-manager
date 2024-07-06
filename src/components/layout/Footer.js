import React from 'react';

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#e6f0ff',
        padding: '10px 20px',
        textAlign: 'center',
        fontSize: '14px',
        color: '#333',
    };

    return (
        <div>
            <h5 style={footerStyle}>&copy; 2024 Smart Contact Manager. All rights reserved.</h5>
        </div>
    );
};

export default Footer;
