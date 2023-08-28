import React from 'react'
import Header from './Header';
import Table from './Table';

export default function Card() {
  return (
    <section className='max-w-[980px] w-full m-auto rounded-xl images'>
      <div className='backdrop-blur-3xl p-10 rounded-xl'>
        <Header />
        <div className='h-[1.5px] bg-[#14141416] rounded mt-8' />
        <Table />
      </div>
    </section>
  )
}
