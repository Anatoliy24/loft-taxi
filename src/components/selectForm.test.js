import React from 'react';
import {render} from '@testing-library/react'
import SelectForm from "./selectForm";

describe('SelectForm', ()=>{
    it('корректный рендеринг', ()=>{
        const {getByTestId} = render(<SelectForm/>)
        expect(getByTestId('select'))
    })
})
