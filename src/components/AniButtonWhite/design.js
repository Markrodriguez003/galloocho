import styled, { css, keyframes } from "styled-components";

/* Second Button CSS animation */

export const SiteButton = styled("button")`
  /* appearance: none; */
  padding: 20px 30px;
  font-size: 28px;
  border-radius: 59px;
  /* border: 2px solid black; */
  /* color: tomato; */
  background-color: transparent;
  /* position: absolute; */
  cursor: pointer;
  overflow: hidden;
  /* top: 90%;
  left: 20%; */
  /* transform: translate(-50%, -50%); */

  &:hover {
    span:nth-child(1) {
  
      transform: translate(-35px, -20px) rotate (-20px) scale(1, 1);
    }

    span:nth-child(2) {
  
      transform: translate(21px, -20px) rotate (20px) scale(1, 1);
    }
    span:nth-child(3) {
   
      transform: translate(81px, -20px) rotate (-20px) scale(1, 1);
    }

    span:nth-child(4) {
 
      transform: translate(131px, -20px) rotate (20px) scale(1, 1);
    }
  }
`;

export const SiteButtonPaint = styled("span")`
  position: absolute;
  top: 0;
  left: 0;
 
  width: 100px;
  height: 120px;
  
  font-size: 20px;
  transition: transform 0.4s ease;

  &: {
    :nth-child(1) {
  
      transform-origin: 50% 0;
      transform: translate(-35px, 20px) rotate(-20deg) scale (1, 0);
    }
    :nth-child(2) {
 
      transform-origin: 50% 100%;
      transform: translate(21px, -20px) rotate(20deg) scale (1, 0);
      transition-delay: 0.2s;
    }

    :nth-child(3) {
      transform-origin: 50% 0%;
      transform: translate(21px, -20px) rotate(-20deg) scale (1, 0);
      transition-delay: 0.4s;
    }
    :nth-child(4) {
      transform-origin: 50% 100%;
      transform: translate(131px, -20px) rotate(20deg) scale (1, 0);
      transition-delay: 0.7s;
    }
  }
`;

export const SiteButtonLabel = styled("span")``;
