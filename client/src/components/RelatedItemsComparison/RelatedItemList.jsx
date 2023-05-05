import react, {useState, useEffect} from 'react';
import axios from 'axios';

export default function RelatedItemList({productInfo}) {

  const [currentProductId, setCurrentProductId] = useState(productInfo.id);

  // useEffect(()=> {
  //   if (productInfo.id !== undefined) {
  //     let url = '/products/' + currentProductId +'/related';
  //     axios.get(url)
  //       .then(result => console.log('123123213',result))
  //       .catch(err => console.log(err));
  //   }
  // },[productInfo]);

  return(
<>{currentProductId}</>

  )
}
