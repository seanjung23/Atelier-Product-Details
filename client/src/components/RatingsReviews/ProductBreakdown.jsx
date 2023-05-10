import react, { useEffect } from 'react';

const ProductBreakdown = ({reviewMetaData}) => {

  // The characteristics we get will be ordered in an array
  // This order is how they will appear
  let productCharacteristics = Object.keys(reviewMetaData.characteristics);

  useEffect(() => {
    let productBreakdownMarkerSetting = function (markerClass) {
      let innerMarker = document.getElementsByClassName(markerClass);
      for (let i = 0; i < productCharacteristics.length; i += 1) {
        innerMarker[i].style.height = '100%';
        innerMarker[i].style.backgroundColor = 'gray';
        innerMarker[i].style.width = '5%';
        innerMarker[i].style.marginLeft = ((
          (reviewMetaData.characteristics[productCharacteristics[i]].value - 1)
          / 4) * 100).toString() + '%';
      }
    }
    productBreakdownMarkerSetting('productBreakdownMarker');
  }, [reviewMetaData]);

  console.log(reviewMetaData, productCharacteristics);

  let fivePointScaleDisplay = function(characteristicInput) {
    if (characteristicInput === 'Size') {

    } else if (characteristicInput === 'Width') {

    } else if (characteristicInput === 'Comfort') {

    } else if (characteristicInput === 'Quality') {

    } else if (characteristicInput === 'Length') {

    }
  };



  return (
    <div>
      PRODUCT BREAKDOWN
      {productCharacteristics.map((characteristic, index) => {
        return (
        <div>
            {characteristic}{reviewMetaData.characteristics[characteristic].value}
          <div className='productBreakdownScale'key={index}>
            <div className='productBreakdownMarker' key={index}>
            </div>
          </div>
        </div>
        )
      })}
    </div>
  )
}

export default ProductBreakdown;