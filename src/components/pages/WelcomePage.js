
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/welcome.css';  // Custom CSS if needed
// import Portfolio from "./PortFolio";

const WelcomePage = () => {
    return (
        <div className="welcome-container d-flex justify-content-center align-items-center text-center">
            <div className="welcome-content">
                <h1 className="display-3 text-primary mb-4">Welcome to Your Smart Contact Manager</h1>
                <p className="lead text-dark">Keep your contacts organized and accessible anytime, anywhere.</p>
            </div>
        </div>
    );
};
export default WelcomePage;
