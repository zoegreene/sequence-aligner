import React from 'react';
import { Link } from 'react-router-dom';

const History = () => {
  return (
    <div>
      <div className="history-btn">
        <button className="btn"><Link to="/">BACK</Link></button>
      </div>
      <div className="results-box">
        {console.log('blank history')}
      </div>
    </div>

  )
}

export default History;
