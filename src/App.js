import './App.scss';
import Income from './components/income/Income';
import Expenses from './components/expenses/Expenses';
import { useState } from 'react';

function App() {
  const [data, setData] = useState('');

  const householdIncomeData = (childdata) => {
    setData(childdata);
  }

  return (
    <div className="app">
      <div>
        <Income householdIncomeData={householdIncomeData} />
      </div>
      <div className='app__content'>
        <Expenses expensesData={data} />
      </div>
    </div>
  );
}

export default App;
