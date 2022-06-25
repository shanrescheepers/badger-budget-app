import { useState } from 'react';
import { calculateExpenseLumpTotal } from '../../calculations/Calculations';
import './Expenses.scss';

// household data is dieselfde data wat inkom van Income.ja
function Expenses({ householdExpenseData }) {
    // handleChange set in die nuwe state, dit wat in getik word. Dit sit dit in die EXPENSE\setExpense state.
    const [expenseList, setExpenseList] = useState({
        // hier is die expense state array, wat objects op mekaar gaan bou
        // objects kom deur van die handlesubmt.
        expenses: []
    })

    const [expense, setExpense] = useState({})
    const [totalExpense, setTotalExpense] = useState(0)
    // handlesubmit sit dit  in die state in, add button

    const handleSubmit = (event) => {
        event.preventDefault();
        // logies, begin ons met 0/ n nuwe variab le word gemaak agv PASS BY REFERENCE MEMORY FOKOP.
        //MAW my currentExpense moet op gebou word, sodoende, se ons daar is n expense lys, en die expense lys bevat expenses obvs

        let currentExpenses = expenseList.expenses;
        // n nuwe variable weer, wat se wat die nuwe expense is, wat na die current expense toe gaan, wat dan die current expense lys opbou, en na die expense array toe stuur, om die expenses objects te maak
        // lyn 27 en 28, kom van die input values af. input values word in die expense state gesiut
        let newExpense = {
            expenseName: expense.name,
            expenseTotal: parseFloat(expense.total)
        }
        // die vorige variable wat eens 0 was, is nou op gebou, en nou word dit geset, en gepush, met die nuwe data wat die object maak, so eens = 0, nou basies 0+NEW Expense
        currentExpenses.push(newExpense)

        setExpenseList({
            expenses: currentExpenses
        })

        setTotalExpense(calculateExpenseLumpTotal(expenseList.expenses));
        document.getElementById("expenseForm").reset();
        householdExpenseData(calculateExpenseLumpTotal(expenseList.expenses));
    }

    const removeExpense = (name) => {
        const newExpenseList = expenseList.expenses.filter((expense) => expense.expenseName !== name);
        setExpenseList({
            expenses: newExpenseList
        });

        setTotalExpense(calculateExpenseLumpTotal(newExpenseList));
        householdExpenseData(calculateExpenseLumpTotal(newExpenseList));
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setExpense(values => ({ ...values, [name]: value }))
    }

    return (
        <div className="expenses">
            <span className='expenses__title'> Expenses</span>
            <form id='expenseForm' className="expenses__add">
                <input placeholder="expense name" name='name' onChange={handleChange}></input>
                <input placeholder="expense total" name='total' onChange={handleChange}></input>
                <button onClick={handleSubmit}>ADD</button>
            </form>
            <h2 className='expenses__heading'>Added Expenses</h2>
            <div className='expenses__content'>
                {expenseList.expenses.map((expense, expenseKey) =>
                    <div key={expenseKey} className='expenses__content__row'>
                        <button onClick={() => removeExpense(expense.expenseName)}>x</button>
                        <span>{expense.expenseName}</span>
                        <span className='expenses__content__row__amount'>R {expense.expenseTotal}</span>
                    </div>
                )}
            </div>
            <h2 role='totalExpense' className='expenses__total'>TOTAL EXPENSES: R{totalExpense}</h2>
        </div >
    );
}

export default Expenses;
