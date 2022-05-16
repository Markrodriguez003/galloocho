import React, { useState } from "react";
import { useForm } from "react-hook-form";

//VALIDATION
import { newsletterSchema } from "../../Validations/ContactForm"

// COMPONENTS
import { Row, Col, Form, Button, Modal, Tabs, Tab } from "react-bootstrap";

// IMAGES
import modalImage from "../../imgs/misc/Logo2.png"

// SCRIPT
import * as formSubmitter from '../../controller/ContactFormSubmission/contactform'; 

// ICONS
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
import SocialMediaBar from "../SocialMediaBar"
// CSS
import { ContactContainer, FormContainer, ContactFormHeader, FormDescriptor, } from "./design";
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
      <Modal.Header closeButton style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
        <Modal.Title id="contained-modal-title-vcenter" style={{ textAlign: "center", fontFamily: "menuFont" }}>
          <BsFillEnvelopeOpenFill
            className="mb-2"
            style={{ textAlign: "center" }}
          />{" "}
          Message Sent!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
        <img src={modalImage} style={{ backgroundColor: "black", width: "30vw" }} />
        <p style={{ fontFamily: "menuFont", textAlign: "center", fontSize: "18px" }}>
          <br />
          Thank you! Give us some time to review your message and we will  get back to you!
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

function MessageFailModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
        <Modal.Title id="contained-modal-title-vcenter" style={{ textAlign: "center", color: "red", fontFamily: "menuFont" }}>
          <BsFillEnvelopeOpenFill
            className="mb-2"
            style={{ textAlign: "center" }}
          />{" "}
          Message Failed to send!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
        <p style={{ fontFamily: "menuFont", textAlign: "center", fontSize: "18px", color: "red" }}>
          <br />
          Please enter a valid name and email!
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
  const [subChecked, setSubChecked] = useState(false);
  const [sendChecked, setSendChecked] = useState(false);


  // VALIDATOR 
  // const newsletterSendInfo = async (data) => {
  const newsletterSendInfo = async (e, data) => {


    let formData = {
      name: data.name,
      email: data.email,
      message: data.textarea,
    };

  

    // Works
    // console.log('Form name field: ' + formData.name);
    // console.log('Form email field: ' + formData.email);
    // console.log("Sending newsletter form data --> " + JSON.stringify(getValues()));

    const isValid = await newsletterSchema.isValid(formData);
    console.log('Is this valid? ==>' + isValid);

    if (isValid === true) {
      formSubmitter.submitForm(e, formData);
      setModalShow(true);
    } else {
      setModalFailShow(true);
    }


  }
  /* MODAL */
  const [modalShow, setModalShow] = useState(false);
  const [modalFailShow, setModalFailShow] = useState(false);


  // Form data for newsletter tab (1)
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
      name: "",
      email: "",
      textarea: "",
    }
  });

  const onSubmitSub = (data) => {
    alert(JSON.stringify(data));
  };



  return (
    <>
      <ContactContainer >
        <ContactFormHeader id="contact">
          <span id="animIcon" style={{ letterSpacing: "3px", fontFamily: "heroFont", fontSize: "54px" }}>
            Contact us!
          </span>
          <SocialMediaBar />
        </ContactFormHeader>
        <p
          style={{
            color: "white",
            fontSize: "20px",
            textAlign: "center"
          }}
        >
          ___________________________________________________________________
        </p>
        <FormDescriptor>
          <small>
            Be the first to know when our rooster sculptures are released by signing up to our newsletter!
            Any other requests for custom work, business inquiries or if you are an artist who wants to be
            part of the Gallo Ocho team please send us your info in our contact form
            below!
          </small>
        </FormDescriptor>
        <br />

        <FormContainer>
          <Tabs defaultActiveKey="newsletter" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="newsletter" title={<span>   <RiArticleFill />{" "} Sign Up for our Newsletter </span>}  >

              <Form onSubmit={handleSubmit(onSubmitSub)}>

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
                      <Form.Control type="name" placeholder="name"  {...register("name")} />
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
                    <Form.Control type="email" placeholder="email"  {...register("email")} />
                  </span>
                </Form.Group>



                <Col sm={12}>

                  <span style={{ display: "flex" }}>
                    <BsFillPencilFill
                      style={{
                        color: "white",
                        backgroundColor: "rgba(0, 0, 0, 0.85)",
                        fontSize: "38.8px",
                        padding: "6px",
                        height: "23.9vh"

                      }}
                    />
                    <Form.Control as="textarea" rows={8} placeholder="Type up any questions, requests or inqueries here!"  {...register("textarea")} />
                  </span>
                </Col>

              </Form>
            </Tab>
          </Tabs>
          <br />
          <Col className="d-grid gap-2">
            <Button
              type="submit"
              size="lg"
              variant="outline-dark"
              style={{ marginLeft: "8px" }}
              onClick={(e) => {
                newsletterSendInfo(e, getValues());
                // console.log(JSON.stringify(getValues()));
              }}>
              Submit <BsArrowRight className="mb-1" />
            </Button>


          </Col>
        </FormContainer>


        <MessageSentModal show={modalShow} onHide={() => setModalShow(false)} />
        <MessageFailModal show={modalFailShow} onHide={() => setModalFailShow(false)} />
      </ContactContainer>
    </>
  );
}

export default Newsletter;


// other tab for contact form
{/* Artist / Other Inqueries */ }
{/* 
            <Tab eventKey="inquery" title={<span><BsFillPaletteFill /> {" "} Inqueries</span>}  >
              <Form onSubmit={handleSubmit(onSubmitSub)}>

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
                      <Form.Control type="name" placeholder="name"  {...register("inqueryname")} />
                    </span>
                  </Col>
                  <p> </p>
                  <br />
                  <Col sm={12}>

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
                      <Form.Control as="textarea" rows={8} placeholder="Type up any questions, requests or inqueries here!"  {...register("textarea")} />
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
                    <Form.Control type="email" placeholder="email"  {...register("inqueryemail")} />
                  </span>
                </Form.Group>


                <br />


                <Form.Check
                  type="switch"
                  id="newsletterSub"
                  label="Subscribe to newsletter"

                  onChange={e => { setSubChecked(e.target.value) }
                  }
                  {...register("subscribe")}
                />
                <br />
                <Form.Check
                  type="switch"
                  id="copyEmail"
                  label="Send copy to my email"
                  onChange={e => { setSendChecked(e.target.value) }

                  }
                  {...register("sendcopy")}
                />



                <br />
                <br />
                <Form.Group as={Row} className="mb-3">

                </Form.Group>
              </Form>
            </Tab> */}