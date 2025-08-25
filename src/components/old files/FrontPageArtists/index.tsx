import React from 'react';
import styled from 'styled-components'
import { Card, Button, CardGroup, Row, Col } from "react-bootstrap"

// IMAGES
import A from "../../imgs/profile/1.jpg"
import B from "../../imgs/profile/2.jpg"
import C from "../../imgs/profile/7.jpg"
import D from "../../imgs/profile/5.jpg"

import { BsFillPaletteFill, BsInstagram, BsUpload, BsLink45Deg } from "react-icons/bs";
import {AiOutlineCaretDown } from "react-icons/ai";



// COMPONENTS
const BlobA = styled('svg')`
/* width: 550px;
height: 500px; */
transform:scale(0.5);

`

// FRONT PAGE SHOP HEADER
const FrontPageShopHeader = styled('span')`
font-family: "menuFont";
font-size: 46px;
font-weight:bold;
letter-spacing: 3px;
border: 4px black dotted;
padding: 12px;
background-color: white ;
 
`


const CardAnchor = styled('a')`
text-decoration: none;
font-style:none;
color:darkgrey;

`
const FrontPageArtists = () => {

    const picArry = ["A", "B", "C", "D"]
    return (
        <>  <div style={{ marginBottom: "80px" }}>   </div>
            <FrontPageShopHeader>MEET THE ARTISTS <AiOutlineCaretDown/></FrontPageShopHeader>
            <div style={{ marginBottom: "40px" }}>   </div>

            <div style={{ marginBottom: "400px" }}>

                <div style={{ marginLeft: "300px", marginBottom: "2000px" }}>
                    <Row xs={1} md={2} className="g-4" style={{ marginLeft: "40px" }}>

                        <Col>
                            <Card style={{ width: "60%", marginRight: "35px" }}>
                                {/* <Card.Img variant="top" src={A} style={{width:"450px", height:"400px", textAlign:"center"}}/> */}
                                <Card.Img variant="top" src={A} />
                                <Card.Body>
                                    <Card.Title>Miguel Garrado Ortiz</Card.Title>
                                    <Card.Text>
                                        Born in Venezuela, Josue has been embedded in the Miami art scene for quite some time.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                                    <CardAnchor href="#"><BsFillPaletteFill /> deviant.com/profile10192 - </CardAnchor>
                                    <CardAnchor href="#">  <BsInstagram />   @Miguelito17124</CardAnchor>
                                    <BsUpload style={{ marginLeft: "24px", marginBottom: "7px" }} />
                                    <BsLink45Deg style={{ marginLeft: "24px", marginBottom: "7px" }} />
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: "60%", marginRight: "35px" }}>
                                <Card.Img variant="top" src={B} style={{ height: "380px" }} />
                                <Card.Body>
                                    <Card.Title>Sarah Olito</Card.Title>
                                    <Card.Text>
                                        She creates art and guess what? She's good at it. Check her stuff out.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <CardAnchor href="#"><BsFillPaletteFill /> deviantart.com/profile2192 - </CardAnchor>
                                    <CardAnchor href="#">  <BsInstagram />   @SallySarah2</CardAnchor>
                                    <BsUpload style={{ marginLeft: "24px", marginBottom: "7px" }} />
                                    <BsLink45Deg style={{ marginLeft: "24px", marginBottom: "7px" }} />
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: "60%", marginRight: "35px" }}>
                                <Card.Img variant="top" src={C} style={{ height: "400px" }} />
                                <Card.Body>
                                    <Card.Title>Jesu Tomito</Card.Title>
                                    <Card.Text>
                                       This guy looks like a South American Wolverine. Pretty narly. I bet his breath smells like beer all the time
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <CardAnchor href="#"><BsFillPaletteFill /> deviant.com/profilej28 - </CardAnchor>
                                    <CardAnchor href="#">  <BsInstagram />   @JesuArtist</CardAnchor>
                                    <BsUpload style={{ marginLeft: "24px", marginBottom: "7px" }} />
                                    <BsLink45Deg style={{ marginLeft: "24px", marginBottom: "7px" }} />
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: "60%", marginRight: "35px" }}>
                                <Card.Img variant="top" src={D} style={{ height: "400px" }} />
                                <Card.Body>
                                    <Card.Title>Carla Fritz</Card.Title>
                                    <Card.Text>
                                       Keep staring at her profile picture. Yep, you guessed right. 
                                       That is a tarantula on her face. She seems like good company
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <CardAnchor href="#"><BsFillPaletteFill /> deviant.com/profile1F42 - </CardAnchor>
                                    <CardAnchor href="#">  <BsInstagram />   @FritzFrenzy5</CardAnchor>
                                    <BsUpload style={{ marginLeft: "24px", marginBottom: "7px" }} />
                                    <BsLink45Deg style={{ marginLeft: "24px", marginBottom: "7px" }} />
                                </Card.Footer>
                            </Card>
                        </Col>

                    </Row>
                </div>
                {/* <div style={{ marginBottom: "1200px", paddingBottom: "200px" }}> </div> */}

            </div>
        </>
    );
}

export default FrontPageArtists;
