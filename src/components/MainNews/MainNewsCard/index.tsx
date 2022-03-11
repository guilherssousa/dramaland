import type { NextPage } from 'next'
import Link from 'next/link'

import { Article } from 'types'

interface MainNewsCardProps {
  article: Article
  center?: boolean
}

const MainNewsCard: NextPage<MainNewsCardProps> = ({ article, center }) => {
  const styles = center
    ? 'absolute bottom-0 h-full w-full cursor-pointer rounded-md bg-center bg-cover bg-blend-overlay transition-all group-hover:scale-105'
    : 'absolute bottom-0 h-full w-full cursor-pointer rounded-md bg-cover bg-blend-overlay transition-all group-hover:scale-105'

  return (
    <Link href={`/[...slug]?id=${article.url}`} as={article.url} passHref>
      <a>
        <div
          className={
            'group relative h-full w-full cursor-pointer overflow-hidden rounded-md'
          }
        >
          <div className={'h-full w-full'}>
            <div
              className={'relative z-10 flex h-full flex-col justify-end p-4'}
            >
              <span className="w-fit rounded-sm bg-blue-400 px-2 font-bold text-white">
                {article.labels?.[0].toUpperCase()}
              </span>
              <h1 className={'text-2xl font-bold text-white'}>
                {article.title}
              </h1>
            </div>
          </div>
          <div
            className={styles}
            style={{
              backgroundImage: `url(${article.cover}), linear-gradient(0deg, rgba(0, 0, 0, 0.533) 30%, rgba(255, 255, 255, 0.25) 100%)`,
            }}
          ></div>
        </div>
      </a>
    </Link>
  )
}

export default MainNewsCard
