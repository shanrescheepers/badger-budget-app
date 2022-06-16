import './Expenses.scss';


function Expenses(expensesData) {

    return (
        <div className="expenses">
            <h1> Expenses</h1>
            <form className="expenses__add">
                <input placeholder="expense name"></input>
                <input placeholder="expense name"></input>
                <button>ADD</button>
            </form>
            <h2 className='expenses__heading'>Added Expenses</h2>
            <div className='expenses__content'>
                <div className='expenses__content__row'>
                    <span>Expense Name</span>
                    <span>R X</span>
                </div>
            </div>
            <div className='expenses__remove-btn'>
                <button>REMOVE</button>
            </div>
            <h2 className='expenses__total'>TOTAL EXPENSES: R X</h2>
        </div >
    );
}

export default Expenses;
