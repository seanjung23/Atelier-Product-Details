import React from 'react';
import SearchIcon from '../icons/SearchIcon.jsx'

const SearchQuestions = ({retrieveQuery}) => {

  const initalizeSearch = () => {
    let query = document.getElementsByClassName('user-search')[0].value.toLowerCase();
    query = query.length < 3 ? '' : query;

    retrieveQuery(query);
  };

  return (
    <div className="search-bar">
      <label>
        <input className="user-search" type="text" placeholder="Have a question? Search for answers..." onChange={() => initalizeSearch()}/>
        <SearchIcon />
      </label>
    </div>
  )
};

export default SearchQuestions;