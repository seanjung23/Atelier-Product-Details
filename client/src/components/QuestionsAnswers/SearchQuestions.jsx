import React from 'react';

const SearchQuestions = ({retrieveQuery}) => {

  const initalizeSearch = () => {
    let query = document.getElementsByClassName('user-search')[0].value.toLowerCase();
    if (query.length >= 3 || query === '') {
      retrieveQuery(query);
    }
  };

  return (
    <div>
      <label>
        <input className="user-search" type="text" placeholder="Have a question? Search for answers..." onChange={() => initalizeSearch()}/>
        <button type="button" >Search</button>
      </label>
    </div>
  )
};

export default SearchQuestions;