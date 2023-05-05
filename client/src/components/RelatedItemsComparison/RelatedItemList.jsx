import react, {useState, useEffect} from 'react';
import axios from 'axios';
import RelatedItem from './RelatedItem.jsx'

export default function RelatedItemList({relatedItemIdList}) {

  const [relatedItemList, setRelatedItemList] = useState([]);

//watch for relatedItemIdList when it has values
  useEffect(()=>{
//if true, for each id, request data from api
    if (relatedItemIdList.length !== 0) {
      //reset the item list
      setRelatedItemList([]);
      //want to store data in order
      let orderedItems = [];
      let orderedItemsCount = 0;
      //loop the id list
      relatedItemIdList.map((id, index) => {
        let url = '/products/' + id;
        axios.get(url)
          .then(result => {
            //when data stored, counter +1
            orderedItems[index] = result.data;
            orderedItemsCount++;
            //when all data has been store successfully, set the item list
            if (orderedItemsCount === relatedItemIdList.length) {
              setRelatedItemList(orderedItems);
            }

          } )
          .catch(err => console.err(err));
      })
    }
  }, [relatedItemIdList])

  //conditional rendering,
  //show the item cards when all the item get from the request
  if (relatedItemList.length !== 0) {
    return( <div>
    {
      relatedItemList.map((item, index) => <RelatedItem key={index} item={item}/>)
    }
    </div>)
  } else {
    //if not, put a spinner gif
    return (<div>
      <p>loading.....spinner (I am a GIF)</p>
      </div>)
  }
}
