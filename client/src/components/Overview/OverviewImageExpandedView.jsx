import react,  {useState, useEffect, useRef}from 'react';
import OverviewExpandedViewThumbnails from './OverviewExpandedViewThumbnails.jsx';
import OverviewExpandedViewImages from './OverviewExpandedViewImages.jsx';
import {ChevronRightArrow, ChevronLeftArrow, ChevronUpArrow, ChevronDownArrow} from './../icons/OverviewArrowsSVG.jsx';
import OverviewDismissSVG from './../icons/OverviewDismissSVG.jsx';

export default function({ productImages, productImageThumbnails, productImageThumbnailsYIndex, setExpandViewDisplay, setImageIndex, imageIndex, setPrevImageIndex, prevImageIndex, setProductImageThumbnailsYIndex, currentStyle, rightButtonDisplay, leftButtonDisplay, expandedImageRef, eRef, setProductImagesButtonDisplay}){




  const leftButtonOnClick = (e) => {
    if (imageIndex >=1) {
      setPrevImageIndex(imageIndex);
      setImageIndex(imageIndex-1);

      if (imageIndex < productImageThumbnails.length-2){
        setProductImageThumbnailsYIndex(productImageThumbnailsYIndex+111);
      }
    }
  }

  const rightButtonOnClick = (e) => {
    if (imageIndex < productImages.length -1) {
      setPrevImageIndex(imageIndex);
      setImageIndex(imageIndex+1);

      if (imageIndex>1){
        setProductImageThumbnailsYIndex(productImageThumbnailsYIndex-111);
      }

    }
  }

  const dismissButtonOnClick =(e)=>{
    setExpandViewDisplay({"display":"none"})
  }

  const thumbnailCarouselRef = useRef();
  const thumbnailCarouselDivRef = useRef();
  const [imgRefState, setimgRefState] =useState();



  return (<>

      <div className="expandCurrentImagesCarouselDiv" >
        <div className="overviewLeftButtonDiv hoverPointer" onClick={leftButtonOnClick} style={leftButtonDisplay}><ChevronLeftArrow/></div>
        <div className="overviewRightButtonDiv hoverPointer" onClick={rightButtonOnClick} style={rightButtonDisplay}><ChevronRightArrow/></div>
        <div className="overviewDismissButtonDiv hoverPointer" onClick={dismissButtonOnClick}><OverviewDismissSVG/></div>
        <div className="expandCurrentImagesCarousel" ref={expandedImageRef}>
            {productImages.map((e, index) => {
              return (
                <OverviewExpandedViewImages e={e} index={index} eRef={eRef} setProductImagesButtonDisplay={setProductImagesButtonDisplay} imageIndex={imageIndex} productImages={productImages} setimgRefState={setimgRefState}/>
              )
            })}
        </div>

        </div>
      <div className="expandCurrentImageThumbnailsCarouselDiv" ref={thumbnailCarouselDivRef}>

        <div className="expandCurrentImageThumbnailsCarousel" ref={thumbnailCarouselRef}>
        {productImageThumbnails.map((e, index) => {
          return (
            <OverviewExpandedViewThumbnails e={e} key={index} index={index} setImageIndex={setImageIndex} imageIndex={imageIndex} setPrevImageIndex={setPrevImageIndex} prevImageIndex={prevImageIndex} setProductImageThumbnailsYIndex={setProductImageThumbnailsYIndex} currentStyle={currentStyle} productImageThumbnailsYIndex={productImageThumbnailsYIndex} productImageThumbnails={productImageThumbnails} imgRefState={imgRefState}/>

          )
        })}
        </div>

      </div>




  </>

  )

}