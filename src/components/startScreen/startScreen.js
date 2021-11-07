import React from 'react';


import Button from 'react-bootstrap/Button';
import './startScreen.css';


function StartScreen(props) {
    let NotRemovedCurrenciesId = JSON.parse(localStorage.getItem('notDeleteCur'));



    if (props.data[0] != undefined) {
        var result = props.data.filter((num) => {
            return NotRemovedCurrenciesId.indexOf(num.Cur_Abbreviation) != -1;
        });
    }
    if (result === undefined) result = []
    console.log(result)

    return (
        <div>
            <Button variant="primary" onClick={() => { props.setUpdate(true) }}>Обновить</Button>

            {
                result.map(item => (
                    <li key={item.Cur_ID}>
                        {item.Cur_Abbreviation} {item.Cur_Name} {item.Cur_OfficialRate}
                    </li>
                ))
            }

        </div>
    );


}

export default StartScreen;