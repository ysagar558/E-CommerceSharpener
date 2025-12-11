import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="about-header">
        <h1>The Generics</h1>
      </header>

      {/* ===== ABOUT SECTION ===== */}
      <Container className="about-wrapper">

        <h2 className="about-title">ABOUT</h2>

        <Row className="align-items-start about-row">

          {/* Image */}
          <Col md={4} className="text-center">
            <Image
              src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png"
              roundedCircle
              className="about-img"
            />
          </Col>

          {/* Description */}
          <Col md={8}>
            <p className="about-text">
              Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of
              sorrows, hates no prosecutors will unfold in the enduring of which
              were born in it? Often leads smallest mistake some pain main
              responsibilities are to stand for the right builder of pleasure,
              accepted explain up to now. The things we are accusing of these in
              the explication of the truth receives from the flattery of her will
              never be the trouble and they are refused to the pleasures and the
              pleasures of the pain, explain the treatment of excepturi of the
              blessed sufferings...
            </p>

            <p className="about-text">
              The greater, therefore, an obstacle to the duties of the debts
              receives the very great importance to us that these are consequent
              to that question is answered...
            </p>
          </Col>

        </Row>
      </Container>

      {/* ===== FOOTER ===== */}
      <footer className="about-footer">
        <h3 className="footer-title">The Generics</h3>

        <div className="footer-icons">
          <img src="https://img.icons8.com/ios-filled/50/youtube-play.png" alt="YouTube" />
          <img src="https://img.icons8.com/ios-filled/50/spotify.png" alt="Spotify" />
          <img src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="Facebook" />
        </div>
      </footer>
    </>
  );
};

export default About;
