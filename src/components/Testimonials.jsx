import React from "react";
import { MDBContainer, MDBRow, MDBCol,  MDBIcon } from "mdbreact";

export default function Testimonials() {
    return (
        <div>
            <MDBContainer>
      <section className="team-section text-center my-5">
            {/* <h2 className="h1-responsive font-weight-bold my-5">
              Testimonials
            </h2> */}
          {/* <p className="dark-grey-text w-responsive mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p> */}

          <MDBRow className="text-center">
            <MDBCol md="4" className="mb-md-0 mb-5">
              {/* <MDBTestimonial> */}
                 {/* <MDBAvatar className="mx-auto"> */}
                  <img
                    src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/042013/ebay_logo.png?itok=QLz1bS2p"
                    alt=""
                    className="rounded-circle z-depth-1 img-fluid"
                  />
                {/* </MDBAvatar>  */}
                <h4 className="font-weight-bold dark-grey-text mt-4">
                  Anna Deynah
                </h4>
                <h6 className="font-weight-bold blue-text my-3">
                  ebay Security Manager
                </h6>
                <p className="font-weight-normal dark-grey-text">
                  <MDBIcon className="fa fa-quote-left pr-2" />
                  When it came to online security, we didn't want to take any chances. That's why we chose fingerprintjs.
                </p>
                <div className="orange-text">
                  {/* <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon far icon="star-half" /> */}
                </div>
              {/* </MDBTestimonial> */}
            </MDBCol>
            <MDBCol md="4" className="mb-md-0 mb-5">
              {/* <MDBTestimonial> */}
                {/* <MDBAvatar className="mx-auto"> */}
                  <img
                    src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082016/untitled-2_11.jpg?itok=eniDwihE"
                    alt=""
                    className="rounded-circle z-depth-1 img-fluid"
                  />
                {/* </MDBAvatar> */}
                <h4 className="font-weight-bold dark-grey-text mt-4">
                  John Doe
                </h4>
                <h6 className="font-weight-bold blue-text my-3">
                  Web Developer
                </h6>
                <p className="font-weight-normal dark-grey-text">
                  <MDBIcon className="fa fa-quote-left pr-2" />
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid commodi.
                </p>
                <div className="orange-text">
                  {/* <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" /> */}
                </div>
              {/* </MDBTestimonial> */}
            </MDBCol>
            <MDBCol md="4">
              {/* <MDBTestimonial> */}
                {/* <MDBAvatar className="mx-auto"> */}
                  <img
                    src="https://dell.teknik.online/wp-content/uploads/2019/04/dell_logo.png"
                    alt=""
                    className="rounded-circle z-depth-1 img-fluid"
                  />
                {/* </MDBAvatar> */}
                <h4 className="font-weight-bold dark-grey-text mt-4">
                  Maria Kate
                </h4>
                <h6 className="font-weight-bold blue-text my-3">
                  Photographer
                </h6>
                <p className="font-weight-normal dark-grey-text">
                  <MDBIcon className="fa fa-quote-left pr-2" />
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti.
                </p>
                <div className="orange-text">
                  {/* <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon far icon="star" /> */}
                </div>
              {/* </MDBTestimonial> */}
            </MDBCol>
          </MDBRow>
        </section>
    </MDBContainer>
        </div>
    )
}