'use client'
import React from 'react'
import { useSelector } from 'react-redux';
import { ClimateState } from '../../../redux/ducks/climate';
import Col from './Col'
import Row from './Row'

export default function Table() {
  const { current } = useSelector((state: any): ClimateState => state.climate);
  return (
    <div className='flex sm:flex-col sm:items-center gap-20 sm:gap-3 mt-6 ' >
      <Col>
        <Row icon='therm' name='Temperatura' value={current?.temp_c + ' º'} />
        <Row icon='humidity' name='Umidade' value={current?.humidity + ' %'} />
        <Row icon='pressure' name='Pressão' value={current?.pressure_mb + ' mb'} />
        <Row icon='eye' name='Visibilidade' value={current?.vis_km + ' km'} />
      </Col>
      <Col>
        <Row icon='wind' name='Vento' value={current?.wind_kph + ' km'} />
        <Row icon='sun' name='Período' value={current?.is_day} />
        <Row icon='sun' name='Índice UV' value={current?.uv + ' de 11'} />
        <Row icon='therm' name='Sensação Térmica' value={current?.feelslike_c + ' º'} />
      </Col>
    </div>
  )
}
