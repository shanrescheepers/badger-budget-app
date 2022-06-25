import './Bracket.scss';

function Bracket() {
    return (
        <div role='bracketCat' className='bracket'>
            <span className='bracket__title'>Tax Bracket Categories</span>
            <div className='bracket__content'>
                <div className='bracket__content__row'>
                    <h4>R1 - R226000</h4>
                    <h4 className='bracket__content__row__amount'>Category 1</h4>
                </div>
                <div className='bracket__content__row'>
                    <h4>R226001 - R353100</h4>
                    <h4 className='bracket__content__row__amount'>Category 2</h4>
                </div>
                <div className='bracket__content__row'>
                    <h4>R353101 - R488700</h4>
                    <h4 className='bracket__content__row__amount'>Category 3</h4>
                </div>
                <div className='bracket__content__row'>
                    <h4>R488701 - R641400</h4>
                    <h4 className='bracket__content__row__amount'>Category 4</h4>
                </div>
                <div className='bracket__content__row'>
                    <h4>R641401 - R817600</h4>
                    <h4 className='bracket__content__row__amount'>Category 5</h4>
                </div>
                <div className='bracket__content__row'>
                    <h4>R817601 - R1731600</h4>
                    <h4 className='bracket__content__row__amount'>Category 6</h4>
                </div>
                <div className='bracket__content__row'>
                    <h4>R1731601 and above</h4>
                    <h4 className='bracket__content__row__amount'>Category 7</h4>
                </div>
            </div>
        </div>
    );
}

export default Bracket;