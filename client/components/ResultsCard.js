import React from 'react';

const ResultsCard = ({ results }) => {
  return (
    <div className="results-box">
      <h2>Alignment results:</h2>
      <h4>Match accuracy: { results.match * 100 }%</h4>
      <div className="seq-results">
        <p>{ results.seq1 }</p>
        <p>{ results.seq2 }</p>
      </div>
    </div>
  )
}

export default ResultsCard;
