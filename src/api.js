

export const registration = async (dataReg) =>{
    const response = await (
        await  fetch(`https://loft-taxi.glitch.me/register`,

            {
                method: 'POST',
                body: JSON.stringify(dataReg),
                headers: {
                    'Content-Type': 'application/json'
                },
            })

    ).json()

    if(!response.success) throw new Error(response.error)

    return response

}

export const authorize = async (dataAuth) =>{
    const response = await (
        await  fetch(`https://loft-taxi.glitch.me/auth`,

            {
                method: 'POST',
                body: JSON.stringify(dataAuth),
                headers: {
                    'Content-Type': 'application/json'
                },
            })

    ).json()

    if(!response.success) throw new Error(response.error)

    return response

}

export const saveProfile = async (dataProfile) =>{
    const response = await (
        await  fetch(`https://loft-taxi.glitch.me/card`,

            {
                method: 'POST',
                body: JSON.stringify(dataProfile),
                headers: {
                    'Content-Type': 'application/json'
                },
            })

    ).json()

    if(!response.success) throw new Error(response.error)

    return response

}


export const fetchAddressList = async (dataAddressList) =>{
    const response = await (
        await  fetch(`https://loft-taxi.glitch.me/addressList`)).json()
    return response

}

export const getRouting = async (addressFrom, addressTo) =>{
    const response = await (
        await  fetch(`https://loft-taxi.glitch.me/route?address1=${addressFrom}&address2=${addressTo}`)).json()

    return response

}