import React from "react";
import { Badge, Col, Row, Button } from "react-bootstrap";
import heroImage from "../images/ato.jpg";

export default function HeroPart() {
  return (
    <div>
      <Row>
        <Col md="6" className="heroText">
          {" "}
          <h1><strong>
            Stop Account Takeovers <br />
            Check Their 

            {" "} 
             <Badge variant="primary">
            FingerprintJS
             </Badge>!
             </strong>
          </h1>
          <h4> Account takeover attacks can affect any organization with a login process.</h4>
          <h4>Apply the industries leading fingerprint technology against account takeover with 99.5% accuracy</h4>
          {/* <h2>99.5 accuracy and the most comprehensive fingerprint security</h2> */}
          <div >
            <Button className="CTA" variant="danger">10 day free trial</Button>
            {/* <h3 className="betweenCTA">Or</h3> */}
            {/* <Button variant="primary">Try Demo {" "}</Button> */}
          </div>
        </Col>
        <Col md="5">
          <img src={heroImage} width="100%" alt="heroImage"></img>
        </Col>
      </Row>
    </div>
  );
}
