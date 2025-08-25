import styled, { keyframes } from "styled-components";

import "./style.css";

import { BsConeStriped } from "react-icons/bs"

export const UnderConstructionContainer = styled("div")`
  position: flex;
  display:block;
  flex-wrap: wrap;
  justify-items:center;
  justify-content: center;
  align-content:center;
  align-items:center;
  text-align: center;
  width: 100%;
  padding-top: 270px;
  height: 95vh;
  
`;

export const HeaderContainer = styled('div')`

display:inline-block;
background: repeating-linear-gradient(
        0deg,
        #0E0D0E 25%,
        #0E0D0E 50%,
        #171819 50%,
        #171819 75%
      );
    background-size: 10px 10px;
 
    overflow: hidden;
    color:white;
    padding: 20px;
    margin-left: 20px;
    margin-right: 20px;

`

export const Small = styled('small')`

 color:grey;
 font-style: italic;
 font-size: 16px;
 
  

`


function UnderConstruction() {
    return (
        <>
            <UnderConstructionContainer>
                < HeaderContainer>
                <h1 data-text="black mirror"><span>THIS PORTION OF THE SITE IS UNDER CONSTRUCTION.</span></h1>
       
                    
                    <Small> <BsConeStriped />{"  "}Check back in the near future for updates! {"  "}<BsConeStriped /> </Small>
                </HeaderContainer>

            </UnderConstructionContainer>




        </>
    );
}

export default UnderConstruction;