// ICONS
import { SiteButton, SiteButtonPaint, SiteButtonLabel } from "./design";
import "./style.css"
import { BsFillArrowDownCircleFill } from "react-icons/bs";
function AniButton(props) {
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
      <a href={props.hrefTag} style={{display:"block", textAlign:"center",  }}>
        <button className="site-btnW"  >
          <span className="btn-paintW"></span>
          <span className="btn-paintW"></span>
          <span className="btn-paintW"></span>
          <span className="btn-paintW"></span>
          <span className="btn-labelW">{props.btnTitle}  <BsFillArrowDownCircleFill /></span>
        </button>
      </a>



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
