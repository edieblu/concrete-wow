import React from 'react';

export default function Answer({ website, isTrusted, score}) {
  return (
    <div className='results'>
      <p>{`🔍 You've just searched for ${website}`}</p>
      {isTrusted === 'Good' ? <p> 👍 Good news! We think this website is a trusted source</p> : <p>🤷‍♀️ Hmmm. Something smells fishy.</p>}
      <p>{`👨‍🔬 The generated website score is ${score}`}.</p>
    </div>
  );
}
