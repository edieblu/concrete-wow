import React, { useState, useCallback } from "react";
import axios from "axios";

export default function Form({ url, isTrusted }) {
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const BASE_URL = "https://api.factually.dev/report";

  const _updateComment = useCallback(
    (event) => setComment(event.target.value),
    []
  );

  const _sendReport = useCallback(async () => {
    setIsLoading(true);
    const disposition = isTrusted === "good" ? "falseGood" : "falseBad";
    try {
      await axios
        .post(BASE_URL, {
          url: url,
          disposition: disposition,
          comments: comment,
        })
        .then(function (response) {
          if (response.status === 200) {
            setIsLoading(false);
            setIsError(false);
            setComment('');
          } else {
            setIsError(true);
            setIsLoading(false);
          }
        });
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  }, [comment, isTrusted, url]);

  const _onClick = useCallback(
    (event) => {
      event.preventDefault();
      _sendReport();
    },
    [_sendReport]
  );

  return (
    <form className="form" onSubmit={_sendReport}>
      <label>
        <input
          type="button"
          className="thumb"
          value={isTrusted === "bad" ? "👍" : "👎"}
        />
        This website {isTrusted === "bad" ? "can" : "can't"} be trusted
      </label>
      <label>
        <textarea
          value={comment}
          onChange={_updateComment}
          placeholder="Please explain why we should change our rating 😃"
          autoFocus
          required
        />
      </label>
      <button
        className="blue-button submit"
        disabled={comment ? false : true}
        onClick={_onClick}
      >
        Submit
      </button>

      {isError ? (
        <p className="status">
          Hmm 🤔. Something went wrong, please try again.
        </p>
      ) : null}
      {isError === false && !isLoading ? (
        <p className="status">Success! 🎉 Your report was sent!</p>
      ) : null}
    </form>
  );
}
