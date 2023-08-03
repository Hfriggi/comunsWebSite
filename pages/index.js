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
      <section class ="bg-black">
                <div class="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
                  <div class="relative flex-col items-start m-auto align-middle">
                    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                      <div class="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                        <div class="max-w-xl text-center lg:text-left">
                          <div><p class="text-2xl font-medium tracking-tight text-white sm:text-4xl">
                    Seja bem vindo!
              </p>
              <p class="max-w-xl mt-4 text-base tracking-tight text-gray-600">
              Quando as <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">pessoas se unem</span> com um objetivo em comum <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"> algo potente pode surgir.</span>
              </p>
              </div>
                          <div class="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                            <a href="#" class="items-center justify-center w-full px-6 py-2.5  text-center text-white duration-200 bg-gradient-to-r from-pink-500 to-violet-500 border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-blue focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black">
                             Login
                            </a>
                            <a href="#" class="inline-flex items-center justify-center text-sm font-semibold text-white duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600">
                              Saiba mais  →
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="order-first block w-full mt-12 aspect-square lg:mt-0">
                        <img class="object-cover object-center w-full mx-auto bg-gray-300 rounded-lg border lg:ml-auto" alt="hero" src="/images/banner1.jpeg"/>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="pt-12 mx-auto lg:max-w-7xl">
                      <dl class="grid grid-cols-1 gap-6 space-y-0 text-center lg:gap-24 lg:grid-cols-3 lg:text-left">
                        <div>
                          <div>
                            <p class="mt-5 text-lg font-medium leading-6 text-white">
                            Quem somos:
                            </p>
                          </div>
                          <div class="mt-2 text-base text-gray-500">
                          A COMUNS é uma associação sem fins lucrativos que busca engajar pessoas em um objetivo em comum: <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">democratizar o acesso à saúde mental.</span>
                          </div>
                        </div>
                        <div>
                          <div>
                            <p class="mt-5 text-lg font-medium leading-6 text-white">
                            Como funciona:
                            </p>
                          </div>
                          <div class="mt-2 text-base text-gray-500">
                          Para levar cuidado e escuta, <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">a COMUNS funciona por meio de uma rede de pessoas</span>, instituições privadas ou públicas, que financiam o projeto coletivamente com recursos materiais, monetários ou serviços.
                          <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"> É o esforço coletivo que proporciona o equilíbrio de demanda, necessidade e custo.</span>
                          </div>
                        </div>
                        <div>
                          <div>
                            <p class="mt-5 text-lg font-medium leading-6 text-white">
                            Metodologia:
                            </p>
                          </div>
                          <div class="mt-2 text-base text-gray-500">
                            Trabalhamos juntos para a efetivação de uma saúde mental <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">diferente da lógica individualizante</span>, para possibilitar a potencialização da vida por meio de: laços comunitários, promoção de saúde, arte, cultura e formação de cidadania como potência de produção de saúde e bem viver.
                          </div>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </section>

    </>
  )
}
