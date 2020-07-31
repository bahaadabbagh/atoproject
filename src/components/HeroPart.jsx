import React from "react";
import { Badge, Col, Row, Button } from "react-bootstrap";
import heroImage from "../images/ato.jpg";

export default function HeroPart() {
  return (
    <div>
      <Row className="heroContainer">
        <Col md="6" className="heroText">
          {" "}
          <h1>
            <strong>
              Stop account takeovers. <br />
              Check their {/* <Badge variant="primary"> */}
              FingerprintJS!
              {/* </Badge>! */}
            </strong>
          </h1>
          <h1>{" "} </h1>
          <h5>
            {" "}
            Account takeover attacks can affect any organization with a login
            process.
          </h5>
          <h5>
            Apply the industry's leading fingerprint technology against account
            takeover with 99.5% accuracy.
          </h5>
          {/* <h2>99.5 accuracy and the most comprehensive fingerprint security</h2> */}
          <div>
            <Button className="CTA" variant="danger">
              start your free trial
            </Button>
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
