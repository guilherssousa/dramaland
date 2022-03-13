import type { NextPage } from 'next'
import { Article } from 'types'

import Link from 'next/link'
import moment from 'moment'

interface ArticleCardProps {
  article: Article
}

const ArticleCard: NextPage<ArticleCardProps> = ({ article }) => {
  return (
    <Link href={`/[...slug]?id=${article.url}`} as={article.url} passHref>
      <a>
        <article
          className={
            'group mb-4 flex cursor-pointer border-b px-2 pb-4 sm:max-h-64'
          }
        >
          <div className="h-28 w-64 overflow-hidden rounded-md sm:block md:h-40 md:w-72">
            <img
              src={article.cover}
              width={256}
              height={112}
              className={
                'aspect-video h-full w-full bg-center object-cover transition-all group-hover:scale-110'
              }
              alt={article.title}
            ></img>
          </div>
          <div className="ml-4 w-full text-gray-900 md:w-7/12">
            <div>
              <span
                className={'text-sm font-bold text-blue-500 transition-all'}
              >
                {article.labels?.[0].toUpperCase()}
              </span>
            </div>
            <div className={'font-bold group-hover:text-blue-500 sm:text-xl'}>
              {article.title}
            </div>
            <div className="hidden sm:block">
              <p className="mt-2">{article.description}...</p>
            </div>
            <div className="mt-2">
              <span>
                {moment(article.published).fromNow()} &bull; Por{' '}
                {article.author.displayName}
              </span>
            </div>
          </div>
        </article>
      </a>
    </Link>
  )
}

export default ArticleCard
