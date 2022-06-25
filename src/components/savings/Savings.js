import { useState, useEffect } from 'react';
import './Savings.scss';

function Savings(incomeData) {

    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (incomeData.incomeData.people) {
            setTotal(incomeData.incomeData.people?.reduce((total, current) => total + current.saveAmount, 0));
        }
    })
    // vraagteken is n null check, veral as console, cannot read props of undefinded, map, gee. ? se, as hy null is, ignore hom, overlook dit. maar passop, dit is nie altyd altyud null nie.
    return (
        <div className='savings'>
            <span className='savings__title'>Household Savings</span>
            <div className='savings__content'>
                {/* dis n object wat deurkom, soos gesien op lyn 3, so, object.data.laerdata.map(dit wat j soek) */}
                {incomeData.incomeData.people?.map((person, personKey) =>
                    <div key={personKey} className='savings__content__row'>
                        <span>{person.name} {person.surname}</span>
                        <span className='savings__content__row__amount'>R {person.saveAmount}</span>
                    </div>
                )}
            </div>
            <h2 className='savings__total'>TOTAL SAVINGS: R{total}</h2>
        </div>
    );
}

export default Savings;