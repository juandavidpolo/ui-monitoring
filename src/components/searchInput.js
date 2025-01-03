import React from "react";

import { search } from "src/assets/svg";

const SearchInput = () => {
  return(
    <div className="search--input"> 
      <div className="seach--text--input">
        {search()}
        <input/>
      </div>
      <div className="search--results"></div>
    </div>
  )
}

export default SearchInput