import React, { useEffect, useState } from 'react'
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
  const [isDesktop, setIsDesktop] = useState(0)

  useEffect(() => {
    if (window.innerWidth >= 640) {
      setIsDesktop(3)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Home | Dramaland </title>
        <PageSEO />
      </Head>

      <Navbar />

      <section className={'mx-auto my-4 max-w-screen-lg'}>
        {articles.length >= 3 && <MainNews articles={articles} />}
        <Layout topDramas={topDramas}>
          <div>
            {articles.slice(isDesktop).length >= 3 - isDesktop ? (
              articles
                .slice(isDesktop)
                .map((article, index) => (
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
