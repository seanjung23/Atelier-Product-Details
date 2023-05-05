import react, {useState, useEffect} from 'react';
import axios from 'axios';

export default function RelatedItem({itemId}) {
  const [itemInfo, setItemInfo] = useState({});
  const [defaultStyle, setDefaultStyle] = useState({});
  const [defaultImgSrc, setDefaultImgSrc] = useState('');
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
          setDefaultImgSrc(result.data.results[0].photos[0].url)
        } else {

          for (var style of result.data.results) {
            if (style['default?']) {
              setDefaultStyle(style);
              setDefaultImgSrc(style.photos[0].url)

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
      <div style={({display: "inline-block"})}>
        <svg url="./star-half.svg"></svg>
        <img src={defaultImgSrc} style={({width: "100px", height: "100px"})}></img>
        <p>{itemInfo.name}</p>
        <p>{itemInfo.category}</p>

      {defaultStyle.sale_price ? (<p> {defaultStyle.sale_price} <s>defaultStyle.original_price</s> </p>): (<p>{defaultStyle.original_price}</p>)}
      {itemRating !== 0? (<p>{itemRating}</p>) : <p></p>}
      </div>
    )
  }

  return (
    <div>
      loading spinner (Im a GIF)
    </div>
  )


}