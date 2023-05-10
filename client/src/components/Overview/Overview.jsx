import react,  {useState, useEffect, useRef, useLayoutEffect}from 'react';
import axios from 'axios';
import OverViewImage from './OverViewImage.jsx';
// Group Effort

const Overview = ({productInfo}) => {
  const [itemInfo, setItemInfo] = useState(productInfo);
  const [defaultStyle, setDefaultStyle] = useState({});
  const [defaultImgSrc, setDefaultImgSrc] = useState('');
  const [itemRating, setItemRating] = useState(0);
  const [productStyles, setProductStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});
  const itemId = productInfo.id;


  useEffect(()=>{

    let url = '/products/' + itemId + '/styles';

    axios.get(url)
      .then(result => {
        setProductStyles(productStyles=> [...productStyles, result.data.results]);

        console.log('product styles ', result.data.results);

        if(result.data.results.length === 1) {

          setDefaultStyle(result.data.results[0]);
          setDefaultImgSrc(result.data.results[0].photos[0].url)
        } else {

          for (var style of result.data.results) {
            if (style['default?']) {
              setDefaultStyle(style);
              setCurrentStyle(style);
              setDefaultImgSrc(style.photos[0].url)

              break;
            }
          }
        }

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

        setItemRating(avgRating);
      } )
      .catch(err => console.log(err));


  },[]);




  return(
    <div>
      <h1>Overview Section</h1>
      <div className="currentStyleDiv">
        <div className="overviewImageDiv">
          <OverViewImage currentStyle={currentStyle}/>
        </div>

      </div>
    </div>
  )
};

export default Overview;