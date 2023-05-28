import Link from 'next/link'
import MyHead from '../components/MyHead'
import NavBar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <MyHead
        title="Rede Comuns"
        description="Bem vinco à rede Comuns!"
      />
      <NavBar/>
      <main className="w-full min-h-screen flex flex-col justify-center items-center bg-black">
        <h1 className='text-center'> Bem vindo à rede Comuns <br/><span className='text-indigo-600 font-semibold'>Associação comunitária de saúde mental</span></h1>
        <Link title='Notice the page loader' className='bg-indigo-600 rounded-sm inline-block my-2 p-1 px-2 text-white' href="/Sobre">Conheça mais sobre nós!</Link>
      </main>
    </>
  )
}
