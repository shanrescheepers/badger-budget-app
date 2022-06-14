import './Income.scss';
import logo from '../../assets/badger.svg';
import React from 'react';
import { useState } from 'react';

function Income({ householdIncomeData }) {
    // household income data kan nou inkom, maar gaan na parent toe gestuur
    const [peopleData, setPeopleData] = useState({});
    const [incomeData, setIncomeData] = useState({
        people: []
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        let myIncomeData = incomeData.people;

        let person = {
            name: peopleData.name,
            surname: peopleData.surname,
            gross: parseInt(peopleData.gross),
            taxAmount: calculateTax(peopleData.gross),
            taxBracket: calculateTaxBracket(peopleData.gross),
            net: calculateNet(peopleData.gross, calculateTax(peopleData.gross)),
            savePercentage: parseFloat(peopleData.savePercentage),
            saveAmount: Math.round((calculateNet(peopleData.gross, calculateTax(peopleData.gross)) * parseFloat(peopleData.savePercentage)) / 100) * 100,
            afterSavings: Math.round((calculateNet(peopleData.gross, calculateTax(peopleData.gross)) - (calculateNet(peopleData.gross, calculateTax(peopleData.gross)) * parseFloat(peopleData.savePercentage))) / 100) * 100
        }

        myIncomeData.push(person);

        setIncomeData({
            people: myIncomeData
        })

        document.getElementById("personForm").reset();
        console.log(incomeData);
        householdIncomeData(incomeData);
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setPeopleData(values => ({ ...values, [name]: value }))
    }

    const calculateTax = (gross) => {
        var yearlyGross = gross * 12;
        var taxDiff = 0;
        var taxAmount = 0;

        if (yearlyGross <= 226000) {
            // tax bracket
            taxAmount = yearlyGross * 0.18;
        } else if (yearlyGross <= 353100) {
            // tax diff, enige iets meer as 226000, alles meer as dit, 26% van dit word getax.
            taxDiff = yearlyGross - 226000;
            taxDiff = taxDiff * 0.26;
            taxAmount = taxDiff + 40680;
        } else if (yearlyGross <= 488700) {
            // tax diff, enige iets meer as 226000, alles meer as dit, 26% van dit word getax.
            taxDiff = yearlyGross - 353101;
            taxDiff = taxDiff * 0.31;
            taxAmount = taxDiff + 73726;
        } else if (yearlyGross <= 641400) {
            // tax diff, enige iets meer as 226000, alles meer as dit, 26% van dit word getax.
            taxDiff = yearlyGross - 488700;
            taxDiff = taxDiff * 0.36;
            taxAmount = taxDiff + 115762;
        } else if (yearlyGross <= 817600) {
            // tax diff, enige iets meer as 226000, alles meer as dit, 26% van dit word getax.
            taxDiff = yearlyGross - 641400;
            taxDiff = taxDiff * 0.39;
            taxAmount = taxDiff + 170734;
        } else if (yearlyGross <= 1731600) {
            // tax diff, enige iets meer as 226000, alles meer as dit, 26% van dit word getax.
            taxDiff = yearlyGross - 817600;
            taxDiff = taxDiff * 0.41;
            taxAmount = taxDiff + 239452;
        } else {
            taxDiff = yearlyGross - 1731600;
            taxDiff = taxDiff * 0.45;
            taxAmount = taxDiff + 614192;
        }

        return Math.round(taxAmount / 12 * 100) / 100
    }

    const calculateTaxBracket = (gross) => {
        const yearlyGross = gross * 12;

        if (yearlyGross <= 226000) {
            return 'Category 1';
        } else if (yearlyGross <= 353100) {
            return 'Category 2';
        } else if (yearlyGross <= 488700) {
            return 'Category 3';
        } else if (yearlyGross <= 641400) {
            return 'Category 4';
        } else if (yearlyGross <= 817600) {
            return 'Category 5';
        } else if (yearlyGross <= 1731600) {
            return 'Category 6';
        } else {
            return 'Category 7';
        }
    }

    const calculateNet = (gross, taxAmount) => {
        return gross - taxAmount;
    }

    const calculateWhatsLeft = () => {
        var whatsLeft = 0;
        incomeData.people.forEach(person => {
            whatsLeft = whatsLeft + person.afterSavings;
        })

        return whatsLeft;
    }

    return (
        <section className="income">
            <div className='income__header'>
                <img className='income__header__image' src={logo} />
                <h1 className='income__header__title'>Budgeting App</h1>
            </div>
            <form id='personForm' onSubmit={handleSubmit} className='income__add'>
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
                {incomeData.people.map(person =>
                    <div className='income__household__card' >
                        <span className='income__household__card__ns' >{person.name} {person.surname}</span>
                        <span className='income__household__card__gross'>Salary: R {person.gross}</span>
                        <span className='income__household__card__taxb'>Paid to Tax: R {person.taxAmount}</span>
                        <span className='income__household__card__taxb-amount'>Tax Bracket: {person.taxBracket}</span>
                        <span className='income__household__card__net'>Net Salary: R {person.net}</span>
                        <span className='income__household__card__save'>Savings %: {person.savePercentage}
                        </span>
                        <span className='income__household__card__pocket'>Amount Saved: R {person.saveAmount}</span>
                        <span className='income__household__card__pocket'>After Savings: R {person.afterSavings}</span>
                    </div>
                )}
            </div>
            <div className='income__total'>
                <span className='income__total__text'>What's Left: R{calculateWhatsLeft()}</span>
            </div>
        </section >
    );
}

export default Income;
