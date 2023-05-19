import react,  {useState, useEffect, useRef, useLayoutEffect}from 'react';

import OverviewStyleItem from './OverviewStyleItem.jsx'
export default function ({productStyles, currentStyle, setCurrentStyle}){
  const [styles, setStyles] = useState([]);

  useEffect(()=> {
    if(productStyles && productStyles.length === 1) {
      setStyles([productStyles[0]]);
      setCurrentStyle(productStyles[0]);
    }

    if(productStyles && productStyles.length > 1){

      setStyles([]);
      productStyles.map((style) => {

        setStyles(styles =>[...styles, style])

      });
    }


  },[productStyles])




  if (styles && productStyles !== undefined) {



    return (
      <div className="overviewStyleSelectionDiv">
        {styles.map((style, index)=> {
          return(
            <OverviewStyleItem key={index} style={style} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} productStyles={productStyles}/>

          )

        })}
      </div>

    )
  }

  return(
    <progress></progress>
  )
}