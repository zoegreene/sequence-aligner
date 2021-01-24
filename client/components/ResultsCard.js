import React from 'react';
import PropTypes from 'prop-types';

const ResultsCard = ({ results }) => {
  return (
    <div className="results-box">
      <h2>Alignment results:</h2>
      <h4>Match accuracy: { Math.round(results.match * 100) }%</h4>
      <div className="seq-results">
        <p>Original first sequence: { results.seq1 }</p>
        <p>Original second sequence: { results.seq2 }</p>
        <p>Aligned second sequence: { results.newSeq }</p>
      </div>
    </div>
  )
}

ResultsCard.propTypes = {
  results: PropTypes.shape({
    match: PropTypes.number,
    seq1: PropTypes.string,
    seq2: PropTypes.string,
    newSeq: PropTypes.string
  })
};

export default ResultsCard;
