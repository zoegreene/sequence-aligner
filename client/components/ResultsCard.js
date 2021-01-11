import React from 'react';

const ResultsCard = ({ results }) => {
  return (
    <div>
      <h1>Results Card</h1>
      <h4>{ results.seq1 }</h4>
      <h4>{ results.seq2 }</h4>
      <h4>{ results.match * 100 }%</h4>
    </div>
  )
}

export default ResultsCard;
