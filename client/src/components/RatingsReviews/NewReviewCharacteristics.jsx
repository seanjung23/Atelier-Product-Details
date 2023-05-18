import react, { useContext } from 'react';
import {InteractionAPIContext} from './../InteractionAPI.jsx';

const NewReviewCharacteristics = ({
  reviewMetaData,
  sizeCharacteristic,
  setSizeCharacteristic,
  widthCharacteristic,
  setWidthCharacteristic,
  comfortCharacteristic,
  setComfortCharacteristic,
  qualityCharacteristic,
  setQualityCharacteristic,
  lengthCharacteristic,
  setLengthCharacteristic,
  fitCharacteristic,
  setFitCharacteristic
}) => {

  const interactionAPI = useContext(InteractionAPIContext);

  let sizeSelections = {
    '0' : 'none selected',
    '1' : 'A size too small',
    '2' : '½ a size too small',
    '3' : 'Perfect',
    '4' : '½ a size too big',
    '5' : 'A size too wide',
  }
  let widthSelections = {
    '0' : 'none selected',
    '1' : 'Too narrow',
    '2' : 'Slightly narrow',
    '3' : 'Perfect',
    '4' : 'Slightly wide',
    '5' : 'Too wide',
  }
  let comfortSelections = {
    '0' : 'none selected',
    '1' : 'Uncomfortable',
    '2' : 'Slightly uncomfortable',
    '3' : 'Ok',
    '4' : 'Comfortable',
    '5' : 'Perfect',
  }
  let qualitySelections = {
    '0' : 'none selected',
    '1' : 'Poor',
    '2' : 'Below average',
    '3' : 'What I expected',
    '4' : 'Pretty great',
    '5' : 'Perfect',
  }
  let lengthSelections = {
    '0' : 'none selected',
    '1' : 'Runs short',
    '2' : 'Runs slightly short',
    '3' : 'Perfect',
    '4' : 'Runs slightly long',
    '5' : 'Runs long',
  }
  let fitSelections = {
    '0' : 'none selected',
    '1' : 'Runs tight',
    '2' : 'Runs slightly tight',
    '3' : 'Perfect',
    '4' : 'Runs slightly long',
    '5' : 'Runs long',
  }

  let characteristicSelectionClickHandler = function (e) {
    if (e.target.name === 'newReviewSize') {
      setSizeCharacteristic(e.target.value);

      interactionAPI(`New Review Form: Size Characteristic`, 'Ratings and Reviews');

    } else if (e.target.name === 'newReviewWidth') {
      setWidthCharacteristic(e.target.value);

      interactionAPI(`New Review Form: Width Characteristic`, 'Ratings and Reviews');

    } else if (e.target.name === 'newReviewComfort') {
      setComfortCharacteristic(e.target.value);

      interactionAPI(`New Review Form: Comfort Characteristic`, 'Ratings and Reviews');

    } else if (e.target.name === 'newReviewQuality') {
      setQualityCharacteristic(e.target.value);

      interactionAPI(`New Review Form: Quality Characteristic`, 'Ratings and Reviews');

    } else if (e.target.name === 'newReviewLength') {
      setLengthCharacteristic(e.target.value);

      interactionAPI(`New Review Form: Length Characteristic`, 'Ratings and Reviews');

    } else if (e.target.name === 'newReviewFit') {
      setFitCharacteristic(e.target.value);

      interactionAPI(`New Review Form: Fit Characteristic`, 'Ratings and Reviews');
    }
  }

  let singlePointRadioMaker = function (selections, characteristic, value) {
    return (
      <label>
        <input type='radio' value={value} name={`newReview${characteristic}`} onClick={characteristicSelectionClickHandler}/>
      </label>
    )
  }
  // YOU CAN ADD THE FIRST AND LAST SELECTIONS TO THE BOTTOM OF HERE
  let fivePointRadioMaker = function (selections, characteristic) {
    return (
      <div className='fivePointRadioSelection'>
        {singlePointRadioMaker(selections, characteristic, 1)}
        {singlePointRadioMaker(selections, characteristic, 2)}
        {singlePointRadioMaker(selections, characteristic, 3)}
        {singlePointRadioMaker(selections, characteristic, 4)}
        {singlePointRadioMaker(selections, characteristic, 5)}
        <div>
          {selections[1]}
        <div className='largerCharacteristicName'>
          {selections[5]}
        </div>
        </div>
    </div>
    )
  }

  let characteristicRadioSelectorMaker = function (characteristic, selections) {
    return (
      <div className='newReviewCharacteristicCategory'>
      {reviewMetaData.characteristics[characteristic] !== undefined &&
        <div>
          {characteristic}
          <div>
            {whichSelectedOptionToDisplay(characteristic, selections)}
          </div>
          {fivePointRadioMaker(selections, characteristic)}
        </div>}
      </div>
    )
  }

  let whichSelectedOptionToDisplay = function (characteristic, selections) {
    if (characteristic === 'Size') {
      return selections[sizeCharacteristic];
    } else if (characteristic === 'Width') {
      return selections[widthCharacteristic];
    } else if (characteristic === 'Comfort') {
      return selections[comfortCharacteristic];
    } else if (characteristic === 'Quality') {
      return selections[qualityCharacteristic];
    } else if (characteristic === 'Length') {
      return selections[lengthCharacteristic];
    } else if (characteristic === 'Fit') {
      return selections[fitCharacteristic];
    }
  }

  return (
    <div>
      {characteristicRadioSelectorMaker('Size', sizeSelections)}
      {characteristicRadioSelectorMaker('Width', widthSelections)}
      {characteristicRadioSelectorMaker('Comfort', comfortSelections)}
      {characteristicRadioSelectorMaker('Quality', qualitySelections)}
      {characteristicRadioSelectorMaker('Length', lengthSelections)}
      {characteristicRadioSelectorMaker('Fit', fitSelections)}
    </div>
  )
}

export default NewReviewCharacteristics;