import Reveal from '@/app/components/Reveal'
import React from 'react'

interface Loading {
  loading: () => void
}

export default function InputSearch({ loading }: Loading) {
  return (
    <Reveal>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
      </div>
      <input
        name='cep'
        type="search"
        className="block w-full p-4 pl-10 text-sm border rounded-xl outline-none focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        placeholder="Buscar endereço"
      />
      <button onClick={loading} className="text-white outline-none absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-700 focus:outline-none font-medium rounded-xl text-sm px-4 py-2 focus:ring-blue-800 transition-colors">Buscar</button>
    </Reveal>
  )
}
