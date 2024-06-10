import React from "react";

const Portfolio = () => {
    return (
        <section className="portfolio-section py-5">
            <div className="container">
                <h2 className="text-center mb-4">Portfolio</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="portfolio-item">
                            <h3>Project 1</h3>
                            <p>Description of Project 1.</p>
                            <a href="#" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="portfolio-item">
                            <h3>Project 2</h3>
                            <p>Description of Project 2.</p>
                            <a href="#" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="portfolio-item">
                            <h3>Project 3</h3>
                            <p>Description of Project 3.</p>
                            <a href="#" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
