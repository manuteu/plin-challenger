'use client'
import React, { FormEvent, useState } from 'react'
import Input from './components/Input'

export default function page() {
  const [inputValues, setInputValues] = useState({
    name: '',
    lastName: '',
    company: '',
    phone: '',
    email: '',
    github: '',
    password: '',
    passwordConfirm: '',
  });

  const [fileInput, setFileInput] = useState()


  const sendToConsole = (e: FormEvent) => {
    e.preventDefault()
    console.log(inputValues);
    console.log('fileInput', fileInput);

  }

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <section className='pt-28 flex justify-center flex-col items-center w-full'>
      <form onSubmit={sendToConsole}>
        <div className="grid gap-6 mb-6 grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
          <Input name='name' label='Nome' labelFor='name' placeholder='Matheus' type='text' value={inputValues.name} onChange={handleInputChange} />
          <Input name='lastName' label='Sobrenome' labelFor='lastName' placeholder='Rodrigues' type='text' value={inputValues.lastName} onChange={handleInputChange} />
          <Input name='company' label='Empresa' labelFor='company' placeholder='Plin' type='text' value={inputValues.company} onChange={handleInputChange} />
          <Input name='phone' label='Celular' labelFor='phone' placeholder='(61) 9 8332-2486' type='tel' value={inputValues.phone} onChange={handleInputChange} />
          <Input name='email' label='E-mail' labelFor='email' placeholder='mathtechn@gmail.com' type='email' value={inputValues.email} onChange={handleInputChange} />
          <Input name='github' label='Github' labelFor='github' placeholder='github.com/manuteu' type='url' value={inputValues.github} onChange={handleInputChange} />
        </div>
        <div className="grid gap-6 mb-6 grid-cols-1">
          <div>
            <label htmlFor="file-input" className="sr-only">Choose file</label>
            <input type="file" name="file-input" id="file-input"
              className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 dark:border-gray-700 dark:text-gray-400
    file:bg-transparent file:border-0
    file:bg-gray-700 file:mr-4
    file:py-3 file:px-4
    file:text-gray-400" value={fileInput} onChange={(e: any) => setFileInput(e.target.value)} accept="*,.pdf" />
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">*PDF.</p>
          </div>

        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
      </form>
    </section>
  )
}
