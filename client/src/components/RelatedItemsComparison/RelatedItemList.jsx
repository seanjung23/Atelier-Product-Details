import react, {useState, useEffect} from 'react';
import axios from 'axios';
import RelatedItem from './RelatedItem.jsx'

export default function RelatedItemList({relatedItemIdList}) {

  if (relatedItemIdList.length !== 0) {

    return( <div>
    {
      relatedItemIdList.map((itemId, index) => <RelatedItem key={index} itemId={itemId}/>)
    }
    </div>)
  }

  return (<div>
    <p>loading.....spinner (I am a GIF)</p>
    </div>)


}
