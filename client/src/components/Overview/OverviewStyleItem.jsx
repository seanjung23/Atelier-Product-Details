import react,  {useState, useEffect, useRef, useLayoutEffect,  useContext}from 'react';
import OverviewCheckMark from './../icons/OverviewCheckMark.jsx'
import {InteractionAPIContext} from './../InteractionAPI.jsx';
export default function({style, currentStyle, setCurrentStyle, productStyles}){
  const interactionAPI = useContext(InteractionAPIContext);
  const styleRef = useRef();
  const checkRef = useRef();

  useEffect(()=> {
    if(currentStyle.style_id !== undefined){
      if (style.style_id === currentStyle.style_id || productStyles.length === 1) {
        checkRef.current.style.visibility = 'visible';
        styleRef.current.style.border = '#64B735 solid';
      } else {
        styleRef.current.style.border = '#613B6F solid';
        checkRef.current.style.visibility = 'hidden';
      }
    }
  },[checkRef, currentStyle, style]);

  const styleOnClick = (e) => {
    interactionAPI('overview style thumbnail', 'overview')
    if (style.style_id !== currentStyle.style_id) {
      setCurrentStyle(style);
    }
  }

  return(
    <div className="overviewStyleDiv" onClick={styleOnClick}>
      <div className="overViewCheckMarkDiv" ref={checkRef}>
          <OverviewCheckMark />
        </div>
      <div className="overviewStyleThumbnailsDiv  hoverPointer" ref={styleRef}>
        <img className="overviewStyleThumbnails" src={style.photos[0].thumbnail_url}></img>
      </div>
    </div>
  )
}