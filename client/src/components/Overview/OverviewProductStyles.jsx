import react,  {useState, useEffect, useRef, useLayoutEffect}from 'react';

import OverviewStyleItem from './OverviewStyleItem.jsx'
export default function ({productStyles, currentStyle, setCurrentStyle}){



  if (productStyles !== undefined) {

    let styles = [];
    productStyles.map((style) => {

      styles.push(style);

    })

    return (
      <div className="overviewStyleSelectionDiv">
        {styles.map((style, index)=> {
          return(
            <OverviewStyleItem style={style} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle}/>

          )

        })}
      </div>

    )
  }

  return(
    <progress></progress>
  )
}