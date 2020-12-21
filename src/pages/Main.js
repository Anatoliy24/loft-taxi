import React from 'react';
import SelectForm from "../components/selectForm";
import Map from "../components/map";
import WarningForm from "../components/warningForm";
import {useSelector} from "react-redux";


function Main() {
    const profileData = useSelector((state) => state.profile)
    const isSelect = profileData.nameUser && profileData.numberCard && profileData.expiryDate && profileData.cvc

    return (
        <div className="main">
            <Map/>
            {isSelect
                ?
                <SelectForm/>
                :
                <WarningForm/>
            }
        </div>
    );
}

export default Main;
