import { ICep, IResponseCep } from '@/types/Cep'
import React from 'react'

export default function Card({ data }: IResponseCep): JSX.Element {
  return (
    <div className="w-full sm:max-w-full hover:-translate-y-2.5 max-w-sm p-4 bg-gray-700 border border-gray-700 rounded-lg shadow sm:p-8">
      <p>{data.cep}</p>
      <p>{data.cidade}, {data.uf}</p>
      <p>{data.bairro}</p>
      <p>{data.logradouro}</p>
    </div>
  )
}
