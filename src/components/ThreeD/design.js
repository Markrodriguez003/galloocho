import styled from "styled-components";

export const ModelContainer = styled("div")`
  position: relative;
  margin-top: -55px;
  width: 18vw; // INCREASE THIS WHEN QMEDIA SCREEN BECOMES SMALLER
  height: 80vh;
  background-color: transparent;
  background-color: green;
  /* transform: rotate(180deg); */
  overflow: visible;

  @media (max-width: 758px) {
    margin-top: -395px;
    height: 60vh;
    width: 42vw;
  }
`;
