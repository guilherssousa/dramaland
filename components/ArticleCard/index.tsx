import type { NextPage } from 'next'

interface ArticleCardProps {
  article: {
    title: string
    cover: string
    description: string
    category: string
  }
}

const ArticleCard: NextPage<ArticleCardProps> = ({ article }) => {
  return (
    <article
      className={'group mt-4 flex max-h-52 cursor-pointer border-t px-2 pt-4'}
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
          <span className={'text-sm font-bold text-blue-400 transition-all'}>
            {article.category.toUpperCase()}
          </span>
        </div>
        <div className={'text-xl font-bold group-hover:text-blue-400'}>
          {article.title}
        </div>
        <div>
          <p className="mt-2">{article.description}</p>
        </div>
        <div className="mt-2">
          <span>18 horas atrás &bull; Por Guilherme Sousa</span>
        </div>
      </div>
    </article>
  )
}

export default ArticleCard
