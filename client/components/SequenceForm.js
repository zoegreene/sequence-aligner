import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import alignSeqs from '../aligner';
import ResultsCard from './ResultsCard';
import { getCookieValue } from '../../server/utils';

const SequenceForm = () => {
  const { register, handleSubmit, reset } = useForm();
  let [results, setResults] = useState({});
  // let [sessionId, setSessionId] = useState(0);

  useEffect( async () => {
    const sessionId = getCookieValue('sessionId');
    if (!sessionId) {
      await axios.post('/api/sessions');
    }
  });

  const onSubmit = async (data) => {
    results = alignSeqs(data);
    console.log(results);
    setResults(results);
    reset();
    const sessionId = getCookieValue('sessionId');
    await axios.post(`/api/sessions/${sessionId}/alignments`, results);
  }

  return (
    <div>
      <div className="entry-box">
        <h2>Enter sequences to get started:</h2>
        <form className="sequence-form" onSubmit={ handleSubmit(onSubmit) }>
          <div className="form-box">
            <input name="seq1" type="text" placeholder="First sequence..." ref={ register({ required: true }) } />
            <input name="seq2" type="text" placeholder="Second sequence..." ref={ register({ required: true })} />
          </div>
          <div className="btn-box">
            <button type="submit" className="btn">ALIGN SEQUENCES</button>
          </div>
        </form>
      </div>
      { results.match && <ResultsCard results={ results } /> }
    </div>
  )
}

export default SequenceForm;
