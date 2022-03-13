import { NextPage } from 'next'
import { Article } from 'types'
import moment from 'moment'

interface ArticleHeaderProps {
  article: Article
}

const ArticleHeader: NextPage<ArticleHeaderProps> = ({ article }) => {
  return (
    <div>
      <img
        className="h-80 w-full rounded-xl object-cover"
        src={article.cover}
        alt={article.title}
      ></img>
      <h2 className="mt-4 text-4xl font-bold text-gray-900">{article.title}</h2>
      <div className="mt-2 flex w-full items-center justify-between pr-2">
        <span className="space-x-1 font-bold">
          Por{' '}
          <span className="uppercase text-blue-400">
            {article.author.displayName}
          </span>
          {article?.originalArticle && (
            <span>
              &bull;
              <a
                className="ml-1"
                href={article.originalArticle}
                target="_blank"
                rel="noreferrer"
              >
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
  )
}
export default ArticleHeader
