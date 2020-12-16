import React, {useState} from 'react';

import {Select, Button, Paper, MenuItem, InputLabel, FormControl} from '@material-ui/core';
import {useDispatch, useSelector} from "react-redux";
import {FETCH_ADDRESS_REQUEST, fetchRoutingRequest} from "../actions/routeAction";


function SelectForm() {
    const [addressFrom, setAddressFrom] = useState('');
    const [addressTo, setAddressTo] = useState('');
    const [openFrom, setOpenFrom] = useState(false);
    const [openTo, setOpenTo] = useState(false);

    const dispatch = useDispatch();
    const addressListArray = useSelector((state) => state.addressList.addressItems )



    const handleChangeFrom = (event) => {
         setAddressFrom(event.target.value);

    };

    const handleChangeTo = (event) => {
        setAddressTo(event.target.value);
    };

    const handleCloseFrom = () => {
        setOpenFrom(false);
    };

    const handleCloseTo = () => {
        setOpenTo(false);
    };

    const handleOpenFrom = () => {
        setOpenFrom(true);
        dispatch({type: FETCH_ADDRESS_REQUEST})


    };
    const handleOpenTo = () => {
        setOpenTo(true);
        dispatch({type: FETCH_ADDRESS_REQUEST})

    };
    const addRouting = (e) => {
        e.preventDefault();
        dispatch(fetchRoutingRequest({addressFrom, addressTo}))


    };




    return (
        <Paper
            elevation={3}
            className="form-select"
        >
            <form data-testid='select' onSubmit={addRouting} noValidate autoComplete="off" className='form'>
                <div className="selects">
                    <FormControl className='formControl'>
                        <InputLabel id="demo-mutiple-name-label-1">Откуда</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label-1"
                            id="demo-controlled-open-select-1"
                            open={openFrom}
                            onClose={handleCloseFrom}
                            onOpen={handleOpenFrom}
                            value={addressFrom}
                            onChange={handleChangeFrom}
                            className='select'
                        >
                            {addressListArray.filter((addressFrom) => addressFrom !== addressTo
                            ).map((addressFrom, index) => (
                                <MenuItem value={addressFrom} key={index}>{addressFrom}</MenuItem>
                            ))
                            }

                        </Select>
                    </FormControl>
                    <FormControl className='formControl'>
                        <InputLabel id="demo-mutiple-name-label-2">Куда</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label-2"
                            id="demo-controlled-open-select-2"
                            open={openTo}
                            onClose={handleCloseTo}
                            onOpen={handleOpenTo}
                            value={addressTo}
                            onChange={handleChangeTo}
                            className='select'
                        >

                            {addressListArray.filter((addressTo) => addressTo !== addressFrom
                            ).map((addressTo, index) => (
                                <MenuItem value={addressTo} key={index}>{addressTo}</MenuItem>
                                ))
                            }

                        </Select>
                    </FormControl>
                </div>
                <Paper
                    elevation={3}
                    className="form-select--auto"
                >
                    <Button
                        variant="contained"
                        fullWidth={true}
                        className='button'
                        type='submit'
                        disabled={!addressFrom || !addressTo}
                    >
                        Заказать
                    </Button>
                </Paper>
            </form>
        </Paper>
    );
}

export default SelectForm;
