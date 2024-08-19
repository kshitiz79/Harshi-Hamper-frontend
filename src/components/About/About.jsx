import React from "react";
import "./About.scss"; // Assuming you have an About stylesheet

const About = () => {
    return (
        <div className="about-section">
            <div className="about-content">
                <h2>About Us</h2>
                <p>
                    Welcome to Harshi's Hamper! We are dedicated to providing customized gifts that bring joy to every occasion. Our mission is to create unique and thoughtful presents that cater to the diverse tastes and preferences of our customers.
                </p>
                <p>
                    At Harshi's Hamper, we understand the importance of gifting, and we believe that each gift should be a reflection of love and care. Whether you're celebrating birthdays, anniversaries, or any special moment, our curated selection of hampers, custom comics, neon lights, frames, standees, and soft toys is designed to make every occasion memorable.
                </p>
                {/* Add more content about your platform */}
            </div>
        </div>
    );
};

export default About;
