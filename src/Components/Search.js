import React, { useState, useCallback } from "react";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const _sendSerchRequest = useCallback(() => {
    alert(`You are searching for: ${searchTerm}`);
    setSearchTerm("");
    setIsLoading(true)
  }, [searchTerm]);

  const _checkKeyActions = useCallback((event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      setSearchTerm("");
    } else if (event.key === "Enter") {
      event.preventDefault();
      _sendSerchRequest();
    }
  }, [searchTerm]);

  const _updateSearchTerm = useCallback(
    (event) => setSearchTerm(event.target.value),
    []
  );

  return (
    <div className="search">
      <input
        type="text"
        className="search-term"
        value={searchTerm}
        onChange={_updateSearchTerm}
        onKeyDown={_checkKeyActions}
        placeholder="Paste a link here"
        autoFocus
      />
      {isLoading ? <div className='loading'>
      <div className='spinner'></div>
      </div>
      :
      <button
        type="submit"
        className="search-button"
        onClick={_sendSerchRequest}
      >
        <i className="fa fa-search"></i>
      </button>}
    </div>
  );
}
