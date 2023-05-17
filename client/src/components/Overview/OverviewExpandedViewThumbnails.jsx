import react,  {useState, useEffect, useRef, useContext}from 'react';
import {InteractionAPIContext} from './../InteractionAPI.jsx';
export default function({e, indexe, index, setImageIndex, imageIndex, prevImageIndex, setPrevImageIndex, setProductImageThumbnailsYIndex, currentStyle, productImageThumbnailsYIndex, productImageThumbnails, imgRefState}){
  const interactionAPI = useContext(InteractionAPIContext);
  const thumbnailRef = useRef();
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

  const thumbnailOnClick = ()=>{
    interactionAPI("expanded view thumbnails", "overview");
    setPrevImageIndex(imageIndex);
    setImageIndex(index);
    setProductImageThumbnailsYIndex(-111 * (index-2) );
    imgRefState[0].current.style = "object-fit:contain; height: 90vh; width: 90vw;"
    imgRefState[1](!imgRefState[2]);
  }


  return (
    <div className="expandCurrentThumbnailsDiv hoverPointer" ref={thumbnailRef} onClick={thumbnailOnClick}>
      <img className="expandCurrentThumbnails" src={e}></img>
    </div>
  )
}