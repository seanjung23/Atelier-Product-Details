import react from 'react';

const NewReviewCharacteristics = ({reviewMetaData}) => {

  let sizeSelections = {
    '1' : 'A size too small',
    '2' : '½ a size too small',
    '3' : 'Perfect',
    '4' : '½ a size too big',
    '5' : 'A size too wide'
  }
  let widthSelections = {
    '1' : 'Too narrow',
    '2' : 'Slightly narrow',
    '3' : 'Perfect',
    '4' : 'Slightly wide',
    '5' : 'Too wide'
  }
  let comfortSelections = {
    '1' : 'Uncomfortable',
    '2' : 'Slightly uncomfortable',
    '3' : 'Ok',
    '4' : 'Comfortable',
    '5' : 'Perfect'
  }
  let qualitySelections = {
    '1' : 'Poor',
    '2' : 'Below average',
    '3' : 'What I expected',
    '4' : 'Pretty great',
    '5' : 'Perfect'
  }
  let lengthSelections = {
    '1' : 'Runs short',
    '2' : 'Runs slightly short',
    '3' : 'Perfect',
    '4' : 'Runs slightly long',
    '5' : 'Runs long'
  }
  let fitSelections = {
    '1' : 'Runs tight',
    '2' : 'Runs slightly tight',
    '3' : 'Perfect',
    '4' : 'Runs slightly long',
    '5' : 'Runs long'
  }

  let singlePointRadioMaker = function (selections, value) {

    return (
      <label>
        <input type='radio' value={value}/>
          <div>
            {selections[value]}
          </div>
      </label>
    )
  }

  let fivePointRadioMaker = function (selections) {
    return (
      <div className='fivePointRadioSelection'>
        {singlePointRadioMaker(selections, 1)}
        {singlePointRadioMaker(selections, 2)}
        {singlePointRadioMaker(selections, 3)}
        {singlePointRadioMaker(selections, 4)}
        {singlePointRadioMaker(selections, 5)}
    </div>
    )
  }

  let characteristicRadioSelectorMaker = function (characteristic, selections) {

    return (
      <div>
      {reviewMetaData.characteristics[characteristic] !== undefined &&
        <div>
          {characteristic}
          {fivePointRadioMaker(selections)}
        </div>}
      </div>
    )
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