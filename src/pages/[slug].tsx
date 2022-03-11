import type { NextPage } from 'next'
import Head from 'next/head'

import { Drama } from 'types'

import Navbar from 'components/Navbar'

interface ArticleProps {
  topDramas: Drama[]
}

const Article: NextPage<ArticleProps> = ({ topDramas }) => {
  return (
    <>
      <Head>
        <title>Pamonha é gostoso | Dramaland</title>
      </Head>

      <Navbar />

      <section className={'mx-auto my-4 max-w-screen-lg'}>
        <div className={'flex'}>
          <main className={'flex w-8/12 items-center justify-center p-4'}>
            <article>
              <div>
                <img
                  className="h-80 w-full rounded-xl object-cover"
                  src="https://i0.wp.com/coreanasdetaubate.com/wp-content/uploads/2022/01/1D787150-0D57-464B-A69D-1A88254419E8.png?w=1200&ssl=1"
                ></img>
                <h2 className="mt-4 text-4xl font-bold text-gray-900">
                  Vamos falar sobre o drama ‘Our Beloved Summer’?
                </h2>
                <div className="mt-2 flex w-full items-center justify-between pr-2">
                  <span className="font-bold">
                    Por{' '}
                    <span className="uppercase text-blue-400">
                      Guilherme Sousa
                    </span>
                  </span>
                  <span>Publicado a 6 horas</span>
                </div>
              </div>
              <div className={'prose mt-6 w-full max-w-full lg:prose-lg'}>
                <p>
                  Quero falar sobre Our Belovod Summer. 😌😌 Logo quando comecei
                  o drama, eu amei, e pensei que era uma comédia romântica
                  diferente, e que a Coreia estava finalmente aprendendo a fazer
                  as coisas. Eu estava bastante surtada, mas depois que dropei o
                  drama no episódio 13, o surto foi passando e fui começando a
                  analisar as coisas criticamente. Our Beloved Summer não é nada
                  diferente das outras comédias românticas, a única diferença é
                  que a Yeon Su pegou a personalidade que normalmente vai para
                  os homem, e o Woong pegou a personalidade que normalmente vai
                  para as mulheres.
                </p>
                <p>
                  A Yeon Su era insuportável, não tem como negar. Eu entendo que
                  na vida real existam pessoas assim, mas há um limite, e essa
                  pessoa acaba sendo tóxica mesmo sem perceber. Eu também
                  entendo que ela tinha complexos e problemas familiares, mas
                  como eu disse, a pessoa acaba sendo tóxica e isso causa um
                  estrago imenso, que foi o que aconteceu com o Woong.
                </p>
                <p>
                  O Woong, óbvio que era um homem doce, apaixonado, que
                  aguentava tudo da Yeon Su porque ele a amava, isso lembra
                  alguma coisa? (As mulheres dos dramas sendo pisoteadas em nome
                  do amor.) durante todo o relacionamento, ele sempre tomou a
                  atitude, mesmo quando ela estava errada, ele ia lá para tentar
                  ouvir as desculpas dela. A Yeon Su chegou a terminar várias
                  vezes, sem dar justificativas nenhuma, e ele ficava indignado
                  porque nunca sabia o que de fato aconteceu, mas isso é
                  realmente típico de algumas mulheres ou ao menos da maioria, a
                  gente não fala e o homem tem que adivinhar o que está
                  acontecendo. Até que teve a última vez, e eles terminaram de
                  vez, na verdade, ela terminou, porque ele ficou perdido sem
                  nem saber o porquê. Esse homem sofreu, se lascou inteiro,
                  adquiriu insônia, entrou em depressão, enfim, ficou com o
                  psicológico lascado.
                </p>
                <p>
                  O Woong, óbvio que era um homem doce, apaixonado, que
                  aguentava tudo da Yeon Su porque ele a amava, isso lembra
                  alguma coisa? (As mulheres dos dramas sendo pisoteadas em nome
                  do amor.) durante todo o relacionamento, ele sempre tomou a
                  atitude, mesmo quando ela estava errada, ele ia lá para tentar
                  ouvir as desculpas dela. A Yeon Su chegou a terminar várias
                  vezes, sem dar justificativas nenhuma, e ele ficava indignado
                  porque nunca sabia o que de fato aconteceu, mas isso é
                  realmente típico de algumas mulheres ou ao menos da maioria, a
                  gente não fala e o homem tem que adivinhar o que está
                  acontecendo. Até que teve a última vez, e eles terminaram de
                  vez, na verdade, ela terminou, porque ele ficou perdido sem
                  nem saber o porquê. Esse homem sofreu, se lascou inteiro,
                  adquiriu insônia, entrou em depressão, enfim, ficou com o
                  psicológico lascado.
                </p>
              </div>
            </article>
          </main>
          <aside className={'w-4/12 p-4'}>
            <div className="border p-4">
              <span className={'font-bold uppercase text-blue-400'}>
                Dramas populares
              </span>
              <div className={'mt-2'}>
                {topDramas.map((drama) => (
                  <div
                    key={`top-dramas-${drama.slug_query}`}
                    className={'group mt-3 flex cursor-pointer'}
                  >
                    <div className={'w-20'}>
                      <img
                        src={drama.data.poster}
                        className={'w-20 object-cover'}
                      ></img>
                    </div>
                    <div className={'ml-2 w-7/12'}>
                      <span
                        className={
                          'block text-sm font-bold text-blue-900 group-hover:text-blue-400'
                        }
                      >
                        {drama.data.title}
                      </span>
                      <span className={'text-sm'}>
                        {drama.data.details.episodes} espisódios
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

interface ArticleServerSideProps {
  query: {
    slug: string
  }
}

export default Article
