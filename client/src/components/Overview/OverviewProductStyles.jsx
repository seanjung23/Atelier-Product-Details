import react,  {useState, useEffect, useRef, useLayoutEffect}from 'react';

export default function ({productStyles}){



  if (productStyles !== undefined) {

    var styles = [];
    productStyles.map((style) => {

      let temp = [style.style_id, style.name, style.photos[0].thumbnail_url];
      // setStyles(styles => [...styles, temp]);
      styles.push(temp);

    })

    return (
      <div className="overviewStyleSelectionDiv">
        {styles.map((style, index)=> {
          return(
            <div className="overviewStylesDiv">
              <img className="overviewStyles" src={style[2]}></img>
            </div>

          )

        })}
      </div>

    )
  }

  return(
    <progress></progress>
  )
}