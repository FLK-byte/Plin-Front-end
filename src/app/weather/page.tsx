'use client'
import ReactWeather, { useWeatherBit } from 'react-open-weather';

export default function WeatherComponent() {

/* const { data, isLoading, errorMessage } = useWeatherBit({
  key: '794cf47edce043f9a86ef74fd72f601b',
  lat: '48.137154',
  lon: '11.576124',
  lang: 'en',
  unit: 'M', // values are (M,S,I)
}); */
const mockedData = {
    "location": "Munich",
    "forecast": [
      {
        "date": "Thu 31 August",
        "description": "Light rain",
        "icon": "M0 19.188q0-2.875 1.797-5.117t4.547-2.883q0.781-3.406 3.516-5.594t6.25-2.188q3.438 0 6.133 2.133t3.508 5.477h0.531q2.234 0 4.141 1.086t3.016 2.969 1.109 4.117q0 2.188-1.055 4.070t-2.883 3.008-4 1.188q-0.328 0-0.328-0.281v-2.219q0-0.297 0.328-0.297 2.125-0.109 3.633-1.703t1.508-3.766-1.625-3.773-3.844-1.602h-2.688q-0.297 0-0.297-0.281l-0.125-0.969q-0.281-2.703-2.32-4.523t-4.742-1.82q-2.734 0-4.758 1.82t-2.273 4.523l-0.125 0.891q0 0.313-0.328 0.313l-0.875 0.047q-2.078 0.25-3.492 1.781t-1.414 3.594q0 2.172 1.5 3.766t3.641 1.703q0.281 0 0.281 0.297v2.219q0 0.281-0.281 0.281-3.344-0.156-5.664-2.547t-2.32-5.719zM8.922 30.328q0-0.109 0.063-0.328l2.719-9.609q0.156-0.484 0.539-0.734t0.773-0.25q0.172 0 0.406 0.047 0.594 0.109 0.898 0.609t0.133 1.109l-2.719 9.547q-0.313 1.063-1.375 1.063-0.094 0-0.188-0.031-0.141-0.047-0.172-0.047-0.547-0.156-0.813-0.555t-0.266-0.82zM13.297 35.016l4.063-14.625q0.109-0.484 0.5-0.734t0.813-0.25q0.219 0 0.453 0.047 0.547 0.156 0.813 0.648t0.109 1.070l-4.047 14.641q-0.094 0.422-0.484 0.719t-0.844 0.297q-0.234 0-0.422-0.078-0.5-0.125-0.859-0.656-0.281-0.438-0.094-1.078zM20.172 30.375q0-0.094 0.063-0.375l2.719-9.609q0.141-0.484 0.508-0.734t0.773-0.25q0.203 0 0.438 0.047 0.516 0.141 0.773 0.516t0.258 0.781q0 0.078-0.031 0.227t-0.031 0.195l-2.719 9.547q-0.094 0.484-0.469 0.773t-0.844 0.289l-0.406-0.078q-0.5-0.141-0.766-0.539t-0.266-0.789z",
        "temperature": {
          "min": "13",
          "max": "19"
        },
        "wind": "3",
        "humidity": 70
      },
      {
        "date": "Fri 1 September",
        "description": "Light rain",
        "icon": "M0 19.188q0-2.875 1.797-5.117t4.547-2.883q0.781-3.406 3.516-5.594t6.25-2.188q3.438 0 6.133 2.133t3.508 5.477h0.531q2.234 0 4.141 1.086t3.016 2.969 1.109 4.117q0 2.188-1.055 4.070t-2.883 3.008-4 1.188q-0.328 0-0.328-0.281v-2.219q0-0.297 0.328-0.297 2.125-0.109 3.633-1.703t1.508-3.766-1.625-3.773-3.844-1.602h-2.688q-0.297 0-0.297-0.281l-0.125-0.969q-0.281-2.703-2.32-4.523t-4.742-1.82q-2.734 0-4.758 1.82t-2.273 4.523l-0.125 0.891q0 0.313-0.328 0.313l-0.875 0.047q-2.078 0.25-3.492 1.781t-1.414 3.594q0 2.172 1.5 3.766t3.641 1.703q0.281 0 0.281 0.297v2.219q0 0.281-0.281 0.281-3.344-0.156-5.664-2.547t-2.32-5.719zM8.922 30.328q0-0.109 0.063-0.328l2.719-9.609q0.156-0.484 0.539-0.734t0.773-0.25q0.172 0 0.406 0.047 0.594 0.109 0.898 0.609t0.133 1.109l-2.719 9.547q-0.313 1.063-1.375 1.063-0.094 0-0.188-0.031-0.141-0.047-0.172-0.047-0.547-0.156-0.813-0.555t-0.266-0.82zM13.297 35.016l4.063-14.625q0.109-0.484 0.5-0.734t0.813-0.25q0.219 0 0.453 0.047 0.547 0.156 0.813 0.648t0.109 1.070l-4.047 14.641q-0.094 0.422-0.484 0.719t-0.844 0.297q-0.234 0-0.422-0.078-0.5-0.125-0.859-0.656-0.281-0.438-0.094-1.078zM20.172 30.375q0-0.094 0.063-0.375l2.719-9.609q0.141-0.484 0.508-0.734t0.773-0.25q0.203 0 0.438 0.047 0.516 0.141 0.773 0.516t0.258 0.781q0 0.078-0.031 0.227t-0.031 0.195l-2.719 9.547q-0.094 0.484-0.469 0.773t-0.844 0.289l-0.406-0.078q-0.5-0.141-0.766-0.539t-0.266-0.789z",
        "temperature": {
          "min": "14",
          "max": "23"
        },
        "wind": "2",
        "humidity": 67
      },
      {
        "date": "Sat 2 September",
        "description": "Scattered clouds",
        "icon": "M0 20.328q0-2.484 1.547-4.414t3.969-2.477q0.641-2.938 2.969-4.805t5.359-1.867q2.953 0 5.273 1.82t3.008 4.664h0.453q2.938 0 5.016 2.070t2.078 5.008-2.078 5.023-5.016 2.086h-15.469q-1.438 0-2.758-0.563t-2.273-1.516-1.516-2.273-0.563-2.758zM2.422 20.328q0 1.906 1.375 3.273t3.313 1.367h15.469q1.938 0 3.313-1.367t1.375-3.273-1.375-3.266-3.313-1.359h-2.313q-0.25 0-0.25-0.25l-0.109-0.813q-0.25-2.359-1.977-3.914t-4.086-1.555-4.102 1.563-1.961 3.906l-0.109 0.703q0 0.25-0.266 0.25l-0.75 0.109q-1.797 0.156-3.016 1.484t-1.219 3.141zM17.172 5.797q-0.25 0.234 0.125 0.344 1.078 0.469 1.797 0.922 0.281 0.078 0.375-0.047 1.516-1.438 3.531-1.438t3.492 1.352 1.648 3.336l0.156 1.063h2.359q1.625 0 2.797 1.164t1.172 2.773q0 1.5-1.031 2.609t-2.547 1.281q-0.25 0-0.25 0.266v1.891q0 0.266 0.25 0.266 2.516-0.156 4.25-1.984t1.734-4.328q0-2.641-1.867-4.508t-4.508-1.867h-0.25q-0.656-2.5-2.742-4.117t-4.664-1.617q-3.531 0-5.828 2.641z",
        "temperature": {
          "min": "14",
          "max": "26"
        },
        "wind": "2",
        "humidity": 66
      },
      {
        "date": "Sun 3 September",
        "description": "Scattered clouds",
        "icon": "M0 20.328q0-2.484 1.547-4.414t3.969-2.477q0.641-2.938 2.969-4.805t5.359-1.867q2.953 0 5.273 1.82t3.008 4.664h0.453q2.938 0 5.016 2.070t2.078 5.008-2.078 5.023-5.016 2.086h-15.469q-1.438 0-2.758-0.563t-2.273-1.516-1.516-2.273-0.563-2.758zM2.422 20.328q0 1.906 1.375 3.273t3.313 1.367h15.469q1.938 0 3.313-1.367t1.375-3.273-1.375-3.266-3.313-1.359h-2.313q-0.25 0-0.25-0.25l-0.109-0.813q-0.25-2.359-1.977-3.914t-4.086-1.555-4.102 1.563-1.961 3.906l-0.109 0.703q0 0.25-0.266 0.25l-0.75 0.109q-1.797 0.156-3.016 1.484t-1.219 3.141zM17.172 5.797q-0.25 0.234 0.125 0.344 1.078 0.469 1.797 0.922 0.281 0.078 0.375-0.047 1.516-1.438 3.531-1.438t3.492 1.352 1.648 3.336l0.156 1.063h2.359q1.625 0 2.797 1.164t1.172 2.773q0 1.5-1.031 2.609t-2.547 1.281q-0.25 0-0.25 0.266v1.891q0 0.266 0.25 0.266 2.516-0.156 4.25-1.984t1.734-4.328q0-2.641-1.867-4.508t-4.508-1.867h-0.25q-0.656-2.5-2.742-4.117t-4.664-1.617q-3.531 0-5.828 2.641z",
        "temperature": {
          "min": "15",
          "max": "25"
        },
        "wind": "2",
        "humidity": 71
      },
      {
        "date": "Mon 4 September",
        "description": "Scattered clouds",
        "icon": "M0 20.328q0-2.484 1.547-4.414t3.969-2.477q0.641-2.938 2.969-4.805t5.359-1.867q2.953 0 5.273 1.82t3.008 4.664h0.453q2.938 0 5.016 2.070t2.078 5.008-2.078 5.023-5.016 2.086h-15.469q-1.438 0-2.758-0.563t-2.273-1.516-1.516-2.273-0.563-2.758zM2.422 20.328q0 1.906 1.375 3.273t3.313 1.367h15.469q1.938 0 3.313-1.367t1.375-3.273-1.375-3.266-3.313-1.359h-2.313q-0.25 0-0.25-0.25l-0.109-0.813q-0.25-2.359-1.977-3.914t-4.086-1.555-4.102 1.563-1.961 3.906l-0.109 0.703q0 0.25-0.266 0.25l-0.75 0.109q-1.797 0.156-3.016 1.484t-1.219 3.141zM17.172 5.797q-0.25 0.234 0.125 0.344 1.078 0.469 1.797 0.922 0.281 0.078 0.375-0.047 1.516-1.438 3.531-1.438t3.492 1.352 1.648 3.336l0.156 1.063h2.359q1.625 0 2.797 1.164t1.172 2.773q0 1.5-1.031 2.609t-2.547 1.281q-0.25 0-0.25 0.266v1.891q0 0.266 0.25 0.266 2.516-0.156 4.25-1.984t1.734-4.328q0-2.641-1.867-4.508t-4.508-1.867h-0.25q-0.656-2.5-2.742-4.117t-4.664-1.617q-3.531 0-5.828 2.641z",
        "temperature": {
          "min": "15",
          "max": "24"
        },
        "wind": "2",
        "humidity": 68
      }
    ],
    "current": {
      "date": "Thu 31 August",
      "description": "Broken clouds",
      "icon": "M0 20.328q0-2.484 1.547-4.414t3.969-2.477q0.641-2.938 2.969-4.805t5.359-1.867q2.953 0 5.273 1.82t3.008 4.664h0.453q2.938 0 5.016 2.070t2.078 5.008-2.078 5.023-5.016 2.086h-15.469q-1.438 0-2.758-0.563t-2.273-1.516-1.516-2.273-0.563-2.758zM2.422 20.328q0 1.906 1.375 3.273t3.313 1.367h15.469q1.938 0 3.313-1.367t1.375-3.273-1.375-3.266-3.313-1.359h-2.313q-0.25 0-0.25-0.25l-0.109-0.813q-0.25-2.359-1.977-3.914t-4.086-1.555-4.102 1.563-1.961 3.906l-0.109 0.703q0 0.25-0.266 0.25l-0.75 0.109q-1.797 0.156-3.016 1.484t-1.219 3.141zM17.172 5.797q-0.25 0.234 0.125 0.344 1.078 0.469 1.797 0.922 0.281 0.078 0.375-0.047 1.516-1.438 3.531-1.438t3.492 1.352 1.648 3.336l0.156 1.063h2.359q1.625 0 2.797 1.164t1.172 2.773q0 1.5-1.031 2.609t-2.547 1.281q-0.25 0-0.25 0.266v1.891q0 0.266 0.25 0.266 2.516-0.156 4.25-1.984t1.734-4.328q0-2.641-1.867-4.508t-4.508-1.867h-0.25q-0.656-2.5-2.742-4.117t-4.664-1.617q-3.531 0-5.828 2.641z",
      "temperature": {
        "current": "13",
        "min": "13",
        "max": "19"
      },
      "wind": "3",
      "humidity": 80
    }
  }
    return (
    <div>
        <ReactWeather
            isLoading={false}
            errorMessage={''}
            data={mockedData}
            lang="en"
            locationLabel="Munich"
            unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
            showForecast
        />
    </div> 
    )    
    
}