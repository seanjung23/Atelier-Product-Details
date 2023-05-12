import react from 'react';
import OverviewItemRating from './OverviewItemRating.jsx'
import OverviewProductStyles from './OverviewProductStyles.jsx';
import OverviewAddToCart from './OverviewAddToCart.jsx';
export default function overviewProductInformation({setItemInfo, itemInfo, productStyles, itemRating, setCurrentStyle, currentStyle}) {
  const {name, slogan, description, category, features} = itemInfo;

  return(
  <>
  <div className="overviewRating">
    <OverviewItemRating itemRating={itemRating}/>
    </div>
    <div className="overviewCategoryDiv">
      <p className="overviewCategory"> {category}</p>
    </div>

    <div className="overviewNameDiv">
      <p className="overviewName"> {name}</p>
    </div>

    <div className="overviewPriceDiv">
      {currentStyle.sale_price ? (<p  className="overviewPrice"> ${currentStyle.sale_price} <s>${currentStyle.original_price}</s> </p>) : (<p  className="overviewPrice">${currentStyle.original_price}</p>)}
    </div>
    <div className="overviewStylesDiv">
      <p className="overviewCurrentStyleName"><span>STYLE >  </span>{currentStyle.name}</p>
      <OverviewProductStyles productStyles={productStyles[0]} setCurrentStyle={setCurrentStyle} currentStyle={currentStyle}/>
    </div>
    <div className="overviewAddToCartDiv">
        <OverviewAddToCart currentStyle={currentStyle}/>
      </div>

  </>




  )
}