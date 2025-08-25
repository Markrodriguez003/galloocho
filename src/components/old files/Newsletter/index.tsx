import React, { useState } from "react";
// COMPONENTS
import { Row, Col, Form, Button, Modal, Tabs, Tab } from "react-bootstrap";

//! Interesting Ideas
// https://www.w3schools.com/howto/howto_js_animate_icons.asp

// IMAGES
//ICONS
// ! Animate envelope change when user submits + slight pause and modal
import {
  BsFillEnvelopeFill,
  BsFillEnvelopeOpenFill,
  BsArrowRight,
  BsFillPersonFill,
  BsPencilSquare,
  BsFillPencilFill,
  BsCheckCircleFill,
  BsFillPaletteFill


} from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { RiArticleFill, RiLineHeight } from "react-icons/ri";

// CSS
import { ContactContainer, FormContainer, ContactFormHeader, FormDescriptor,  } from "./design";
import "./style.css";

/* MODAL FUNCTION */
function MessageSentModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <BsFillEnvelopeOpenFill
            className="mb-2"
            style={{ textAlign: "center" }}
          />{" "}
          Message Sent!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Give us some time to review your message before we get back to you!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function Newsletter() {
  /* CHECKBOX */
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  /* MODAL */
  const [modalShow, setModalShow] = React.useState(false);

  const radioOptions = [
    { name: "Sign-up", value: "1" },
    { name: "No Thank you.", value: "2" },
  ];

  return (
    <> 
      <ContactContainer >
        <ContactFormHeader id="contact">
          <span id="animIcon" style={{ letterSpacing: "2px", fontFamily: "heroFont", fontSize: "44px" }}>
            Contact us!
          </span>
        </ContactFormHeader>
        <br />
        <FormDescriptor>
          <small>
            Be the first to know when our rooster sculptures are released by signing up to our newsletter!
            Any other requests for custom work, business inquiries or if you are an artist who wants to be
            part of the Gallo Ocho team please send us your info using the inquiries tab in our contact form
            below.
          </small>
        </FormDescriptor>
        <br />

        <FormContainer>
          <Tabs defaultActiveKey="newsletter" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="newsletter" title={<span>   <RiArticleFill />{" "} Sign Up for our Newsletter </span>}  >

              <Form>

                <Form.Group as={Row} className="mb-3" controlId="contact-form">
                  <Col sm={12}>
                    <span style={{ display: "flex" }}>
                      <BsFillPersonFill
                        style={{
                          color: "white",
                          backgroundColor: "rgba(0, 0, 0, 0.85)",
                          fontSize: "38.8px",
                          padding: "6px",
                        }}
                      />
                      <Form.Control type="name" placeholder="Name" />
                    </span>
                  </Col>

                  <p> </p>
                  <br />
                  <span style={{ display: "flex" }}>

                    <MdAlternateEmail
                      style={{
                        color: "white",
                        backgroundColor: "rgba(0, 0, 0, 0.85)",
                        fontSize: "38.8px",
                        padding: "7px",
                      }}
                    />
                    <Form.Control type="Email" placeholder="Email" />
                  </span>
                </Form.Group>


                <br />


                <Form.Group as={Row} className="mb-3">
                  <Col className="d-grid gap-2">
                    <Button
                      type="submit"
                      size="lg"
                      variant="outline-dark"
                      style={{ marginLeft: "8px" }}
                      onClick={() => setModalShow(true)}
                    >
                      Submit <BsArrowRight className="mb-1" />
                    </Button>

                  </Col>
                </Form.Group>
              </Form>
            </Tab>


            {/* Artist / Other Inqueries */}

            <Tab eventKey="inquery" title={<span><BsFillPaletteFill /> {" "} Inquiries</span>}  >
              <Form>

                <Form.Group as={Row} className="mb-3" controlId="contact-form">
                  <Col sm={12}>
                    <span style={{ display: "flex" }}>
                      <BsFillPersonFill
                        style={{
                          color: "white",
                          backgroundColor: "rgba(0, 0, 0, 0.85)",
                          fontSize: "38.8px",
                          padding: "6px",
                        }}
                      />
                      <Form.Control type="name" placeholder="Name" />
                    </span>
                  </Col>
                  <p> </p>
                  <br />
                  <Col sm={12}>
                    {/* <Form.Text id="contact-help" style={{ color: "black", fontStyle: "italic", marginLeft:"50px" }}>
                      Be the first to know when our rooster sculptures are released!
                    </Form.Text> */}
                    <span style={{ display: "flex" }}>
                      <BsFillPencilFill
                        style={{
                          color: "white",
                          backgroundColor: "rgba(0, 0, 0, 0.85)",
                          fontSize: "38.8px",
                          padding: "6px",
                          height: "22vh"

                        }}
                      />
                      <Form.Control as="textarea" rows={8} placeholder="Type up any questions, requests or inqueries here!" />
                    </span>
                  </Col>

                  <p> </p>
                  <br />
                  <span style={{ display: "flex" }}>

                    <MdAlternateEmail
                      style={{
                        color: "white",
                        backgroundColor: "rgba(0, 0, 0, 0.85)",
                        fontSize: "38.8px",
                        padding: "7px",
                      }}
                    />
                    <Form.Control type="Email" placeholder="Email" />
                  </span>
                </Form.Group>


                <br />


                <Form.Check
                  type="switch"
                  id="newsletterSub"
                  label="Subscribe to newsletter"
                />
                <br />
                <Form.Check
                  type="switch"
                  id="copyEmail"
                  label="Send copy to my email"
                />

                <br />
                <br />
                <Form.Group as={Row} className="mb-3">
                  <Col className="d-grid gap-2">
                    <Button
                      type="submit"
                      size="lg"
                      variant="outline-dark"
                      style={{ marginLeft: "8px" }}
                      onClick={() => setModalShow(true)}
                    >
                      Submit <BsArrowRight className="mb-1" />
                    </Button>


                  </Col>
                </Form.Group>
              </Form>
            </Tab>
          </Tabs>
        </FormContainer>


        <MessageSentModal show={modalShow} onHide={() => setModalShow(false)} />
      </ContactContainer>
    </>
  );
}

export default Newsletter;
