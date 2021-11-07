import { useEffect, useState } from "react";
import SettingData from "../settings/setting";
import StartScreen from "../startScreen/startScreen";

function GetData() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [update, setUpdate] = useState('qwe1');


    useEffect(() => {
        fetch("https://www.nbrb.by/api/exrates/rates?periodicity=0")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        setUpdate(false)
    }, [update])


    SettingData(items)
    return <StartScreen data={items} setData={setItems} update={update} setUpdate={setUpdate} />;
}

export default GetData;