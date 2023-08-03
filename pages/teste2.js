import NavBar from '../components/Navbar'

export default function teste() {
  return (
    <>
    <NavBar/>

    <section class="bg-black">
                <div class="bg-black items-center w-full px-5 py-24 mx-auto md:px-12 py-24 lg:px-16 py-24 max-w-7xl">
                  <div class="text-left">
                    <div class="items-center mx-auto lg:inline-flex">
                      <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                        <div>
                          <p class="text-2xl font-medium tracking-tight text-white sm:text-4xl">
                            Juntos por um sonho.
                          </p>
                        </div>
                        <div class="lg:ml-auto">
                          <p class="mt-4 text-lg tracking-tight text-gray-600 lg:mt-0">
                            A Comuns é uma associação que prevê a democratização do acesso à saúde mental.
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
                          A COMUNS é uma associação sem fins lucrativos que busca engajar pessoas em um objetivo em comum: democratizar o acesso à saúde mental.
                          </div>
                        </div>
                        <div>
                          <div>
                            <p class="text-lg font-medium leading-6 text-white">
                              História:
                            </p>
                          </div>
                          <div class="mt-2 text-base text-gray-500">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                          </div>
                        </div>
                        <div>
                          <div>
                            <p class="text-lg font-medium leading-6 text-white">
                              Visão:
                            </p>
                          </div>
                          <div class="mt-2 text-base text-gray-500">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
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
