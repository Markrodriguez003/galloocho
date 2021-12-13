// import '../MainHeader/MainHeader.css'
import { useState } from 'react';
import styled from 'styled-components'
// CSS 

import { Button, Container, Carousel, CarouselItem } from 'react-bootstrap';
// FONTS

// IMAGES
import rosterLogo from "../../imgs/logo/roosterE.png";
import heroTextureBG from "../../imgs/textures/TextureA.jpg"


// CSS
const CarouselContainer = styled(Container)`
padding-top: 120px;
padding-left:auto;
padding-right:auto;
text-align: center;
  
   

`
const HeroContainer = styled(Container)`
  
    width:100%;
    height: 1050px;
    background-image: url(${heroTextureBG});
    /* background-color: darkblue; */
    /* background-color: #07204a; */
    background-color: #041b42;
    background-blend-mode: screen;
    background-position: center;  
    background-size: cover; 
    background-blend-mode: exclusion;
    /* INFO --> https://css-tricks.com/almanac/properties/b/background-blend-mode/ */
 
`;

const CarouselImg = styled('img')`
width: 780px;
height: 800px;

`


function Hero() {

    return (
        <>

            <HeroContainer fluid >
                <CarouselContainer>

                    {/* ROOSTER ITEMS */}
                    <Carousel>
                        <Carousel.Item>
                            <CarouselImg

                                src="https://m.media-amazon.com/images/I/918ZqRvCzJL._AC_SL1500_.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <CarouselImg

                                src="https://m.media-amazon.com/images/I/917XBCENBXL._AC_SL1500_.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <CarouselImg

                                src="https://m.media-amazon.com/images/I/81wOz4LcEaL._AC_SL1500_.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>

                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </CarouselContainer>
            </HeroContainer>



        </>


    );
}

export default Hero;

