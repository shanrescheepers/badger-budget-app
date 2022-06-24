import './Income.scss';
import logo from '../../assets/badger.svg';
import React from 'react';
import { useState } from 'react';
import { calculateNet, calculateTax, calculateTaxBracket, calculateSaveAmount, calculateAfterSavings } from '../../calculations/Calculations';

export function Income({ householdIncomeData }) {
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
            gross: parseFloat(peopleData.gross),
            taxAmount: calculateTax(peopleData.gross),
            taxBracket: calculateTaxBracket(peopleData.gross),
            net: calculateNet(peopleData.gross, calculateTax(peopleData.gross)),
            savePercentage: parseFloat(peopleData.savePercentage),
            saveAmount: calculateSaveAmount(calculateNet(peopleData.gross, calculateTax(peopleData.gross)), parseFloat(peopleData.savePercentage)),
            afterSavings: calculateAfterSavings(calculateNet(peopleData.gross, calculateTax(peopleData.gross)), calculateSaveAmount(calculateNet(peopleData.gross, calculateTax(peopleData.gross)), parseFloat(peopleData.savePercentage)))
        }

        myIncomeData.push(person);

        setIncomeData({
            people: myIncomeData
        })

        document.getElementById("personForm").reset();
        householdIncomeData(incomeData);
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setPeopleData(values => ({ ...values, [name]: value }))
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
                <img alt='app logo' className='income__header__image' src={logo} />
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
                {incomeData.people.map((person, personKey) =>
                    <div key={personKey} className='income__household__card' >
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
