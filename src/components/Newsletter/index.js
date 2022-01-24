import React, { useState } from "react";
// COMPONENTS
import { Row, Col, Form, Button, Modal } from "react-bootstrap";

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
} from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { RiArticleFill } from "react-icons/ri";

// CSS
import { ContactContainer, FormContainer, ContactFormHeader } from "./design";
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
      <ContactContainer>
        <ContactFormHeader>
          <span id="animIcon">
            <RiArticleFill /> Sign Up to our Newsletter!  
          </span>
        </ContactFormHeader>
        <p style={{ color: "white", textAlign: "center", fontStyle:"italic" }}> 
          Be the first to know when our rooster sculptures are released!
        </p><br/>
        <FormContainer>
          {/* <Form.Text id="contact-help" style={{ color: "black", fontStyle:"italic" }}>
            Be the first to know when our rooster sculptures are released!
          </Form.Text> */}
          <Form>
            <br />
            <p> </p>
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

                {/*  <Button
                  type="submit"
                  size="lg"
                  variant="danger"
                  style={{ float: "right", marginLeft: "8px" }}
                >
                  Clear Form
                </Button> */}
              </Col>
            </Form.Group>
          </Form>
        </FormContainer>
        <MessageSentModal show={modalShow} onHide={() => setModalShow(false)} />
      </ContactContainer>
    </>
  );
}

export default Newsletter;
