import React from 'react';


const SortMenu = ({setSortSelection}) => {

  let handleSortSelect = function (e) {
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