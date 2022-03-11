import type { NextPage } from 'next'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import moment from 'moment'

import { Article, Drama } from 'types'

import Navbar from 'components/Navbar'
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
      </Head>

      <Navbar />

      <section className={'mx-auto my-4 max-w-screen-lg'}>
        <div className={'flex'}>
          <main className={'flex w-8/12 items-center justify-center p-4'}>
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
                  <span className="font-bold">
                    Por{' '}
                    <span className="uppercase text-blue-400">
                      {article.author.displayName}
                    </span>
                  </span>
                  <span>Publicado {moment(article.published).fromNow()}</span>
                </div>
              </div>
              <div className={'prose mt-6 w-full max-w-full lg:prose-lg'}>
                <ReactMarkdown>{article.markdown}</ReactMarkdown>
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
