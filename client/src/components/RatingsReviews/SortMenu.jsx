import react, { useContext } from 'react';
import {InteractionAPIContext} from './../InteractionAPI.jsx';


const SortMenu = ({setSortSelection}) => {

  const interactionAPI = useContext(InteractionAPIContext);

  let handleSortSelect = function (e) {
    interactionAPI(`Sort Menu ${e.target.value}`, 'Ratings and Reviews');
    setSortSelection(e.target.value);
  }

  return (
    <div>
      <label>
      Sort on
      <select onChange={handleSortSelect}>
        <option value='relevant'>relevant</option>
        <option value='helpful'>helpful</option>
        <option value='newest'>newest</option>
      </select>
      </label>
    </div>
  )
};

export default SortMenu;