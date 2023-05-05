import react, {useState, useEffect} from 'react';
import axios from 'axios';

export default function RelatedItem({itemId}) {
  const [itemInfo, setItemInfo] = useState({});

  useEffect(()=>{

    let url = '/products/' + itemId;

    axios.get(url)
      .then(result => {
        setItemInfo(result.data);
      } )
      .catch(err => console.err(err));

  },[])

  useEffect(()=>{

    let url = '/products/' + itemId + '/styles';

    axios.get(url)
      .then(result => {
        console.log('styles: ', result.data)
      } )
      .catch(err => console.err(err));

  },[itemInfo])


  console.log(itemInfo);
  if (itemInfo.id !== undefined) {
    return (
      <div>
        <p>{itemInfo.name}</p>
        <p>{itemInfo.category}</p>
      </div>
    )
  }

  return (
    <div>
      loading spinner (Im a GIF)
    </div>
  )


}