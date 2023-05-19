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
        innerMarker[i].style.backgroundColor = '#64B735';
        innerMarker[i].style.width = '5%';
        innerMarker[i].style.marginLeft = ((
          ((reviewMetaData.characteristics[productCharacteristics[i]].value * 0.96) - 1)
          / 4) * 100).toString() + '%';
      }
    }
    productBreakdownMarkerSetting('productBreakdownMarker');
  }, [reviewMetaData]);

  let fivePointScaleDisplay = function(characteristicInput, key) {
    if (characteristicInput === 'Size') {
      return (
      <div key={key}>
        <span className='oneRatingCharacteristic'>too small</span>
        <div className='threeRatingCharacteristic'>perfect</div>
        <span className='fiveRatingCharacteristic'>too large</span>
      </div>)
    } else if (characteristicInput === 'Width') {
      return (
      <div key={key}>
        <span className='oneRatingCharacteristic'>too narrow</span>
        <div className='threeRatingCharacteristic'>perfect</div>
        <span className='fiveRatingCharacteristic'>too wide</span>
      </div>)
    } else if (characteristicInput === 'Comfort') {
      return (
      <div key={key}>
        <span className='oneRatingCharacteristic'>poor</span>
        <div className='characteristicFiller'></div>
        <span className='fiveRatingCharacteristic'>great</span>
      </div>)
    } else if (characteristicInput === 'Quality') {
      return (
      <div key={key}>
        <span className='oneRatingCharacteristic'>poor</span>
        <div className='characteristicFiller'></div>
        <span className='fiveRatingCharacteristic'>great</span>
      </div>)
    } else if (characteristicInput === 'Length') {
      return (
      <div key={key}>
        <span className='oneRatingCharacteristic'>too short</span>
        <div className='threeRatingCharacteristic'>perfect</div>
        <span className='fiveRatingCharacteristic'>too long</span>
      </div>)
    } else if (characteristicInput === 'Fit') {
      return (
      <div key={key}>
        <span className='oneRatingCharacteristic'>too tight</span>
        <div className='threeRatingCharacteristic'>perfect</div>
        <span className='fiveRatingCharacteristic'>too long</span>
      </div>)
    }
  };

  return (
    <div className='productBreakdownOverall'>
      {productCharacteristics.map((characteristic, index) => {
        return (
        <div key={index}>
            {characteristic}
          <div className='productBreakdownScale'>
            <div className='productBreakdownMarker'>
            </div>
          </div>
          {fivePointScaleDisplay(characteristic, (index.toString() + 'KEY'))}
        </div>
        )
      })}
    </div>
  )
}

export default ProductBreakdown;