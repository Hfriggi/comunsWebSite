import React from 'react'
import styles from '../styles/apply.module.css'
import MyHead from '../components/MyHead'

const Apply = () => {
  return (
    <>
      <MyHead
        title="Sobre nós"
        description="Bem vinco à rede Comuns!"
      />
      <section className=''>
        <div  className={"main min-h-screen flex justify-center items-center bg-black"}>
          <div className="content form">
              <h1 className="text-2xl font-bold text-white text-center pb-5">Sobre nós</h1>
              <div className="">
                <h1 className="text-2xl font-bold text-white text-center pb-5">Somos uma associação comunitária de saúde mental.</h1>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Apply