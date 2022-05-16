import React, { useState } from "react";
// ICONS
import { BsFacebook, BsInstagram, BsFillEnvelopeFill, BsTwitter, BsFillTelephoneFill } from "react-icons/bs";
import rosterLogo from "../../imgs/logo/RosterLogoAInverted.png";

import { SocialMediaContainer, SocialMediaItem, MiniBtnContainer } from "./design";
function SocialMediaBar() {

    return (
        <>

            <SocialMediaContainer id="socialmedia">
                <MiniBtnContainer>
                    <SocialMediaItem href="https://www.facebook.com/GalloOchoMiami ">
                        <BsFacebook />
                    </SocialMediaItem>
                    <SocialMediaItem href="https://www.instagram.com/gallo.ocho/?hl=en">
                        {" "}
                        <BsInstagram />
                    </SocialMediaItem>
                    <SocialMediaItem href="https://www.twitter.com/galloocho">
                        {" "}
                        <BsTwitter />
                    </SocialMediaItem>
                </MiniBtnContainer>
                <SocialMediaItem href="mailto:Ernesto@galloocho.com">
                    {" "}
                    <BsFillEnvelopeFill /> <small style={{ fontSize: "20px" }}>Ernesto@Galloocho.com</small>
                </SocialMediaItem>
                <SocialMediaItem href="tel:+13059827264">
                    {" "}
                    <BsFillTelephoneFill /> <small style={{ fontSize: "20px" }}>+1 (305) 982-7264</small>
                </SocialMediaItem>
            </SocialMediaContainer>
        </>
    )

}

export default SocialMediaBar;
