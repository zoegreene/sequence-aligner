import React from 'react';
import { Link } from 'react-router-dom';
import SequenceForm from './SequenceForm';

/**
 * Home component includes the sequence entry form and a button to view
 * the history page.
 *
 * @return {*}
 */
const Home = () => {
	return (
		<div>
			<SequenceForm />
      <div className="history-btn">
        <button className="btn"><Link to="/history">VIEW PAST ALIGNMENTS</Link></button>
      </div>
		</div>

	)
}

export default Home;
