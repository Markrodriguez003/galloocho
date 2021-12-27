import styled from "styled-components";
import {Navbar } from 'react-bootstrap';


// CSS
export const Footer = styled(Navbar)`
 display: flex;
 position:"relative";
  background-color:#2f3030;
  padding: 33px;
  position: relative;
  left: 0;
  /* bottom: -500px; */
  bottom: 0;
  padding-top: "200px";
  margin-left:auto;
  margin-right:auto;
  text-align:"center";
  align-content:"center";
  justify-content:"center";
  align-items:"center";

`;

export const FooterAnchor = styled('a')`
text-decoration: none;
  color: white;
  font-size: 28px;
  padding-top: 10.5px;
  -webkit-transition: all 0.5s ease; /* Safari and Chrome */
    -moz-transition: all 0.5s ease; /* Firefox */
    -ms-transition: all 0.5s ease; /* IE 9 */
    -o-transition: all 0.5s ease; /* Opera */
    transition: all 0.5s ease;
  

  &:hover {
  /* color: lightpink; */
  color: #fc6a6a;
   
  }
`

export const SocialMediaBar = styled("div")`
  color: white;
  /* background-color:red; */
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  margin-top: 16px;
`;

export const SocialMediaItem = styled("a")`
  text-decoration: none;
  padding: 12px;
  font-size: 30px;
  color: white;
  /* -webkit-transition: all 0.3s ease;  
    -moz-transition: all 0.3s ease;  
    -ms-transition: all 0.3s ease;  
    -o-transition: all 0.3s ease;  
    transition: all 0.3s ease; */
  &:hover {
  /* color: lightpink; */
  color: #fc6a6a;
  /* font-size: 38px; */
}
`;

export const MenuHeaderIcon = styled("img")`
  width: 160px;
  height: 195px;
  background-color: transparent;
  color: white;
  padding: 4px;
  margin-top: 40px;
  margin-left: 220px;
  margin-right: 45px;
  margin-bottom: 8px;
`;

export const SmallText = styled('small')`
color:"grey";
background-color:#2f3030;
text-align:"center";
padding:22px;


`