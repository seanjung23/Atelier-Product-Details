import react,  {useState, useEffect, useRef}from 'react';

export default function({e, index}){


  return (
    <div className="expandCurrentThumbnailsDiv hoverPointer" >
      <img className="expandCurrentThumbnails" src={e}></img>
    </div>
  )
}