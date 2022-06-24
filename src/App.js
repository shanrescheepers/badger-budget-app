import './App.scss';
import Income from './components/income/Income';
import Expenses from './components/expenses/Expenses';
import { useState } from 'react';
import Savings from './components/savings/Savings';

function App() {
  const [data, setData] = useState('');

  const householdData = (data) => {
    setData(data);
    console.log(data);
  }

  return (
    <div className="app">
      <div>
        <Income householdIncomeData={householdData} />
      </div>
      <div className='app__content'>
        <Expenses />
        <Savings incomeData={data} />

      </div>
    </div>
  );
}

export default App;
