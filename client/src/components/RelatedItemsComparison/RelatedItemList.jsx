import react, {useState, useEffect, useRef, useLayoutEffect} from 'react';
import axios from 'axios';
import RelatedItem from './RelatedItem.jsx'
import {ChevronLeftArrow, ChevronRightArrow} from './../icons/RelatedItemsArrowsSVG.jsx'

export default function RelatedItemList({relatedItemIdList}) {



  if (relatedItemIdList.length !== 0) {

    const [listTranslateXIndex, setListTranslateXIndex] = useState(0);
    const [windowWidth, setWidowWidth] = useState(0);
    const [leftButtonDisplay, setLeftButtonDisplay] = useState({"display":"inline"});
    const [rightButtonDisplay, setRightButtonDisplay] = useState({"display":"inline"});
    const carouselRef = useRef();
    const itemListRef = useRef();
    const [carouselWidth, setCarouselWidth] = useState(0);

    useEffect(()=> {

      if (listTranslateXIndex === 0){
        setLeftButtonDisplay({"display":"none"});
      } else {
        setLeftButtonDisplay({"display":"inline"});
      }

      if (listTranslateXIndex === carouselWidth){
        setRightButtonDisplay({"display":"none"});
      } else {
        setRightButtonDisplay({"display":"inline"});
      }


    }, [listTranslateXIndex, carouselWidth])

    window.addEventListener('resize', ()=>{
      setWidowWidth(window.innerWidth);

    })

    useEffect(()=> {
      if (carouselRef.current.offsetWidth < itemListRef.current.offsetWidth) {
        console.log(itemListRef.current.offsetWidth);

      }
    }, [windowWidth])

    return(<div className="relatedItemsList" ref={itemListRef}>
      <div className="relatedItemLeftButtonDiv" style={leftButtonDisplay}> <ChevronLeftArrow/></div>
        <div className="relatedItemRightButtonDiv" style={rightButtonDisplay}><ChevronRightArrow/></div>
      <div className="relatedItemCarouselDiv" ref={carouselRef} >

        {
          relatedItemIdList.map((itemId, index) => <RelatedItem key={index} itemId={itemId} />)
        }

      </div>
    </div>)
  }

  return (<div>
    <progress></progress>
    </div>)


}
