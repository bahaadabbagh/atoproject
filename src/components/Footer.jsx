import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBInputGroup, MDBBtn } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol  md="4">
            {/* <h5 className="title">Footer Content</h5> */}
            <h3>
              Subscribe to our newsletter and stay updated on fingerprinting technology and our latest news 
            </h3>
            <MDBInputGroup
          hint="Your Email"
          containerClassName="mb-3"
          append={
            <MDBBtn color="danger" className="m-0 px-3 py-2 z-depth-0">
              Subscribe
            </MDBBtn>}/>
          </MDBCol>
          <MDBCol className="footerCol" md="4">
            <h5 className="title">Popular Links</h5>
              <p className="list-unstyled">
                <a href="#!">New Release Features</a>
              </p>
              <p className="list-unstyled">
                <a href="#!">Customer Service Solutions</a>
              </p>
              <p className="list-unstyled">
                <a href="#!">Webinars</a>
              </p>
              <p className="list-unstyled">
                <a href="#!">Blog</a>
              </p>
          </MDBCol>
          <MDBCol className="footerCol" md="4">
            <h5 className="title">Legal</h5>
              <p className="list-unstyled">
                <a href="#!">Cookies Policy</a>
              </p>
              <p className="list-unstyled">
                <a href="#!">Privacy Policy</a>
              </p>
              <p className="list-unstyled">
                <a href="#!">Terms and Conditions</a>
              </p>
              <p className="list-unstyled">
                <a href="#!">support@fingerprintjs.com</a>
              </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      {/* <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div> */}
    </MDBFooter>
  );
}

export default FooterPage;