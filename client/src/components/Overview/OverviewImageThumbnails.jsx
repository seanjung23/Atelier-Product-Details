import react,  {useState, useEffect, useRef, useContext}from 'react';
import {InteractionAPIContext} from './../InteractionAPI.jsx';
 function OverviewImageThumbnails({e, index, setImageIndex, imageIndex, prevImageIndex, setPrevImageIndex, setProductImageThumbnailsYIndex, currentStyle}){
  const thumbnailRef = useRef();
  const interactionAPI = useContext(InteractionAPIContext);
  useEffect(()=> {
    if (thumbnailRef) {

      if (prevImageIndex === index) {
        thumbnailRef.current.style.border = "1px solid #ddd";
      }
      if (imageIndex === index) {
        thumbnailRef.current.style.border = "3px solid grey";
      }
    }

  }, [imageIndex])

  useEffect(()=> {
    setPrevImageIndex(-1);
    thumbnailRef.current.style.border = "1px solid #ddd";
    setImageIndex(0);
    if(index=== 0){
      thumbnailRef.current.style.border = "3px solid grey";
    }
  }, [currentStyle])


  return (
    <div className="currentImageThumbnailsItems  hoverPointer" ref={thumbnailRef} onClick={() => {
      interactionAPI('overview default image thumbnail button', 'overview')
      setPrevImageIndex(imageIndex);
      setImageIndex(index);}}>
      <img className="currentImageThumbnails" src={e}></img>
    </div>
  )
}
export default OverviewImageThumbnails;