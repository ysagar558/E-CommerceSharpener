import React from "react";
import {Container,Row,Col,Button} from "react-bootstrap";
import "./Home.css";
const Home=()=>{
    return(
        <>
      {/* ===== HERO SECTION ===== */}
      <section className="home-hero">
        <h1 className="hero-title">The Generics</h1>

        <Button variant="outline-light" className="album-btn">
          Get our Latest Album
        </Button>

        <div className="play-btn">
          <span>▶</span>
        </div>
      </section>

      {/* ===== TOURS SECTION ===== */}
      <Container className="tours-container">

        <h2 className="tours-heading">TOURS</h2>

        <Row className="tour-row">
          <Col xs={3}>JUL 16</Col>
          <Col xs={3}>DETROIT, MI</Col>
          <Col xs={3}>DTE ENERGY MUSIC THEATRE</Col>
          <Col xs={3} className="text-end">
            <Button className="buy-btn">BUY TICKETS</Button>
          </Col>
        </Row>

        <Row className="tour-row">
          <Col xs={3}>JUL 19</Col>
          <Col xs={3}>TORONTO, ON</Col>
          <Col xs={3}>BUDWEISER STAGE</Col>
          <Col xs={3} className="text-end">
            <Button className="buy-btn">BUY TICKETS</Button>
          </Col>
        </Row>

        <Row className="tour-row">
          <Col xs={3}>JUL 22</Col>
          <Col xs={3}>BRISTOW, VA</Col>
          <Col xs={3}>JIGGY LUBE LIVE</Col>
          <Col xs={3} className="text-end">
            <Button className="buy-btn">BUY TICKETS</Button>
          </Col>
        </Row>

        <Row className="tour-row">
          <Col xs={3}>JUL 29</Col>
          <Col xs={3}>PHOENIX, AZ</Col>
          <Col xs={3}>AK-CHIN PAVILION</Col>
          <Col xs={3} className="text-end">
            <Button className="buy-btn">BUY TICKETS</Button>
          </Col>
        </Row>

        <Row className="tour-row">
          <Col xs={3}>AUG 2</Col>
          <Col xs={3}>LAS VEGAS, NV</Col>
          <Col xs={3}>T-MOBILE ARENA</Col>
          <Col xs={3} className="text-end">
            <Button className="buy-btn">BUY TICKETS</Button>
          </Col>
        </Row>

        <Row className="tour-row">
          <Col xs={3}>AUG 7</Col>
          <Col xs={3}>CONCORD, CA</Col>
          <Col xs={3}>CONCORD PAVILION</Col>
          <Col xs={3} className="text-end">
            <Button className="buy-btn">BUY TICKETS</Button>
          </Col>
        </Row>

      </Container>

      {/* ===== FOOTER SECTION ===== */}
      <footer className="home-footer">
        <h3>The Generics</h3>

        <div className="footer-icons">
          <img src="https://img.icons8.com/ios-filled/50/youtube-play.png" alt="YouTube" />
          <img src="https://img.icons8.com/ios-filled/50/spotify.png" alt="Spotify" />
          <img src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="Facebook" />
        </div>
      </footer>
    </>
    );
}
export default Home;