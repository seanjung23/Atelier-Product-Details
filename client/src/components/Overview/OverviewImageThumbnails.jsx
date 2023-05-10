import react,  {useState, useEffect, useRef}from 'react';

 function OverviewImageThumbnails({e, index, setImageIndex}){

  return (
    <div className="currentImageThumbnailsItems" onClick={() => {
      setImageIndex(index)}}>
      <img className="currentImageThumbnails" src={e}></img>
    </div>
  )
}
export default OverviewImageThumbnails;