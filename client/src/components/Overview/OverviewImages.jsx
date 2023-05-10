import react,  {useState, useEffect, useRef}from 'react';

function OverviewImages({e, index }){
  return(
    <div className="currentImagesItems">
      <img className="currentImages" src={e}></img>
    </div>
  )

}
export default OverviewImages;