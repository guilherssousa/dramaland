import type { NextPage } from 'next'
import { Article } from 'types'

import Link from 'next/link'

interface ArticleCardProps {
  article: Article
}

const ArticleCard: NextPage<ArticleCardProps> = ({ article }) => {
  return (
    <Link href={`/[...slug]?id=${article.url}`} as={article.url} passHref>
      <a>
        <article
          className={
            'group mb-4 flex max-h-52 cursor-pointer border-b px-2 pb-4'
          }
        >
          <div className="h-42 w-72 overflow-hidden rounded-md">
            <img
              src={article.cover}
              className={
                'aspect-video h-full w-full bg-center object-cover transition-all group-hover:scale-110'
              }
            ></img>
          </div>
          <div className="ml-4 w-7/12 text-gray-900">
            <div>
              <span
                className={'text-sm font-bold text-blue-400 transition-all'}
              >
                {article.labels?.[0].toUpperCase()}
              </span>
            </div>
            <div className={'text-xl font-bold group-hover:text-blue-400'}>
              {article.title}
            </div>
            <div>
              <p className="mt-2">
                {article.markdown.split(' ').slice(0, 10).join(' ')}
              </p>
            </div>
            <div className="mt-2">
              <span>18 horas atrás &bull; Por Guilherme Sousa</span>
            </div>
          </div>
        </article>
      </a>
    </Link>
  )
}

export default ArticleCard
