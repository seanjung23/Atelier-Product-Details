import react,  {useState, useEffect, useRef}from 'react';

export default function OverViewImage({currentStyle}){

  const [currentImage, setCurrentImage] = useState('');

  useEffect(()=> {
    if(currentStyle.style_id !== undefined){

      setCurrentImage(currentStyle.photos[0].url);
    }

  }, [currentStyle]);


  if(currentStyle.style_id  !== undefined){
    return (<div className="currentImageDiv">
      <img src={currentImage}></img>
    </div>)
  }

  return (
    <progress></progress>
  )
}