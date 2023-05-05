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


  if (itemInfo.id !== undefined) {
    return (
      <div>
        <p>{itemInfo.name}</p>
      </div>
    )
  }

  return (
    <div>
      loading spinner (Im a GIF)
    </div>
  )


}