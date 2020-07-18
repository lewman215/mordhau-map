import React, { useEffect, useState } from 'react';
import './App.css';

const SearchBar = props => {
  const {searchItem} = props;

  const [itemSearchString, setItemSearchString] = useState('');
  const [mapSearchString, setMapSearchString] = useState('');
  

  const searchChangeHandler = (event) => {
    if (event.target.id === 'itemNameSearch') {
      setItemSearchString(event.target.value);
    } else if (event.target.id === 'mapSearch') {
      setMapSearchString(event.target.value);
    }
  }

  return (
    <div className='search-bar--wrapper'>
      <div className='search-bar--input search-bar--item-search'>
        <label for='itemNameSearch'>Item Search: </label>
        <input type="text" id="itemNameSearch" name="ItemNameSearch" onChange={searchChangeHandler} />
      </div>
      <div className='search-bar--input search-bar--map-search'>
        <label for='mapSearch'>Map Search: </label>
        <input type="text" id="mapSearch" name="mapSearch" onChange={searchChangeHandler} />
      </div>
      <div className='search-bar--input search-bar--submit'>
        <button type="button" id='searchSubmit' onClick={() =>searchItem(itemSearchString, mapSearchString)}>Click Me!</button>
      </div>
    </div>
  );
}



export default SearchBar;
