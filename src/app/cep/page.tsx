'use client'
import { useEffect, useState } from 'react'
import { useCepHook } from '@/hooks'
import { Paper, TextField, Select, MenuItem, useTheme, Grid, Chip, Typography } from '@mui/material'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { states } from '@/shared/Consts'
import { CepServiceDataType } from '@/shared/Types'
export default function CepComponent() {
    const { cepData, setCity, setState, setStreet, state } = useCepHook()
    const [selectedCep, setSelectedCep] = useState<CepServiceDataType>()
    const [animationParent] = useAutoAnimate()
    //<button onClick={async ()=> await getCep({city: 'Guarulhos', state: 'SP', street: 'Rua Freire'})}> a</button>
    useEffect(() => {
        console.log(cepData)
    }, [cepData])

    const theme = useTheme()
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Paper
                ref={animationParent}
                sx={{
                    width: '95%',
                    height: '93%',
                    borderRadius: '50px',
                    padding: '20px',
                    [theme.breakpoints.down('lg')]: {
                        width: '83%'
                    }
                }}>
                <Grid container xl={12}>
                    <Grid container item xl={12} display={'flex'}>
                        <Grid item xs={12}>
                            <Typography variant='h4'>
                                Busca de CEP
                            </Typography>
                        </Grid>
                        <Grid container item xl={12} justifyContent={'space-between'} spacing={2}>
                            <Grid item xs={4}>
                                <Select label='Estado' onChange={(e) => setState(e.target.value as string)} value={state} fullWidth>
                                    {states.map((el, idx) => {
                                        return <MenuItem key={idx} value={el.sigla}>{el.nome}</MenuItem>
                                    })}
                                </Select>
                            </Grid>
                            <Grid item xs={4}>
                                <TextField fullWidth label="Cidade" onChange={(e) => setCity(e.target.value as string)} />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField fullWidth label="Rua" onChange={(e) => setStreet(e.target.value as string)} />
                            </Grid>
                        </Grid>
                        <Grid item ref={animationParent} xl={12}>
                            <Grid>
                                {selectedCep && JSON.stringify(selectedCep)}
                            </Grid>
                            {cepData?.map((el, idx) => <Chip onClick={() => setSelectedCep(el)} key={idx} label={`Cep - ${el.cep}, UF - ${el.uf}, Cidade - ${el.localidade}, Bairro - ${el.bairro}, Rua - ${el.logradouro}`} />)}
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}