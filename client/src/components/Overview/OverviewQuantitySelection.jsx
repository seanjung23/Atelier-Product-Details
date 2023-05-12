import react,  {useState, useEffect, useRef}from 'react';

export default function({selectedSize, sizeArray}){
  const [selectedSizeQuantity, setSelectedSizedQuantity] = useState(['-']);

  useEffect(()=>{
    setSelectedSizedQuantity([]);
    if(selectedSize=== 'Select Size') {
      setSelectedSizedQuantity(['-']);
    } else {
      console.log(sizeArray)
    }
  },[selectedSize, sizeArray])


}