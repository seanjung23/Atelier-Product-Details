import react, {useState, useEffect} from 'react';
import axios from 'axios';

export default function RelatedItem({itemId}) {
  const [itemInfo, setItemInfo] = useState({});
  const [defaultStyle, setDefaultStyle] = useState({});
  const [itemRating, setItemRating] = useState(0);
  const [itemReady, setItemReady] = useState([]);

  useEffect(()=>{



    let url = '/products/' + itemId;

    axios.get(url)
      .then(result => {
        setItemInfo(result.data);
        setItemReady(itemReady => [...itemReady, result.data]);

      } )
      .catch(err => console.log(err));

    url = '/products/' + itemId + '/styles';

    axios.get(url)
      .then(result => {

        if(result.data.results.length === 1) {

          setDefaultStyle(result.data.results[0]);

        } else {

          for (var style of result.data.results) {
            if (style['default?']) {
              setDefaultStyle(style);

              break;
            }
          }
        }

        setItemReady(itemReady => [...itemReady, result.data]);


      } )
      .catch(err => console.log(err));

      url = '/reviews/meta';
      var params = {params:{product_id: itemId}}
      axios.get(url, params)
      .then(result => {

        var avgRating = 0;
        var count = 0;
        for(var i in result.data.ratings) {
          avgRating += i * result.data.ratings[i];
          count += parseInt(result.data.ratings[i]);
        }
        console.log(count);
        avgRating /= count;
        //for visual rating stars
        avgRating = Math.floor(4 * avgRating) /4;

        setItemRating(avgRating);
        setItemReady(itemReady => [...itemReady, result.data]);
      } )
      .catch(err => console.log(err));




  },[]);






  if (itemReady.length === 3) {
    return (
      <div>
        <p>{itemInfo.name}</p>
        <p>{itemInfo.category}</p>

        {defaultStyle.sale_price ? (<p> {defaultStyle.sale_price} <s>defaultStyle.original_price</s> </p>): (<p>{defaultStyle.original_price}</p>)}
      <p>{itemRating}</p>
      </div>
    )
  }

  return (
    <div>
      loading spinner (Im a GIF)
    </div>
  )


}