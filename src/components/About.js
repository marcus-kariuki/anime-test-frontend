import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './SingleAnime.css'

function About() {
  return (
    <div id="section1" className="about-section">
      <Container className="about-container">
        <h1>About Us</h1>
        <Row>
          <Col>
            <p>
              BANKAI! Welcome to Anime King .Anime-King is an anime streaming application that provides access to a vast library of anime titles. It is designed to cater to the needs of anime enthusiasts who want to stay up to date with the latest anime releases and also explore older classics. 
            </p>
            <p>
            Anime-King offers a premium subscription service that provides ad-free streaming, early access to new releases, and exclusive content. The app is regularly updated with new features and titles, ensuring that users always have fresh content to enjoy. With its intuitive interface, extensive library, and premium features, Anime-King is a must-have app for any anime fan.
            </p>
          </Col>
          <Col>
            <p>
            The app offers a user-friendly interface that allows users to easily search, filter, and sort through the anime titles. Users can also create their own watchlists, rate and review anime shows, and share their thoughts with other users.
            </p>
           
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
