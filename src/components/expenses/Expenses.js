import { useEffect } from "react";


function Expenses(expensesData) {

    return (
        <section>
            <h1>Expenses Data: {JSON.stringify(expensesData)}</h1>
        </section>
    );
}

export default Expenses;
