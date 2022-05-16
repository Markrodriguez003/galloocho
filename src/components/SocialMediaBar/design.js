import styled, { css } from "styled-components";


export const SocialMediaContainer = styled("div")`
  color: white;
  /* background-color:red; */
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top:22px;
  background-color:transparent;

  @media (max-width: 654px) {
    font-size: 18px;
    flex-direction:column;
    
  }
 
`;

export const SocialMediaItem = styled("a")`
  text-decoration: none;
  padding:8px;
  margin-left: 18px;
  font-size: 20px;
  color: white;
  &:hover {
    color: #fc6a6a;
  }
`;

export const MiniBtnContainer = styled("div")`
display:flex;

@media (max-width: 654px) {     
    flex-direction:row;
    margin-left: 8px;

  
    
  }
`