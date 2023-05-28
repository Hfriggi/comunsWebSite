import React from 'react'
import MyHead from '../components/MyHead'

const features = () => {
    return (
        <>
            <MyHead
                title="Contatos"
                description="Bem vinco à rede Comuns!"
            />
            <div className='w-full h-screen flex flex-col justify-center items-center bg-black'>
                <h1 className='font-bold text-lg text-white'>Nossos contatos:</h1>
                <ul className='mt-5 border p-4 rounded-lg shadow-xl bg-white'>
                    <li className='hover:text-indigo-500 hover:translate-x-2 transition-all duration-300 cursor-pointer'>E-mail: Comuns@exemplo.com.br</li>
                    <li className='hover:text-indigo-500 hover:translate-x-2 transition-all duration-300 cursor-pointer'>Telefone: (47) 9999-9999</li>
                </ul>
            </div>
        </>
    )
}

export default features