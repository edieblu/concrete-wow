import React from 'react';

export default function Answer({ website, isTrusted, score}) {
  console.log(isTrusted)
  return (
    <div className='results'>
      <p>{`🔍 You've just searched for: ${website}`}</p>
      { isTrusted === 'good' ?
      <p> 👍 Good news! We think this website is a trusted source!</p>
          : isTrusted === 'unknown' ?
          <p> 🤷‍♀️ Hmm. We don't have enough information about this webste.</p>
          :<p> 👎 Stay away! This website is a known source of fake news!</p>
        }
    </div>
  );
}
