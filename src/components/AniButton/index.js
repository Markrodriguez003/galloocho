// ICONS
import { SiteButton, SiteButtonPaint, SiteButtonLabel } from "./design";
import  "./style.css" 
import { BsFillArrowDownCircleFill } from "react-icons/bs";
function AniButton() {
  return (
    <>



    {/* Second Button animation idea */}
{/*     <SiteButton>
      <SiteButtonPaint>1</SiteButtonPaint>
      <SiteButtonPaint>2</SiteButtonPaint>
      <SiteButtonPaint>3</SiteButtonPaint>
      <SiteButtonPaint>4</SiteButtonPaint>
      <SiteButtonLabel>Click me!</SiteButtonLabel>
    </SiteButton>
 */}

    {/* Second Button animation old css style */}
    <button className="site-btn">
      <span className="btn-paint"></span>
      <span className="btn-paint"></span>
      <span className="btn-paint"></span>
      <span className="btn-paint"></span>
      <span className="btn-label">Seeawrawrasr Concept  <BsFillArrowDownCircleFill /></span>
    </button>


 
      {/* First Button animation idea */}
      {/* 
      <BtnContainer>
       { <WordMask>Example</WordMask>}
        <SiteButton>Example</SiteButton>
      </BtnContainer>
     */}

     {/* Second Button Annimation Idea */}
    
    
    
    </>
  );
}

export default AniButton;
