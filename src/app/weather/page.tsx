'use client'
import { Paper, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import ReactWeather, { useWeatherBit } from 'react-open-weather';
import Styles from './page.module.css'
export default function WeatherComponent() {

  const theme = useTheme()
  const [userLocation, setuserLocation] = useState<{latitude: number, longitude: number}>()
  
  useEffect(()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setuserLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }
  }, [])

  const { data, isLoading, errorMessage } = useWeatherBit({
    key: '794cf47edce043f9a86ef74fd72f601b',
    lat: `${userLocation?.latitude}`,
    lon: `${userLocation?.longitude}`,
    lang: 'pt',
    unit: 'M',
  });

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Paper
        sx={{
          width: '95%',
          height: '93%',
          borderRadius: '50px',
          padding: '20px',
          [theme.breakpoints.down('lg')]: {
            width: '83%'
          },
          backgroundColor: '#007ced',
          flexDirection: 'column'
        }}
        className={Styles.backgroundWeather}
      >
        <Typography fontFamily='fantasy' variant='h4'> Tempo no local</Typography>
        { data && <ReactWeather
          isLoading={isLoading}
          errorMessage={''}
          data={data}
          lang="pt"
          locationLabel={`${data.location}`}
          unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
          showForecast
        />}
      </Paper>

    </div>
  )

}