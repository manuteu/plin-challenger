'use client'
import { changeLat, changeLong } from '@/redux/ducks/climate'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Card from './Card'

export default function Container() {
  return (
    <section className='p-10'>
      <header className='max-w-[980px] w-full m-auto rounded-xl images mb-3'>
        <div className='backdrop-blur-3xl rounded-xl p-4'>
          <span className='text-xl'>
            Busca realizada a partir da sua localização!
          </span>
        </div>
      </header>
      <Card />
    </section>
  )
}
 