import NavBar from '../components/Navbar'

export default function teste() {
  return (
    <>
    <NavBar/>

    <section class="bg-black">
                <div class="bg-black items-center w-full px-5 py-20 mx-auto md:px-12 py-20 lg:px-16 py-20 max-w-7xl">
                  <div class="text-left">
                    <div class="items-center mx-auto lg:inline-flex">
                      <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                        <div>
                          <p class="text-2xl font-medium tracking-tight text-white sm:text-4xl">
                            Seja bem vindo!
                          </p>
                        </div>
                        <div class="lg:ml-auto">
                          <p class="mt-4 text-lg tracking-tight text-gray-600 lg:mt-0">
                          Quando as <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">pessoas se unem</span> com um objetivo em comum <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"> algo potente pode surgir.</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="relative items-center w-full mx-auto mt-12">
                    <img class="object-cover object-center w-90 md:object-fill h-90 rounded-full" src="/images/folder.jpeg" alt=""/>
                  </div>
                  <div>
                    <div class="pt-12 mx-auto lg:max-w-7xl">
                      <dl class="grid grid-cols-1 gap-6 space-y-0 lg:gap-24 lg:grid-cols-3">
                        <div>
                          <div>
                            <p class="text-lg font-medium leading-6 text-white">
                              Quem somos:
                            </p>
                          </div>
                          <div class="mt-2 text-base text-gray-500">
                          A COMUNS é uma associação sem fins lucrativos que busca engajar pessoas em um objetivo em comum: <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">democratizar o acesso à saúde mental.</span>
                          </div>
                        </div>
                        <div>
                          <div>
                            <p class="text-lg font-medium leading-6 text-white">
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
                            <p class="text-lg font-medium leading-6 text-white">
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
