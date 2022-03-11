import type { NextPage } from 'next'
import Head from 'next/head'

import MainNewsCard from '../components/MainNewsCard'
import ArticleCard from '../components/ArticleCard'

import articles from '../data/articles.json'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Dramaland </title>
      </Head>
      <section
        className={
          'mx-auto mt-8 grid h-96 max-w-screen-lg grid-cols-2 grid-rows-2 gap-2'
        }
      >
        <div className={'row-span-2'}>
          <MainNewsCard article={articles[0]} center />
        </div>
        <MainNewsCard article={articles[1]} />
        <MainNewsCard article={articles[2]} />
      </section>
      <section className={'mx-auto my-4 max-w-screen-lg'}>
        <div className={'flex'}>
          <div className={'w-8/12 p-4'}>
            <h1 className={'text-4xl font-bold'}>Notícias recentes</h1>
            <div className={'mt-6'}>
              {articles.slice(3, 13).map((article, index) => (
                <ArticleCard key={`article-card-${index}`} article={article} />
              ))}
            </div>
          </div>
          <div className={'w-4/12 p-4'}>
            <h1>Olá mundo</h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
