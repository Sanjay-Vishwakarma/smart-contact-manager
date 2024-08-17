import React from "react";
import backgroundImage from '../../bgImages/about.jpg';

const AboutPage = () => {
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
            <div className="container">
                <h1>Welcome to Our Website</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare
                    ullamcorper mauris, sed varius lacus facilisis ac. Vestibulum sed turpis
                    hendrerit, aliquam justo eget, cursus orci.
                </p>
                <p>
                    Suspendisse potenti. Vestibulum tempus libero at erat convallis congue.
                    Phasellus id fermentum nisi. Cras a velit non nisi sollicitudin malesuada.
                </p>
                <p>
                    Fusce vel felis quis enim aliquam condimentum. Nulla facilisi. Curabitur
                    ultricies vestibulum arcu, vel ultricies nulla suscipit at.
                </p>
                <button className="btn btn-primary" aria-label="Learn more about our website">Learn More</button>
            </div>
        </div>
    );
};

export default AboutPage;
