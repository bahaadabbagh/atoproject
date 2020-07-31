import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import frequency from "../images/frequency.svg";
import bot from "../images/bot.png";
import browser from "../images/browser.svg";
import incognito from "../images/incognito.svg";
import map from "../images/Map.svg";

export default function Highlights() {
  return (
    <div className="highlightsContainer">
      <Row>
        {" "}
        <h2 className="highlightsHero">
          <strong>
            Eliminate your security vulnerabilities to protect against account
            takeover and more
          </strong>
        </h2>
        <h5 className="hihglightSubHero"> Let your customers enjoy the experience you have tailored for them while FingerprintJS takes care of your security. 
</h5>
      </Row>
      <Row>
        <Col md="3" width="10rem">
          <Card.Img variant="top" src={bot} width="18rem" />
          <Card.Title> BOT DETECTION</Card.Title>
          <Card.Text width="100%">
            Detection of the most sophisticated bots to prevent credential
            stuffing with a bot probability factor for each user
            {/* We Protect your site from bots trying to breach your data */}
          </Card.Text>
        </Col>
        <Col md="1"></Col>
        <Col md="3" width="10rem">
          <Card.Img variant="top" src={map} />
          <Card.Title> GEOLOCATION</Card.Title>
          <Card.Text>
            Don't allow attackers to hide under fake IPs. Determine where your
            users are located by checking their FingerprintJS.
            {/* Attackers Try to Use Kocal And Trusted IPs. */}
          </Card.Text>
        </Col>
        <Col md="1"></Col>
        <Col md="3" width="100%">
          <Card.Img variant="top" src={browser} />
          <Card.Title> BROWSER FINGERPRINTING</Card.Title>
          <Card.Text>
            Leverage the most advanced browser fingerprinting in the market by
            identifying your users with certainty every time.
          </Card.Text>
        </Col>
      </Row>
      <Row>
        <Col md="2"></Col>
        <Col md="3" width="100%">
          <Card.Img variant="top" src={incognito} />
          <Card.Title> INCOGNITO MODE DETECTION</Card.Title>
          <Card.Text>
            {/* Incognito mode browsing cannot hide their identity with our advanced browser fingerprinting.  */}
            {/* Don't let hackers hide behind the mask of incognito mode with our advanced browser fingerprinting technology */}
            Browser fingerprinting means that attackers can't hide behind the
            mask of incognito mode.
          </Card.Text>
        </Col>
        <Col md="1"></Col>
        <Col md="3" width="100%">
          <Card.Img variant="top" src={frequency} />
          <Card.Title> FREQUENCY DETECTION</Card.Title>
          <Card.Text>
            Flag irregular frequencies of requests from your service by
            analyzing time of day, location, and other fingerprinting factors.
          </Card.Text>
        </Col>
      </Row>
    </div>
  );
}
