import './App.css';
import Income from './components/income/Income';
import Expenses from './components/expenses/Expenses';
import { useState } from 'react';

function App() {
  const [data, setData] = useState('');

  const householdIncomeData = (childdata) => {
    setData(childdata);
  }

  return (
    <div className="App">
      <div>
        <Income householdIncomeData={householdIncomeData} />
      </div>
      <div className='dashboard-grid'>
        <Expenses expensesData={data} />
      </div>
    </div>
  );
}

export default App;
