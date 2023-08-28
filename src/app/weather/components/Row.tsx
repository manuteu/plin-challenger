import React from 'react'
import SelectIcon from '../../components/icons/index'
import { IRow } from '../../../types/Climate'

export default function Row({ icon, name, value }: IRow) {
  return (
    <>
      <div className='flex justify-between sm:gap-10 items-center py-2' >
        <div className='flex gap-2'>
          {SelectIcon(icon)}
          <span>{name}</span>
        </div>
        <span>{value}</span>
      </div>
      <div className='h-[1.5px] bg-[#14141416] rounded' />
    </>
  )
}
