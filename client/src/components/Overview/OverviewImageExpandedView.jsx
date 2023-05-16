import react,  {useState, useEffect, useRef}from 'react';
import OverviewExpandedViewThumbnails from './OverviewExpandedViewThumbnails.jsx';
import OverviewExpandedViewImages from './OverviewExpandedViewImages.jsx';
import {ChevronRightArrow, ChevronLeftArrow, ChevronUpArrow, ChevronDownArrow} from './../icons/OverviewArrowsSVG.jsx';
import OverviewDismissSVG from './../icons/OverviewDismissSVG.jsx';

export default function({productImages, productImageThumbnails, setExpandViewDisplay, setImageIndex, imageIndex, setPrevImageIndex, prevImageIndex, setProductImageThumbnailsYIndex, currentStyle}){

  const [rightButtonDisplay, setRightButtonDisplay] = useState({"display":"inherit"});
  const [leftButtonDisplay, setLeftButtonDisplay] = useState({"display":"inherit"});

  const [expandedImagesButtonDisplay, setExpandedImagesButtonDisplay] = useState(2);
  useEffect(()=>{
    if (expandedImagesButtonDisplay === 0){
      setLeftButtonDisplay({"display":"none"});
      setRightButtonDisplay({"display":"none"});
    } else if (expandedImagesButtonDisplay === 1) {
      setLeftButtonDisplay({"display":"inherit"});
      setRightButtonDisplay({"display":"none"});
    } else if (expandedImagesButtonDisplay === 2) {
      setLeftButtonDisplay({"display":"none"});
      setRightButtonDisplay({"display":"inherit"});
    } else {
      setLeftButtonDisplay({"display":"inherit"});
      setRightButtonDisplay({"display":"inherit"});
    }


  },[expandedImagesButtonDisplay]);



  const leftButtonOnClick = (e) => {
    // if (imageIndex >=1) {
    //   setPrevImageIndex(imageIndex);
    //   setImageIndex(imageIndex-1);
    //   if (imageIndex < productImageThumbnails.length-2){
    //     setProductImageThumbnailsYIndex(productImageThumbnailsYIndex+111);
    //   }


    // }
  }

  const rightButtonOnClick = (e) => {
    // if (imageIndex < productImages.length -1) {
    //   setPrevImageIndex(imageIndex);
    //   setImageIndex(imageIndex+1);
    //   if (imageIndex>1){
    //     setProductImageThumbnailsYIndex(productImageThumbnailsYIndex-111);
    //   }

    // }
  }

  const dismissButtonOnClick =(e)=>{
    setExpandViewDisplay({"display":"none"})
  }

  return (<>

      <div className="expandCurrentImagesCarousel">
        <div className="overviewLeftButtonDiv hoverPointer" onClick={leftButtonOnClick} style={leftButtonDisplay}><ChevronLeftArrow/></div>
        <div className="overviewRightButtonDiv hoverPointer" onClick={rightButtonOnClick} style={rightButtonDisplay}><ChevronRightArrow/></div>
        <div className="overviewDismissButtonDiv hoverPointer" onClick={dismissButtonOnClick}><OverviewDismissSVG/></div>
        {productImages.map((e, index) => {
        return (
          <OverviewExpandedViewImages e={e} index={index}/>
        )
      })}
      </div>
      <div className="expandCurrentImageThumbnailsCarouselDiv">

        <div className="expandCurrentImageThumbnailsCarousel">
        {productImageThumbnails.map((e, index) => {
          return (
            <OverviewExpandedViewThumbnails e={e} index={index}/>

          )
        })}
        </div>

      </div>




  </>

  )

}