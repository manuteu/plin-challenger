'user client'
import React from 'react'
import SelectIcon from '../../components/icons/index';
import { ClimateState } from '../../../redux/ducks/climate';
import { useSelector } from '../../../../node_modules/react-redux/es/exports';

export default function Header() {
  const { current, location } = useSelector((state: any): ClimateState => state.climate);
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex flex-col items-start gap-2'>
        <img width='64px' src={current?.condition.icon} />
        <span className='text-5xl'>{current?.temp_c} º</span>
        <span className='text-md'>{current?.condition.text}</span>
      </div>
      <div className='flex items-center gap-2 mt-6'>
        <span>{SelectIcon('map_pin')}</span>
        <span className='text-sm'>{location?.name},</span>
        <span className='text-sm'>{location?.region} -</span>
        <span className='text-sm'>{location?.country}</span>
      </div>
      <div className='flex items-center gap-2'>
        <span>{SelectIcon('date')}</span>
        <span className='text-sm'>{location?.localtime}</span>
      </div>
    </div>
  )
}
