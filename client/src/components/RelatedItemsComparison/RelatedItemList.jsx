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
    //0: both not display
    //1: only dislpay left
    //2: only display right
    //3: both display
    const [showButtonDisplay, setShowButtonDisplay] = useState(2);


    useEffect(()=> {

      if (showButtonDisplay === 0){
        setLeftButtonDisplay({"display":"none"});
        setRightButtonDisplay({"display":"none"});
      } else if (showButtonDisplay === 1) {
        setLeftButtonDisplay({"display":"inline"});
        setRightButtonDisplay({"display":"none"});
      } else if (showButtonDisplay === 2) {
        setLeftButtonDisplay({"display":"none"});
        setRightButtonDisplay({"display":"inline"});
      } else {
        setLeftButtonDisplay({"display":"inline"});
        setRightButtonDisplay({"display":"inline"});
      }

    }, [showButtonDisplay])

    const rightButtonOnClick =(e)=> {

      setListTranslateXIndex(listTranslateXIndex-184);

    }

    const leftButtonOnClick =(e)=> {

      setListTranslateXIndex(listTranslateXIndex+184);

    }

    useEffect(()=> {
      if (listTranslateXIndex <= (itemListRef.current.offsetWidth - carouselRef.current.offsetWidth )) {
        setListTranslateXIndex(itemListRef.current.offsetWidth - carouselRef.current.offsetWidth );
        setShowButtonDisplay(1);
        carouselRef.current.style.transform = `translateX(${listTranslateXIndex}px)`

      } else if(listTranslateXIndex >= 0 ){
        setListTranslateXIndex(0);
        setShowButtonDisplay(2);
        carouselRef.current.style.transform = `translateX(${listTranslateXIndex}px)`
      } else {
        setShowButtonDisplay(3);
        carouselRef.current.style.transform = `translateX(${listTranslateXIndex}px)`
      }


    }, [listTranslateXIndex])


    return(<div className="relatedItemsList" ref={itemListRef}>
      <div className="relatedItemLeftButtonDiv" onClick={leftButtonOnClick} style={leftButtonDisplay}> <ChevronLeftArrow/></div>
      <div className="relatedItemRightButtonDiv" onClick={rightButtonOnClick} style={rightButtonDisplay}><ChevronRightArrow/></div>
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
