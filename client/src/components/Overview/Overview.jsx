import react,  {useState, useEffect, useRef, useLayoutEffect}from 'react';
import axios from 'axios';
import OverViewImage from './OverViewImage.jsx';
import OverviewProductInformation from './OverviewProductInformation.jsx'
// Group Effort

const Overview = ({productInfo}) => {
  const [itemInfo, setItemInfo] = useState(productInfo);
  const [itemRating, setItemRating] = useState(0);
  const [productStyles, setProductStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});
  const itemId = productInfo.id;

  useEffect(()=>{

    let url = '/products/' + itemId + '/styles';

    axios.get(url)
      .then(result => {

        setProductStyles(productStyles=> [...productStyles, result.data.results]);

          for (var style of result.data.results) {
            if (style['default?']) {

              setCurrentStyle(style);
              break;
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



if(currentStyle === undefined) {
  return (
    <progress></progress>
  )
}
  return(
    <div className="currentStyleDiv">
      <h1>Overview Section</h1>

      <div className="overviewImageDiv">
        <OverViewImage currentStyle={currentStyle}/>
      </div>

      <div className="overviewProductInformationDiv">
          <OverviewProductInformation itemRating={itemRating} productStyles={productStyles} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle}  itemInfo={itemInfo} setItemInfo={setItemInfo}/>
      </div>

    </div>
  )
};

export default Overview;