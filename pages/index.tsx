import type { NextPage } from 'next'
import Head from 'next/head'

import Drama from 'types/drama'

import api from 'services/api'

import Navbar from 'components/Navbar'
import ArticleCard from 'components/ArticleCard'
import MainNews from 'components/MainNews'

import articles from 'data/articles.json'

interface HomeProps {
  topDramas: Drama[]
}

const Home: NextPage<HomeProps> = ({ topDramas }) => {
  const [mainArticles, otherArticles] = [
    [...articles].splice(0, 3),
    [...articles].splice(4, articles.length - 1),
  ]

  return (
    <>
      <Head>
        <title>Home | Dramaland </title>
      </Head>

      <Navbar />

      <section className={'mx-auto my-4 max-w-screen-lg'}>
        {mainArticles.length == 3 && <MainNews articles={mainArticles} />}
        <div className={'flex'}>
          <div className={'w-8/12 p-4'}>
            <div>
              {otherArticles.length ? (
                otherArticles.map((article, index) => (
                  <ArticleCard
                    key={`article-card-${index}`}
                    article={article}
                  />
                ))
              ) : (
                <div className="mt-2 w-full text-center text-gray-700">
                  <span>Não temos matérias para exibir :(</span>
                </div>
              )}
            </div>
          </div>
          <div className={'w-4/12 p-4'}>
            <div className="border p-4">
              <span className={'font-bold uppercase text-blue-400'}>
                Dramas populares
              </span>
              <div className={'mt-2'}>
                {topDramas.map((drama) => (
                  <div
                    key={`top-dramas-${drama.slug_query}`}
                    className={'mt-3 flex'}
                  >
                    <div className={'w-20'}>
                      <img
                        src={drama.data.poster}
                        className={'w-20 object-cover'}
                      ></img>
                    </div>
                    <div className={'ml-2 w-7/12'}>
                      <span className={'block text-sm font-bold text-blue-900'}>
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
          </div>
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps() {
  // TODO: Get top dramas from API
  const topDramasIds = [
    '695149-twenty-five-twenty-one',
    '693591-in-house-confrontation',
    '687861-our-police-course',
    '692969-office-romance-cruelty',
    '692971-thirty-nine',
  ]

  async function fetchDramaInfo(id: string) {
    const { data } = await api.get(`/id/${id}`)
    return data
  }

  const topDramas = await Promise.all(
    topDramasIds.map((dramaId) => fetchDramaInfo(dramaId))
  )

  return {
    props: {
      topDramas: topDramas,
    },
  }
}

export default Home
