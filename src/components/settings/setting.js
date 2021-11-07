import GetData from "../fetch/fetch";


function SettingData(data) {
    let NotRemovedCurrenciesId = JSON.parse(localStorage.getItem('notDeleteCur'));
    if (NotRemovedCurrenciesId === null) NotRemovedCurrenciesId = []

    let secondData = [];
    if (data.length != 0 && NotRemovedCurrenciesId.length < 1) {
        data.filter((el, index) => {
            secondData.push(el.Cur_Abbreviation)
        })
        localStorage.setItem('notDeleteCur', JSON.stringify(secondData))
    }
}

export default SettingData;


