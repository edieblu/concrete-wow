import React, { useState, useCallback } from "react";
import Answer from "./Answer";
import axios from "axios";
import parse from "url-parse";

export default function Search() {
  const BASE_URL = "https://api.factually.dev/reputation?";
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isValidUrl, setIsValidUrl] = useState(true);

  const reset = () => {
    setIsValidUrl(true)
    setIsLoading(false)
  }

  let url = `${BASE_URL}url=${searchTerm}`;
  const _sendSerchRequest = useCallback(async () => {
    const { protocol } = parse(searchTerm);
    if(searchTerm.indexOf('.') !== -1) {
      if (protocol === 'http:' || searchTerm.indexOf('http') === -1) url = `${BASE_URL}url=https://${searchTerm}`
      setIsLoading(true);
      try {
        const result = await axios(url);
        setData(result.data);
        reset()
      } catch (error) {
        setIsError(true);
        reset()
      }
    } else {
      setIsValidUrl(false)
    }
      setIsLoading(false);
  }, [searchTerm, isLoading, isError, data, isValidUrl]);

  const _checkKeyActions = useCallback(
    (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setSearchTerm("");
        setIsValidUrl(true);
      } else if (event.key === "Enter") {
        event.preventDefault();
        _sendSerchRequest();
      }
    },
    [_sendSerchRequest]
  );

  const _updateSearchTerm = useCallback(
    (event) => setSearchTerm(event.target.value),
    []
  );

  return (
    <div className="search-wrapper">
      <div className="search">
        <input
          type="text"
          className="search-term"
          value={searchTerm}
          onChange={_updateSearchTerm}
          onKeyDown={_checkKeyActions}
          placeholder="https://"
          autoFocus
        />
        {isLoading ? (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        ) : (
          <button
            type="submit"
            className="search-button"
            onClick={_sendSerchRequest}
          >
            <i className="fa fa-search"></i>
          </button>
        )}
      </div>
      <div>
        {isError ? (
          <p>Hmm 🤔. Something went wrong, please try again.</p>
        ) : null}
        {!isValidUrl ? (
          <p>
            Hmm 🤔. That doesn't look like a valid website URL. <br />
            Make sure it starts with 'www' or 'https'. Please try again.
          </p>
        ) : null}
        {data !== null && !isError && isValidUrl ? (
          <Answer
            website={data.basisURL}
            isTrusted={data.safe}
            score={data.distance}
          />
        ) : null}
      </div>
    </div>
  );
}
