import {
    FETCH_AUTH_REQUEST,
    fetchAuthFailure,
    fetchAuthSuccess,
} from "../actions/actionAuth";

export const authMiddleware = store => next => action => {
    const result = next(action);
    if (action.type === FETCH_AUTH_REQUEST) {
        console.log(action)
        const dataAuth = {email: action.payload.email, password: action.payload.password}
        fetch(`https://loft-taxi.glitch.me/auth`,

            {
                method: 'POST',
                body: JSON.stringify(dataAuth),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    store.dispatch(fetchAuthSuccess(data.token))
                } else {
                    store.dispatch(fetchAuthFailure(data.error))
                }
            })
            .catch(error => {
                store.dispatch(fetchAuthFailure(error))
            })
    }
    return result;
};