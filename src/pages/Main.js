import React from 'react';
import SelectForm from "../components/selectForm";
import Map from "../components/map";
import WarningForm from "../components/warningForm";
import {useSelector} from "react-redux";




function Main() {
    const profileData = useSelector((state) => state.profile )

    return (
        <div className="main">
            <Map/>
            {(profileData.nameUser) && (profileData.numberCard) && (profileData.expiryDate) && (profileData.cvc)
                ?
                <SelectForm/>
                :
                <WarningForm/>

            }
        </div>
    );
}

export default Main;
