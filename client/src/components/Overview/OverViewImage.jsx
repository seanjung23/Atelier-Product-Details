import react,  {useState, useEffect, useRef}from 'react';

export default function OverViewImage({currentStyle}){

  const [currentImage, setCurrentImage] = useState('');
  const [productImages, setProductImages] = useState([]);
  const [productImageThumbnails, setProductImageThumbnails] = useState([]);
  useEffect(()=> {
    if(currentStyle.style_id !== undefined){
      currentStyle.photos.map(e => {
        setProductImages(productImages => [...productImages, e.url]);
      })
      currentStyle.photos.map(e => {
        setProductImageThumbnails(productImageThumbnails => [...productImageThumbnails, e.thumbnail_url]);
      })

      setCurrentImage(currentStyle.photos[0].url);

    }

  }, [currentStyle]);


  if(currentImage  !== undefined){
    return (<>

      <div className="currentImageThumbnailsCarousel">
        {productImageThumbnails.map((e) => {
          return (
              <div className="currentImageThumbnailsItems">
                <img className="currentImageThumbnails" src={e}></img>
              </div>
          )
        })}
      </div>
      <div className="currentImagesCarousel">
        {productImages.map((e) => {
            return (
                <div className="currentImagesItems">
                  <img className="currentImages" src={e}></img>
                </div>
            )
          })}
      </div>
    </>)
  }

  return (
    <progress></progress>
  )
}