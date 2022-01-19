import React, { useState } from "react";
// COMPONENTS
import {
  Row,
  Col,
  Form,
  Button,
  ToggleButton,
  ButtonGroup,
} from "react-bootstrap";

// IMAGES

// CSS
import { ContactContainer, ContactFormHeader } from "./design";
import "./style.css";

function Contact() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radioOptions = [
    { name: "Sign-up", value: "1" },
    { name: "No Thank you.", value: "2" },
  ];

  return (
    <>
      <ContactContainer>
        <ContactFormHeader>
          CONTACT: <br /> <hr />
        </ContactFormHeader>
        <Form>
          <Form.Text id="contact-help" style={{ color: "white" }}>
            If you have any requests, opinions or complaints please submit it
            using the form below.
          </Form.Text>
          <p> </p>
          <Form.Group as={Row} className="mb-3" controlId="contact-form">
            <Form.Label column sm={2}>
              Name:
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="name" placeholder="Name" />
            </Col>
            <p> </p>

            <Form.Label column sm={2}>
              Email:
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Email" />
            </Col>
          </Form.Group>

          <br />
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "120px" }}
          />

          <br />
          <div key={"checkbox"} className="mb-3">
            <Form.Check
              type={"checkbox"}
              id={`contact-form-receipt-checkbox`}
              label={`Send a copy of message to email above.`}
           
            />
          </div>

          <Form.Text id="newsletter-inquiry" style={{ color: "white " }}>
            Would you like to sign up to our newsletter?
          </Form.Text>
          <br />
          <br />
          <ButtonGroup>
            {radioOptions.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={"outline-light"}
                name="radio"
                value={radio.value}
                size="sm"
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
          <br />
          <br />
          <hr />
          <Form.Group as={Row} className="mb-3">
            <Col>
              <Button
                type="submit"
                size="lg"
                variant="outline-light"
                style={{ float: "right", marginLeft: "8px" }}
              >
                Submit
              </Button>

              <Button
                type="submit"
                size="lg"
                variant="outline-danger"
                style={{ float: "right", marginLeft: "8px" }}
              >
                Clear Form
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </ContactContainer>
    </>
  );
}

export default Contact;
