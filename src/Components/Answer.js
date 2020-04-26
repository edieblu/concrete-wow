import React, { useState, useCallback } from "react";
import Form from '../Components/Form'

export default function Answer({ website, isTrusted }) {
const [displayForm, setDisplayForm] = useState(false)

const _toggleForm = useCallback(() => {
  setDisplayForm(!displayForm)
},[displayForm])

  return (
    <div className="results">
      <p>{`🔍 You've just searched for: ${website}`}</p>
      {isTrusted === "good" ? (
        <div className='result'>
          <p> 👍 Good news! We think this website is a trusted source!</p>
          <button className='blue-button disagree' onClick={_toggleForm}>Disagree?</button>

        </div>
      ) : isTrusted === "unknown" ? (
        <p> 🤷‍♀️ Hmm. We don't have enough information about this webste.</p>
      ) : (
        <div className='result'>
          <p> 👎 Stay away! This website is a known source of fake news!</p>
          <button className='blue-button disagree' onClick={_toggleForm}>Disagree?</button>
        </div>

      )}
      {displayForm ? <Form url={website} isTrusted={isTrusted}/> : null}
    </div>
  );
}
