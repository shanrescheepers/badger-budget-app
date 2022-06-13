import './Income.scss';
import logo from '../../assets/badger.svg';

function Income() {
    return (
        <section className="income">
            <div className='income__header'>
                <img className='income__header__image' src={logo} />
                <h1 className='income__header__title'>Budgeting App</h1>
            </div>
            <div className='income__add-button'>
                <button onClick={""}>ADD</button>
            </div>
            <div className='income__household'>
                {/* FOR LOOP */}
                <div className='income__household__card'>
                    <input className='income__household__card__ns' placeholder='Full Name'></input>
                    <input className='income__household__card__gross' placeholder='Gross Salary'></input>
                    <span className='income__household__card__taxb'>Tax Bracket: X</span>
                    <span className='income__household__card__net'>Net Income: R X</span>
                    <input className='income__household__card__save' placeholder='Savings %'></input>
                    <span className='income__household__card__pocket'>After Savings: R x</span>
                </div>
                <div className='income__household__card'>
                    <input className='income__household__card__ns' placeholder='Full Name'></input>
                    <input className='income__household__card__gross' placeholder='Gross Salary'></input>
                    <span className='income__household__card__taxb'>Tax Bracket: X</span>
                    <span className='income__household__card__net'>Net Income: R X</span>
                    <input className='income__household__card__save' placeholder='Savings %'></input>
                    <span className='income__household__card__pocket'>After Savings: R x</span>
                </div>
                <div className='income__household__card'>
                    <input className='income__household__card__ns' placeholder='Full Name'></input>
                    <input className='income__household__card__gross' placeholder='Gross Salary'></input>
                    <span className='income__household__card__taxb'>Tax Bracket: X</span>
                    <span className='income__household__card__net'>Net Income: R X</span>
                    <input className='income__household__card__save' placeholder='Savings %'></input>
                    <span className='income__household__card__pocket'>After Savings: R x</span>
                </div>
                <div className='income__household__card'>
                    <input className='income__household__card__ns' placeholder='Full Name'></input>
                    <input className='income__household__card__gross' placeholder='Gross Salary'></input>
                    <span className='income__household__card__taxb'>Tax Bracket: X</span>
                    <span className='income__household__card__net'>Net Income: R X</span>
                    <input className='income__household__card__save' placeholder='Savings %'></input>
                    <span className='income__household__card__pocket'>After Savings: R x</span>
                </div>
                <div className='income__household__card'>
                    <input className='income__household__card__ns' placeholder='Full Name'></input>
                    <input className='income__household__card__gross' placeholder='Gross Salary'></input>
                    <span className='income__household__card__taxb'>Tax Bracket: X</span>
                    <span className='income__household__card__net'>Net Income: R X</span>
                    <input className='income__household__card__save' placeholder='Savings %'></input>
                    <span className='income__household__card__pocket'>After Savings: R x</span>
                </div>
            </div>
            <div className='income__total'>
                <span className='income__total__text'>What's Left: RX</span>
            </div>
        </section>
    );
}

export default Income;
