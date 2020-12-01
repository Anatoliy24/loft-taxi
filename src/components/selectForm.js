import React, {useState} from 'react';

import {Select, Button, Paper, MenuItem, InputLabel, FormControl} from '@material-ui/core';


function SelectForm() {
    const [age, setAge] = useState('');
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <Paper
            elevation={3}
            className="form-select"
        >


            <form data-testid='select' noValidate autoComplete="off" className='form'>
                <div className="selects">
                    <FormControl className='formControl'>
                        <InputLabel  id="demo-mutiple-name-label-1">Откуда</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label-1"
                            id="demo-controlled-open-select-1"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={age}
                            onChange={handleChange}
                            className='select'
                        >
                            <MenuItem value={0}>Лесная поляна 34, п.8</MenuItem>
                            <MenuItem value={0}>Лесная поляна 35, п.8</MenuItem>
                            <MenuItem value={0}>Лесная поляна 36, п.8</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className='formControl'>
                        <InputLabel id="demo-mutiple-name-label-2">Куда</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label-2"
                            id="demo-controlled-open-select-2"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={age}
                            onChange={handleChange}
                            className='select'
                        >
                            <MenuItem value={0}>Лесная поляна 34, п.8</MenuItem>
                            <MenuItem value={0}>Лесная поляна 35, п.8</MenuItem>
                            <MenuItem value={0}>Лесная поляна 36, п.8</MenuItem>
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
                    >
                        Заказать
                    </Button>
                </Paper>
            </form>
        </Paper>
    );
}

export default SelectForm;
