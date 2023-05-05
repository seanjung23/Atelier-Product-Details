import react, {useState, useEffect} from 'react';
import RelatedItemList from './RelatedItemList.jsx';
import axios from 'axios';
// Xinhuang
// Remember sync and Git pull

const RelatedItemsComparison = ({productInfo}) => {

const [relatedItemIdList, setRelatedItemIdList] = useState([]);

//watch for productInfo when it has values
useEffect(()=>{
//if true, request the data from api and set relatedItemIdList
  if (productInfo.id !== undefined) {
    let url = '/products/' + productInfo.id +'/related';

    axios.get(url)
      .then(result => {

        let outArray = [];

        result.data.map(i =>{
          if (!outArray.includes(i)) {
            outArray.push(i);
          }
        });

        setRelatedItemIdList(outArray);

      })
      .catch(err => console.log(err));
  }

}, [productInfo])

  return(
    <div>
      <h1>Related Items Section</h1>
      <RelatedItemList relatedItemIdList={relatedItemIdList}/>
    </div>
  )
}

export default RelatedItemsComparison;