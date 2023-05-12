import react,  {useState, useEffect, useRef}from 'react';

export default function({currentStyle}){
  const [sizeArray, setSizeArray] = useState([]);
  useEffect(() => {

    if(currentStyle.style_id !== undefined) {
      setSizeArray([]);

      for (var i in currentStyle.skus) {

        if (currentStyle.skus[i].quantity >= 1) {
          let temp = {};

          temp.size =currentStyle.skus[i].size;
          temp.quantity = currentStyle.skus[i].quantity;

          setSizeArray(sizeArray => [...sizeArray, temp]);

        }
      }

    }

  }, [currentStyle])

  const [selectedSize, setSelectedSize] = useState();

  const sizeSelectOnChange = (e) => {

    setSelectedSize(e.target.value);
  }

  const [selectedSizeQuantity, setSelectedSizedQuantity] = useState(['-']);

  useEffect(()=>{
    setSelectedSizedQuantity([]);
    if(selectedSize=== 'Select Size') {
      setSelectedSizedQuantity(['-']);
    } else {
      console.log(sizeArray)
    }
  },[selectedSize, sizeArray])


  if (sizeArray[0] !== undefined) {
    return (
      <>
    <div className="sizeDiv" >
      <select className="sizeSelection" onChange={sizeSelectOnChange} >
        <option value="Select Size">Select Size</option>
        {
          sizeArray.map(e=>{
            return (
              <option value={e.size}>{e.size}</option>
            )
          })
        }
      </select>

    </div>

    <div className="quantityDiv">



    </div>
    </>
    )
  }

  return ( <>
  <div className="sizeDiv">
      <select className="sizeSelection" disabled>
        <option value="OUT OF STOCK" >OUT OF STOCK</option>
      </select>

    </div>

    <div className="quantityDiv">
      <select className="quantitySelection" disabled>
        <option value="-" >-</option>
      </select>
    </div>
  </>



  )


}