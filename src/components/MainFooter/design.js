import styled from "styled-components";
import { Navbar } from "react-bootstrap";

// CSS
export const Footer = styled("div")`
  display: block;
  position: relative;
  background-color: #1f1f1f;
  width: 100%;
  height: 100%;
  padding: 10px;
  padding-left: 20px;
  margin-bottom: 10px;
  margin-top: 0px;
  text-align: center;
  border-width: 14px;
  border-top-style: solid;
  border-image: repeating-radial-gradient(
      circle at -12px,
      white,
      transparent 2px,
      white 8px,
      white 2px
    )
    26;
`;

export const FooterAnchor = styled("a")`
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
    color: #fc6a6a;
  }
`;

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
  &:hover {
    color: #fc6a6a;
  }
`;

export const MenuHeaderIcon = styled("img")`
  width: 100px;
  height: 125px;
  background-color: transparent;
  color: white;
  /* padding: 4px; */
  margin-top: 10px;
  margin-bottom: 8px;
  margin-left: 25px;
`;

export const SmallText = styled("small")`
  color: "grey";
  background-color: #1f1f1f;
  text-align: "center";
  padding: 22px;
`;
