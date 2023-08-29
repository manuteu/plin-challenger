'use client'
import { changeCurrent, changeLat, changeLocation, changeLong, ClimateState } from '@/redux/ducks/climate'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from './components/Container'
import Lottie from "lottie-react";
import WeatherLottie from '../../utils/loadingWeather.json'

export default function Weather() {
  const dispatch = useDispatch()
  const { lat, long } = useSelector((state: any): ClimateState => state.climate);
  const [geoLocationError, setGeoLocationError] = useState(false)
  const [loading, setLoading] = useState(false)

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude.toString();
        dispatch(changeLat(lat))
        const long = position.coords.longitude.toString();
        dispatch(changeLong(long))
      },
      (error) => {
        console.error("Error getting user location:", error);
        setGeoLocationError(true)
      }
    );
  }

  const getWeather = async () => {
    setLoading(true)
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=108e76856c964271b19200139232608&q=${lat},${long}&aqi=yes&lang=pt`)
      const getResponse = await response.json()
      dispatch(changeLocation(getResponse.location))
      dispatch(changeCurrent(getResponse.current))

      await new Promise(resolve => setTimeout(resolve, 1500))
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if ("geolocation" in navigator) {
      getLocation()
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [])

  useEffect(() => {
    if (lat && long) {
      getWeather()
    }
  }, [lat])

  return (
    <div className='pt-16'>
      {geoLocationError && (
        <span>Para buscar o clima de onde está é preciso permitir a Geo Localização do Navegador</span>
      )}
      {
        loading ? (
          <Lottie className='h-[340px]' animationData={WeatherLottie} loop={true} />
        ) : (
          <Container />
        )
      }
    </div>
  )
}
