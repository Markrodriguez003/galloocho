import styled from "styled-components";

// export const ModelContainer = styled("div")`
//   position: relative;
//   margin-top: -55px;
//   width: 18vw; // INCREASE THIS WHEN QMEDIA SCREEN BECOMES SMALLER
//   height: 60vh;
//   background-color: transparent;
//   /* background-color: green; */
//   /* transform: rotate(180deg); */
//   overflow: visible;

//   @media (max-width: 758px) {
//     margin-top: -395px;
//     height: 60vh;
//     width: 42vw;
//   }
// `;

export const ModelContainer = styled("div")`
  position: relative;
  display: block;
  width: 18vw; // INCREASE THIS WHEN QMEDIA SCREEN BECOMES SMALLER
  height: 62vh;
  margin-left: 120px;
  margin-top: -125px;
  background-color: transparent;
/*    background-color: green; */
  /* transform: rotate(180deg); */
  overflow: visible;
  padding-left: auto;
  padding-right: auto;

  @media (max-width: 1109px) {
    margin-top: -2255px;
    padding-right: 820px;
    margin-bottom: 1200px;
    height: 520vh;
    width: 422vw;
  }
`;
 
