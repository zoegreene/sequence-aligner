import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import alignSeqs from '../aligner';
import ResultsCard from './ResultsCard';

const SequenceForm = () => {
  const { register, handleSubmit, reset } = useForm();
  let [results, setResults] = useState({});

  const onSubmit = data => {
    results = alignSeqs(data);
    console.log('results', results);
    setResults(results);
    reset();
  }

  return (
    <div id="center-page">
      <h2>Enter sequences to get started:</h2>
      <form className="sequence-form" onSubmit={ handleSubmit(onSubmit) }>
        <div className="form-item">
          <label htmlFor="seq1">Sequence 1</label>
          <input name="seq1" ref={ register({ required: true }) } />
        </div>
        <div className="form-item">
          <label htmlFor="seq2">Sequence 2</label>
          <input name="seq2" ref={ register({ required: true })} />
        </div>
        <button type="submit" className="btn">ALIGN SEQUENCES</button>
      </form>
      { results.match && <ResultsCard results={ results } /> }
    </div>
  )
}

export default SequenceForm;
