type CepServiceType = {
    state: string, 
    city: string, 
    street: string
}

type CepServiceDataType = {
    bairro: string;
    cep: string;
    complemento: string;
    ddd: string;
    gia: string;
    ibge: string;
    localidade: string;
    logradouro: string;
    siafi: string;
    uf: string;
};

export type { CepServiceType, CepServiceDataType }