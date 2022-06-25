import { useEffect, useState } from 'react';
import './Summary.scss';

function Summary(data) {

    const [total, setTotal] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [items, setItems] = useState({
        gross: 0,
        taxAmount: 0,
        net: 0,
        saveAmount: 0,
        afterSavings: 0
    })


    useEffect(() => {
        console.log(data);


        if (data.incomeData) {
            setTotal(data.incomeData.people?.reduce((total, current) => total + current.net, 0) - (data.expenseData));

            setItems({
                gross: data.incomeData?.people?.reduce((total, current) => total + current.gross, 0),
                taxAmount: data.incomeData?.people?.reduce((total, current) => total + current.taxAmount, 0),
                net: data.incomeData?.people?.reduce((total, current) => total + current.net, 0),
                saveAmount: data.incomeData?.people?.reduce((total, current) => total + current.saveAmount, 0),
                afterSavings: data.incomeData?.people?.reduce((total, current) => total + current.afterSavings, 0)
            })
        }

        if (data.expenseData) {
            setTotalExpense(data.expenseData);
        }
    })

    // vraagteken is n null check, veral as console, cannot read props of undefinded, map, gee. ? se, as hy null is, ignore hom, overlook dit. maar passop, dit is nie altyd altyud null nie.
    return (
        <div className='summary'>
            <span className='summary__title'>SUMMARY</span>
            <div className='summary__content'>
                <div className='summary__content__row'>
                    <span>Total Gross :</span>
                    <span className='summary__content__row__amount'>R {items.gross}</span>
                </div>
                <div className='summary__content__row'>
                    <span>Total Tax Paid :</span>
                    <span className='summary__content__row__amount'>R {items.taxAmount}</span>
                </div>
                <div className='summary__content__row'>
                    <span>Total Net:</span>
                    <span className='summary__content__row__amount'>R {items.net}</span>
                </div>
                <div className='summary__content__row'>
                    <span>Total Amount Saved :</span>
                    <span className='summary__content__row__amount'>R {items.saveAmount}</span>
                </div>
                <div className='summary__content__row'>
                    <span>Total Left After Savings :</span>
                    <span className='summary__content__row__amount'>R {items.afterSavings}</span>
                </div>
                <div className='summary__content__row'>
                    <span>Total Expenses :</span>
                    <span className='summary__content__row__amount'>R {totalExpense}</span>
                </div>
            </div>
            {/* ?? 0 --> null-coalescing --> hy kyk of is die waarde wat terugkom n null, as hy n null is, maak dit n 0. As nie, maak dit sy waarde.  */}
            <h2 className='summary__total'>What's Left: R {total}</h2>
        </div>
    );
}

export default Summary;