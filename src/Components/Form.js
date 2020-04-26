import React, { useState, useCallback } from "react";

export default function Form({ url='', report = "falseBad" }) {
  const [comment, setComment] = useState();


  const _updateComment = () => {

  }

  const _sendReport = () => {
    console.log('report sent')
  }

  return (
    <form className="form" onSubmit={_sendReport} >
      <label>
        <input
          type="button"
          className=""
          value={report === "falseBad" ? "👍" : "👎"}
        />
        This website {report === 'falseBad' ? 'can' : "can't"} be trusted
      </label>
      <label>
        <textarea
          className="search-term"
          value={comment}
          onChange={_updateComment}
          // onKeyDown={_checkKeyActions}
          placeholder=""
          autoFocus
        />
      </label>
      <button className='blue-button submit'>Submit</button>
    </form>
  );
}
