import type { NextPage } from 'next'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import moment from 'moment'

import { Article, Drama } from 'types'

import SEO from 'components/SEO'
import Navbar from 'components/Navbar'
import Layout from 'components/Layout'

import blogger from 'services/blogger'
import { sanitizePost } from 'utils/sanitize'

interface ArticleProps {
  article: Article
  topDramas: Drama[]
}

const Article: NextPage<ArticleProps> = ({ topDramas, article }) => {
  return (
    <>
      <Head>
        <title>{article.title} | Dramaland</title>
        <SEO article={article} />
      </Head>

      <Navbar />

      <section className={'mx-auto my-4 max-w-screen-lg'}>
        <Layout topDramas={topDramas}>
          <article>
            <div>
              <img
                className="h-80 w-full rounded-xl object-cover"
                src={article.cover}
              ></img>
              <h2 className="mt-4 text-4xl font-bold text-gray-900">
                {article.title}
              </h2>
              <div className="mt-2 flex w-full items-center justify-between pr-2">
                <span className="space-x-1 font-bold">
                  Por{' '}
                  <span className="uppercase text-blue-400">
                    {article.author.displayName}
                  </span>
                  {article?.originalArticle && (
                    <span>
                      &bull;
                      <a className="ml-1" href={article.originalArticle}>
                        (
                        <span className="text-sm uppercase text-blue-400 underline">
                          Artigo original
                        </span>
                        )
                      </a>
                    </span>
                  )}
                </span>
                <span>Publicado {moment(article.published).fromNow()}</span>
              </div>
            </div>
            <div className={'prose-base mt-6 w-full max-w-full lg:prose-xl'}>
              <ReactMarkdown>{article.markdown}</ReactMarkdown>
            </div>
          </article>
        </Layout>
      </section>
    </>
  )
}

interface GetServerSideProps {
  query: {
    slug: string[]
  }
}

export async function getServerSideProps({ query }: GetServerSideProps) {
  const slug = query.slug.join('/')

  const article = await blogger.getByPath(`/${slug.concat('.html')}`)

  return {
    props: {
      article: sanitizePost(article),
    },
  }
}

export default Article
