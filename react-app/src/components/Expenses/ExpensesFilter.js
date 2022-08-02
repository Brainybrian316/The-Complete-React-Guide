
import './ExpensesFilter.css';
import { useState } from 'react';

const ExpensesFilter = (props) => {
  const [firstOption, setFirstOption] = useState('2022');
  const [secondOption, setSecondOption] = useState('2021');
  const [thirdOption, setThirdOption] = useState('202');
  const [fourthOption, setFourthOption] = useState('');

  const firstOptionChangeHandler = (event) => {
    setFirstOption(event.target.value);
  }

  const secondOptionChangeHandler = (event) => {
    setSecondOption(event.target.value);
  }
  
  const thirdOptionChangeHandler = (event) => {
    setThirdOption(event.target.value);
  }

  const fourthOptionChangeHandler = (event) => {
    setFourthOption(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.onFilterExpenses({
      firstOption: firstOption,
      secondOption: secondOption,
      thirdOption: thirdOption,
      fourthOption: fourthOption,
    });
  }
  


  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={submitHandler}>
          <option value={firstOption} onChange={firstOptionChangeHandler}>2022</option>
          <option value={secondOption} onChange={secondOptionChangeHandler}>2021</option>
          <option value={thirdOption} onChange={thirdOptionChangeHandler}>2020</option>
          <option value={fourthOption} onChange={fourthOptionChangeHandler}>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;