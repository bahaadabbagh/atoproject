import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

export default function Testimonials() {
  return (
    <div>
      <MDBContainer className="testimonialsContainer">
        <section className="team-section text-center my-5">
          <MDBRow className="text-center">
            <MDBCol md="3" className="mb-md-0 mb-5" width="100%">
              <img
                src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/042013/ebay_logo.png?itok=QLz1bS2p"
                alt=""
                className="rounded-circle z-depth-1 img-fluid"
              />
              <h4 className="font-weight-bold dark-grey-text mt-4">
                Anna Deynah
              </h4>
              <h6 className="font-weight-bold blue-text my-3">
                ebay Security Manager
              </h6>
              <p className="font-weight-normal dark-grey-text">
                <MDBIcon className="fa fa-quote-left pr-2" />
                When it came to online security, we didn't want to take any
                chances. That's why we chose FingerprintJS.
              </p>
              <div className="orange-text"></div>
            </MDBCol>
            <MDBCol md="1"></MDBCol>
            <MDBCol md="3" className="mb-md-0 mb-5" width="100%">
              <img
                src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082016/untitled-2_11.jpg?itok=eniDwihE"
                alt=""
                className="rounded-circle z-depth-1 img-fluid"
              />
              <h4 className="font-weight-bold dark-grey-text mt-4">John Doe</h4>
              <h6 className="font-weight-bold blue-text my-3">Booking.com Product Director</h6>
              <p className="font-weight-normal dark-grey-text">
                <MDBIcon className="fa fa-quote-left pr-2" />
                Being an online business today means that you will be handling privileged information. FingerprintJS helps us make sure this information stays secure.
              </p>
              <div className="orange-text"></div>
            </MDBCol>
            <MDBCol md="1"></MDBCol>
            <MDBCol md="3" className="mb-md-0 mb-5" width="100%">
              <img
                src="https://dell.teknik.online/wp-content/uploads/2019/04/dell_logo.png"
                alt=""
                className="rounded-circle z-depth-1 img-fluid"
              />
              <h4 className="font-weight-bold dark-grey-text mt-4">
                Maria Kate
              </h4>
              <h6 className="font-weight-bold blue-text my-3">Dell CEO :D</h6>
              <p className="font-weight-normal dark-grey-text">
                <MDBIcon className="fa fa-quote-left pr-2" />
                FingerprintJS provides us with transparent and measurable results with the adaptability to meet our needs.
              </p>
              <div className="orange-text"></div>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
    </div>
  );
}
