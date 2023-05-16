import react,  {useState, useEffect, useRef}from 'react';

export default function ({e, index}){



  return (
    <div className="expandCurrentImagesDiv">
            <img className="expandCurrentImage" src={e}></img>
          </div>
  )
}