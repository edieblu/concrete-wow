import React, { useState, useCallback } from "react";
import Answer from "./Answer";
import axios from "axios";

export default function Search() {
  const BASE_URL = "https://api.factually.dev/reputation?";
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isValidUrl, setIsValidUrl] = useState(true);

  const validUrlRegex = new RegExp("(^http[s]?:/{2})|(^www)|(^/{1,2})");

  const _sendSerchRequest = useCallback(async () => {
    const url = `${BASE_URL}url=${searchTerm}`;
    if (validUrlRegex.test(searchTerm)) {
      setIsLoading(true);
      setData(null);
      setIsError(false);
      try {
        const result = await axios(url);
        setData(result.data);
        setSearchTerm("");
      } catch (error) {
        setIsError(true);
        setData(null);
      }
      setIsLoading(false);
    } else setIsValidUrl(false);
  }, [searchTerm, isLoading, isError, data, isValidUrl]);

  const _checkKeyActions = useCallback(
    (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setSearchTerm("");
        setIsValidUrl(true);
      } else if (event.key === "Enter") {
        event.preventDefault();
        setIsValidUrl(true);

        _sendSerchRequest();
      }
    },
    [searchTerm]
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
            Make sure it start with 'www' or 'https'. Please try again.
          </p>
        ) : null}
        {data !== null ? (
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
