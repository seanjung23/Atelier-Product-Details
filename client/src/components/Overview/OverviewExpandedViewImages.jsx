import react,  {useState, useEffect, useRef}from 'react';

export default function ({e, index, eRef, setProductImagesButtonDisplay, imageIndex,productImages, setimgRefState}){
  const imgRef = useRef();
  const imgDivRef = useRef();
  const [zoomIn, setZoomIn] = useState(false);

  const imageDivOnClick = () => {
    setZoomIn(!zoomIn);
  }

  useEffect(()=> {
    if (zoomIn) {
      imgRef.current.style = "object-fit:fill; height: 225vh; width: 225vw;"
      setProductImagesButtonDisplay(0);
    } else {
      imgRef.current.style = "object-fit:contain; height: 90vh; width: 90vw;"
      if(imageIndex === 0){
        setProductImagesButtonDisplay(2);
      } else if(imageIndex === productImages.length-1){
        setProductImagesButtonDisplay(1);
      } else {
        setProductImagesButtonDisplay(3);
      }
    }
  },[zoomIn])

  const imgOnMouseMove = (e)=>{

    if (zoomIn) {
      imgRef.current.style.cursor = "zoom-out";
      let x = e.clientX - eRef.current.offsetLeft;
      let y = e.clientY - eRef.current.offsetTop -5;
      x *= 1.5;
      y *= 1.5;

      imgRef.current.style.transform = `translate(${-x}px, -${y}px)`
      setimgRefState([imgRef, setZoomIn, zoomIn]);

    }

  }

  return (
    <div className="expandCurrentImagesDiv" onMouseMove={imgOnMouseMove} ref={imgDivRef}>
      <img className="expandCurrentImage"   onClick={imageDivOnClick}  src={e} ref={imgRef}></img>
    </div>
  )
}