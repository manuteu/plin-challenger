'use client'
import { ICep, IResponseCep } from '@/types/Cep';
import React, { useState } from 'react'
import Reveal from '../components/Reveal';
import Card from './components/Card';
import InputSearch from './components/InputSearch';
import Skeleton from './components/Skeleton';
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function Cep() {
  const [address, setAddress] = useState<ICep[]>([])
  const [loading, setLoading] = useState(false)

  const searchCep = async (e: FormData) => {
    const cep = e.get('cep')?.toString();

    if (!cep) {
      setLoading(false)
      return
    };
    try {
      const response = await fetch(`http://cep.la/${cep}`, {
        method: 'get',
        headers: {
          Accept: 'application/json',
        }
      })
      await new Promise(resolve => setTimeout(resolve, 1500))
      const results: ICep[] = await response.json()
      setAddress(results)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  return (
      <main className='px-10 py-20'>
        <section>
          <form action={searchCep} className="flex flex-col gap-5 max-w-xl mx-auto p-5">
            <InputSearch loading={() => setLoading(true)} />
          </form>
        </section>

        {loading && (
          <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 mt-8'>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        )}
        {!loading && address && (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            className='grid gap-8 md:grid-cols-3 lg:grid-cols-6 mt-8'
          >
            {address?.map((item: ICep, index: number) => (
              <Reveal key={index} >
                <Card data={item} />
              </Reveal>
            ))}
          </motion.div>
        )}
        {!loading && address.length === 0 && (
          <div className='flex items-center justify-center'>
            <h3>Não foi encontrado um endereço...</h3>
          </div>
        )}
      </main>
  )
}
