import History from '../client/components/History';
import ResultsCard from '../client/components/ResultsCard';
import SequenceForm from '../client/components/SequenceForm';
import React from 'react';
import * as rrd from 'react-router-dom';
import { shallow, configure, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import { expect } from '@jest/globals';

configure({ adapter: new Adapter() });
const { BrowserRouter } = rrd;


// History component renders the alignments
// history component renders "no alignments" if empty

describe('History component', () => {
  const results = [{
    seq1: 'abc',
    seq2: 'abd',
    newSeq: 'ab[c]',
    match: 0.67,
    numMutations: 1
  }];
  it('Renders without crashing', () => {
    const wrapper = shallow(<History />);
  });
  it('Shows no alignments found text when no history set', () => {
    const wrapper = mount(
      <BrowserRouter>
        <History />
      </BrowserRouter>
    );
    expect(wrapper.text()).toContain('No alignments found');
    // const currHist = jest.spyOn(React, 'useState');
    // currHist.mockImplementation((setHistory) => setHistory(results));
  });
});

describe('Results card component', () => {
  const results = {
    seq1: 'abc',
    seq2: 'abd',
    newSeq: 'ab[c]',
    match: 0.67,
    numMutations: 1
  };
  let wrapper;
  it('Accepts results as props', () => {
    wrapper = mount(<ResultsCard results={ results } />);
    expect(wrapper.props().results).toEqual(results);
  });
  it('Renders the results passed in as props', () => {
    expect(wrapper.text()).toContain('ab[c]');
  });
});

describe('Sequence Form component', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<SequenceForm />);
  });
});
