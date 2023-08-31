import { Axios } from 'axios'
import { CepServiceType } from '@/shared/Types'

const cepAPI = ({state, city, street}: CepServiceType) => new Axios({
    baseURL: `https://viacep.com.br/ws/${state}/${city}/${street.split(' ').join('+')}/json/`
})

export { cepAPI }