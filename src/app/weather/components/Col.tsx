import React, { ReactNode } from 'react'

export default function Col({ children }: { children: ReactNode }) {
  return (
    <div className='flex flex-col w-1/2 sm:w-full gap-3'>
      {children}
    </div>
  )
}