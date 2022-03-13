import type { NextPage } from 'next'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'

import { Article, Drama } from 'types'

import SEO from 'components/SEO'
import Navbar from 'components/Navbar'
import Layout from 'components/Layout'
import ArticleHeader from 'components/ArticleHeader'

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
            <ArticleHeader article={article} />
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
