import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import alignSeqs from '../aligner';
import ResultsCard from './ResultsCard';

const SequenceForm = () => {
  const { register, handleSubmit, reset } = useForm();
  let [results, setResults] = useState({});

  const onSubmit = data => {
    results = alignSeqs(data);
    setResults(results);
    reset();
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
