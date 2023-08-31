import { useState, useEffect } from 'react'
import { CepServiceType, CepServiceDataType } from '@/shared/Types'
import { cepAPI } from '@/services'


export const useCepHook = () => {
    const [cepData, setCepData] = useState<CepServiceDataType[]>([])

    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')

    useEffect(()=>{
        if (state !== '' && city !== '' && street !== '') getCep({ state, city, street})
    }, [state, city, street])

    const getCep = async ({city, state, street}: CepServiceType) => {
        try {
            const { data } = await cepAPI({city, state, street}).get('')
            if (data) setCepData(JSON.parse(data))
        }catch(e){
            console.log(e)
        }
    }

    return { getCep, cepData, setState, setCity, setStreet, state, city, street}
}