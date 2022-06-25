import './Summary.scss';

function Summary(data) {
    // vraagteken is n null check, veral as console, cannot read props of undefinded, map, gee. ? se, as hy null is, ignore hom, overlook dit. maar passop, dit is nie altyd altyud null nie.
    return (
        <div className='summary'>
            <span className='summary__title'>SUMMARY</span>
            <div className='summary__content'>
                <div className='summary__content__row'>
                    <span>Total Gross :</span>
                    <span className='summary__content__row__amount'>R {data.incomeData?.people?.reduce((total, current) => total + current.gross, 0)}</span>
                </div>
                <div className='summary__content__row'>
                    <span>Total Tax Paid :</span>
                    <span className='summary__content__row__amount'>R {data.incomeData?.people?.reduce((total, current) => total + current.taxAmount, 0)}</span>
                </div>
                <div className='summary__content__row'>
                    <span>Total Net:</span>
                    <span className='summary__content__row__amount'>R {data.incomeData?.people?.reduce((total, current) => total + current.net, 0)}</span>
                </div>
                <div className='summary__content__row'>
                    <span>Total Amount Saved :</span>
                    <span className='summary__content__row__amount'>R {data.incomeData?.people?.reduce((total, current) => total + current.saveAmount, 0)}</span>
                </div>
                <div className='summary__content__row'>
                    <span>Total Left After Savings :</span>
                    <span className='summary__content__row__amount'>R {data.incomeData?.people?.reduce((total, current) => total + current.afterSavings, 0)}</span>
                </div>
                <div className='summary__content__row'>
                    <span>Total Expenses :</span>
                    <span className='summary__content__row__amount'>R {data.expenseData}</span>
                </div>
            </div>
            {/* ?? 0 --> null-coalescing --> hy kyk of is die waarde wat terugkom n null, as hy n null is, maak dit n 0. As nie, maak dit sy waarde.  */}
            <h2 role='summaryTotal' className='summary__total'>What's Left: R
                {isNaN(data.incomeData?.people?.reduce((total, current) => total + current.net, 0) - (data.expenseData))
                    ? 0
                    : data.incomeData?.people?.reduce((total, current) => total + current.net, 0) - (data.expenseData)}</h2>
        </div>
    );
}

export default Summary;