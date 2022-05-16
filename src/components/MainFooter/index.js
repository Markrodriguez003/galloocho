// import '../MainHeader/MainHeader.css'
import { useState } from "react";
import styled from "styled-components";
// CSS

import { Form, Row, Col, Container } from "react-bootstrap";
import {
  Footer,
  FooterAnchor,
  SocialMediaBContainer,
  SocialMediaItem,
  MenuHeaderIcon,
  SmallText,
} from "./design";

import "./style.css";

import SocialMediaBar from "../SocialMediaBar";

function MainHeader() {
  return (
    <>
  
      <Footer>
        <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginBottom:"20px", marginTop:"2px" }} id="footerText">


          <FooterAnchor href="/">HOME</FooterAnchor>


          <FooterAnchor href="#concept">CONCEPT</FooterAnchor>


          <FooterAnchor href="#about">ABOUT</FooterAnchor>


          <FooterAnchor href="#contact">CONTACT</FooterAnchor>



        </div>
        <div style={{ display: "flex", justifyContent: "center"}} id="like">
          
          <a href="#contact">
            <div class="box">
              <div class="inner">
                <span>Thanks for visiting! Remember to Like & Subscribe!</span>
              </div>
              <div class="inner">
                <span>Thanks for visiting! Remember to Like & Subscribe!</span>
              </div>
            </div>
          </a>
        </div>

        <SocialMediaBar></SocialMediaBar>

        <Col lg={12}>
          <SmallText
            style={{
              display: "block",
              textAlign: "center",
              color: "white",
              fontSize: "10px",
              fontFamily: "arial"
            }}
          >
            © [name of rightsholder or rightsholders] [publication year]: e.g.
            © XYZ Press and contributors 2014 [date of terms of use] Except as
            permitted by the copyright law applicable to you, you may not
            reproduce or communicate any of the content on this website,
            including files downloadable from this website, without the
            permission of the copyright owner. The Australian Copyright Act
            allows certain uses of content from the internet without the
            copyright owner’s permission. This includes uses by educational
            institutions and by Commonwealth and State governments, provided
            fair compensation is paid. For more information, see
            www.copyright.com.au and www.copyright.org.au. The owners of
            copyright in the content on this website may receive compensation
            for the use of their content by educational institutions and
            governments, including from licensing schemes managed by Copyright
            Agency. We may change these terms of use from time to time. Check
            before re-using any content from this website.
          </SmallText>
        </Col>
      </Footer>

    </>
  );
}

export default MainHeader;


/*

       <p
              style={{
                color: "white",
                fontSize: "20px",
              }}
            >
              ________________________
            </p>
            <a href="#newsletter">
              <div class="box">
                <div class="inner">
                  <span>Subscribe to Our Newsletter</span>
                </div>
                <div class="inner">
                  <span>Subscribe to Our Newsletter</span>
                </div>
              </div>
            </a>
*/