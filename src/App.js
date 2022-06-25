import './App.scss';
import Income from './components/income/Income';
import Expenses from './components/expenses/Expenses';
import { useState } from 'react';
import Savings from './components/savings/Savings';
import Summary from './components/summary/Summary';

function App() {
  const [data, setData] = useState('');
  const [expenseData, setExpenseData] = useState('');

  const householdData = (data) => {
    setData(data);
  }

  const expenseTotal = (data) => {
    setExpenseData(data);
  }

  return (
    <div className="app">
      <div>
        <Income householdIncomeData={householdData} />
      </div>
      <div className='app__content'>
        <Expenses householdExpenseData={expenseTotal} />
        <Savings incomeData={data} />
        <span></span>
        <Summary incomeData={data} expenseData={expenseData} />

      </div>
    </div>
  );
}

export default App;
