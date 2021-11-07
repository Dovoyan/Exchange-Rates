import { useEffect, useRef, useState } from "react";
import './settingPage.css'


function DeleteCur(Cur_ID, setUpdate) {
    let NotRemovedCurrenciesId = JSON.parse(localStorage.getItem('notDeleteCur'));
    if (NotRemovedCurrenciesId === null) NotRemovedCurrenciesId = []

    let RemovedCurrenciesId = JSON.parse(localStorage.getItem('DeleteCur'));
    if (RemovedCurrenciesId === null) RemovedCurrenciesId = []

    if (NotRemovedCurrenciesId.length != 0) {
        if (NotRemovedCurrenciesId.indexOf(Cur_ID) != -1) {
            NotRemovedCurrenciesId.splice(NotRemovedCurrenciesId.indexOf(Cur_ID), 1)
            localStorage.setItem('notDeleteCur', JSON.stringify(NotRemovedCurrenciesId));
            RemovedCurrenciesId.push(Cur_ID);
            localStorage.setItem('DeleteCur', JSON.stringify(RemovedCurrenciesId));
            setUpdate(true)
        }
    }
}

function ReturnCur(Cur_ID, setUpdate) {
    let NotRemovedCurrenciesId = JSON.parse(localStorage.getItem('notDeleteCur'));
    if (NotRemovedCurrenciesId === null) NotRemovedCurrenciesId = []

    let RemovedCurrenciesId = JSON.parse(localStorage.getItem('DeleteCur'));
    if (RemovedCurrenciesId === null) RemovedCurrenciesId = []

    if (RemovedCurrenciesId.length != 0) {
        if (RemovedCurrenciesId.indexOf(Cur_ID) != -1) {
            RemovedCurrenciesId.splice(RemovedCurrenciesId.indexOf(Cur_ID), 1)
            localStorage.setItem('DeleteCur', JSON.stringify(RemovedCurrenciesId));
            NotRemovedCurrenciesId.push(Cur_ID);
            localStorage.setItem('notDeleteCur', JSON.stringify(NotRemovedCurrenciesId));
            setUpdate(true)
        }
    }
}



function SettingPage() {
    const [update, setUpdate] = useState('qwe1');
    const [CurrenciesId, setCurrenciesId] = useState([]);
    const inputEl = useRef(null);

    let RemovedCurrenciesId = JSON.parse(localStorage.getItem('DeleteCur'));
    if (RemovedCurrenciesId === null) RemovedCurrenciesId = []

    useEffect(() => {
        let NotRemovedCurrenciesId = JSON.parse(localStorage.getItem('notDeleteCur'));
        if (NotRemovedCurrenciesId === null) NotRemovedCurrenciesId = []
        setCurrenciesId(NotRemovedCurrenciesId)
        setUpdate(false)
    }, [update])

    return (
        <div>
            <div className='Cur_return'>
                <select ref={inputEl} >
                    {
                        RemovedCurrenciesId.map(item => (
                            <option > {item}</option>
                        ))
                    }
                </select>
                <button onClick={() => ReturnCur(inputEl.current.value, setUpdate)} >return</button>
            </div>
            {
                CurrenciesId.map(item => (
                    <li className='Cur_setting' key={item.Cur_ID}>
                        <div className='Cur_id'>{item}</div> <button onClick={() => { DeleteCur(item, setUpdate) }}>delete</button>
                    </li>
                ))
            }
        </div>
    );

}

export default SettingPage;