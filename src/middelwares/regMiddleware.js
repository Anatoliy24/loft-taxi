import {
    FETCH_REG_REQUEST

} from "../actions/authAction";

export const regMiddleware = store => next => action => {
    const result = next(action);
    if (action.type === FETCH_REG_REQUEST) {
        const dataReg = {email: action.payload.email, password: action.payload.password, name: action.payload.name, surname: action.payload.surName}
        fetch(`https://loft-taxi.glitch.me/register`,

            {
                method: 'POST',
                body: JSON.stringify(dataReg),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                  alert('Регистрация успешно выполнена')
                } else {
                    alert('Произошел сбой' + data.error)
                }
            })
            .catch(error => {
                alert('Произошел сбой')
            })
    }
    return result;
};