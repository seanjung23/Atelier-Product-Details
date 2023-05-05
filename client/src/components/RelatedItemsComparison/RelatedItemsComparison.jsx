import react, {useState, useEffect} from 'react';
import RelatedItemList from './RelatedItemList.jsx'
// Xinhuang
// Remember sync and Git pull

const RelatedItemsComparison = ({productInfo}) => {


  return(
    <div>
      <h1>Related Items Section</h1>
      <RelatedItemList productInfo={productInfo}/>
    </div>
  )
};

export default RelatedItemsComparison;