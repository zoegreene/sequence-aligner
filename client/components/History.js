import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getCookieValue } from '../../server/utils';
import ResultsCard from './ResultsCard';

/**
 * History component maps all of the ResultsCards for a given session.
 * If there were no results for the session, displays text "No alignments found."
 *
 * @return {*}
 */
const History = () => {
  let [history, setHistory] = useState([]);

  useEffect( async () => {
    const sessionId = getCookieValue('sessionId');
    if (sessionId) {
      const results = await axios.get(`/api/sessions/${sessionId}/alignments`);
      setHistory(results.data);
    } else {
      await axios.post('/api/sessions');
    }
  }, [setHistory]);

  return (
    <div>
      <div className="history-btn">
        <button className="btn"><Link to="/">BACK</Link></button>
      </div>
      { history.length > 0 ?
        history.map(alignment => {
          return (
            <ResultsCard results={ alignment } key={ alignment.seq1 } />
          )
        }) :
        <h3 className="hint">No alignments found.</h3>
      }
    </div>
  )
}

export default History;
