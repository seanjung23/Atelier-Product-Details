import react from 'react';
import OverviewItemRating from './OverviewItemRating.jsx'
import OverviewProductStyles from './OverviewProductStyles.jsx';
import OverviewAddToCart from './OverviewAddToCart.jsx';
export default function overviewProductInformation({itemReviews, setItemInfo, itemInfo, productStyles, itemRating, setCurrentStyle, currentStyle}) {
  const {name, slogan, description, category, features} = itemInfo;

  return(
  <>
  <div className="overviewRating">
    <OverviewItemRating itemReviews={itemReviews} itemRating={itemRating}/>
    </div>
    <div className="overviewCategoryDiv">
      <p className="overviewCategory"> Category: &nbsp;<code>{category}</code></p>
    </div>

    <div className="overviewNameDiv">
      <p className="overviewName"> Product: &nbsp;<code>{name}</code></p>
    </div>

    <div className="overviewPriceDiv">
      {currentStyle.sale_price ? (<> Price: &nbsp; <p  className="overviewPrice" style={{color:"red", display:"inline"}}> ${currentStyle.sale_price}  </p> <p style={{display:"inline"}}><s>${currentStyle.original_price}</s></p></>) : (<p  className="overviewPrice"> Price: &nbsp;${currentStyle.original_price}</p>)}
    </div>
    <div className="overviewStylesDiv">
      <p className="overviewCurrentStyleName"><span>STYLE&nbsp; > &nbsp; </span><code>{currentStyle.name}</code></p>
      <OverviewProductStyles productStyles={productStyles[0]} setCurrentStyle={setCurrentStyle} currentStyle={currentStyle}/>
    </div>
    <div className="overviewAddToCartDiv">
        <OverviewAddToCart currentStyle={currentStyle}/>
      </div>

  </>




  )
}