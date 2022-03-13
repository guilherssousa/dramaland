import React, { useLayoutEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { Drama, Article } from 'types'

import PageSEO from 'components/PageSEO'
import Navbar from 'components/Navbar'
import ArticleCard from 'components/ArticleCard'
import MainNews from 'components/MainNews'
import Layout from 'components/Layout'

import blogger from 'services/blogger'

import { sanitizePosts } from 'utils/sanitize'
interface HomeProps {
  topDramas: Drama[]
  articles: Article[]
}

const Home: NextPage<HomeProps> = ({ topDramas, articles }) => {
  const [isDesktop, setIsDesktop] = useState(true)

  useLayoutEffect(() => {
    function onResize() {
      setIsDesktop(window.innerWidth >= 640)
    }

    onResize()

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const arraySliceBreakpoint = isDesktop ? 3 : 2

  const slicedArticles = articles.slice(arraySliceBreakpoint)

  return (
    <>
      <Head>
        <title>Home | Dramaland </title>
        <PageSEO />
      </Head>

      <Navbar />

      <section className={'mx-auto my-4 max-w-screen-lg'}>
        <MainNews articles={articles} isMobile={!isDesktop} />
        <Layout topDramas={topDramas}>
          <div>
            {slicedArticles ? (
              slicedArticles.map((article, index) => (
                <ArticleCard key={`article-card-${index}`} article={article} />
              ))
            ) : (
              <div className="mt-2 w-full text-center text-gray-700">
                <span>Não temos matérias para exibir :(</span>
              </div>
            )}
          </div>
        </Layout>
      </section>
    </>
  )
}

export const getServerSideProps = async () => {
  const posts = await blogger.getPosts()

  return {
    props: {
      articles: sanitizePosts(posts.items),
    },
  }
}

export default Home
