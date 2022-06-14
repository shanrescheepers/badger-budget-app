import './Income.scss';
import logo from '../../assets/badger.svg';
import React from 'react';
import { useState } from 'react';

function Income({ householdIncomeData }) {
    // household income data kan nou inkom, maar gaan na parent toe gestuur
    const [incomeData, setIncomeData] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        calculateTax(incomeData.gross)
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setIncomeData(values => ({ ...values, [name]: value }))
    }

    const calculateTax = (gross) => {
        var yearlyGross = gross * 12;
        var yearlyNet = 0;

        var taxDiff = 0;

        if (yearlyGross <= 226000) {
            // tax bracket
            yearlyNet = yearlyGross - (yearlyGross * 0.18);
        } else if (yearlyGross <= 353100) {
            // tax diff, enige iets meer as 226000, alles meer as dit, 26% van dit word getax.
            taxDiff = yearlyGross - 226000;
            taxDiff = taxDiff * 0.26;
            yearlyNet = yearlyGross - taxDiff - 40680;
        } else if (yearlyGross <= 488700) {
            // tax diff, enige iets meer as 226000, alles meer as dit, 26% van dit word getax.
            taxDiff = yearlyGross - 353101;
            taxDiff = taxDiff * 0.31;
            yearlyNet = yearlyGross - taxDiff - 73726;
        } else if (yearlyGross <= 641400) {
            // tax diff, enige iets meer as 226000, alles meer as dit, 26% van dit word getax.
            taxDiff = yearlyGross - 488700;
            taxDiff = taxDiff * 0.36;
            yearlyNet = yearlyGross - taxDiff - 115762;
        } else if (yearlyGross <= 817600) {
            // tax diff, enige iets meer as 226000, alles meer as dit, 26% van dit word getax.
            taxDiff = yearlyGross - 641400;
            taxDiff = taxDiff * 0.39;
            yearlyNet = yearlyGross - taxDiff - 170734;
        } else if (yearlyGross <= 1731600) {
            // tax diff, enige iets meer as 226000, alles meer as dit, 26% van dit word getax.
            taxDiff = yearlyGross - 817600;
            taxDiff = taxDiff * 0.41;
            yearlyNet = yearlyGross - taxDiff - 239452;
        } else {
            taxDiff = yearlyGross - 1731600;
            taxDiff = taxDiff * 0.45;
            yearlyNet = yearlyGross - taxDiff - 614192;
        }
        console.log(Math.round(yearlyNet / 12 * 100) / 100);
        return Math.round(yearlyNet / 12 * 100) / 100
    }

    return (
        <section className="income">
            <div className='income__header'>
                <img className='income__header__image' src={logo} />
                <h1 className='income__header__title'>Budgeting App</h1>
            </div>
            <form onSubmit={handleSubmit} className='income__add'>
                <input name='name' onChange={handleChange} placeholder='Name'></input>
                <input name='surname' onChange={handleChange} placeholder='Surname'></input>
                <input onChange={handleChange} name='gross' placeholder='Gross Salary'></input>

                <select onChange={handleChange} defaultValue={"DEFAULT"} name='savePercentage' placeholder='Select Saving %' >
                    <option value="DEFAULT" disabled >Savings %</option>
                    <option value="0.05">5%</option>
                    <option value="0.1">10%</option>
                    <option value="0.15">15%</option>
                    <option value="0.20">20%</option>
                    <option value="0.25">25%</option>
                    <option value="0.30">30%</option>
                </select>

                <button type='submit' className='income__add__button'>ADD</button>
            </form>
            <div className='income__household'>
                <h3 className='income__household__title'>Household calculations...</h3>
                <div className='income__household__card' >
                    <span className='income__household__card__ns' >Name surname</span>
                    <span className='income__household__card__gross'>Gross</span>
                    <span className='income__household__card__taxb'>Tax Bracket: R {calculateTax(incomeData.gross)}</span>
                    <span className='income__household__card__taxb-amount'>TB R: X</span>
                    <span className='income__household__card__net'>Net Income: R X</span>
                    <span className='income__household__card__save'>% Savings</span>
                    <span className='income__household__card__pocket'>After Savings: R x</span>
                </div>
            </div>
            <div className='income__total'>
                <span className='income__total__text'>What's Left: RX</span>
            </div>
        </section >
    );
}

export default Income;
