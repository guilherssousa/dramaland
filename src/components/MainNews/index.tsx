import type { NextPage } from 'next'

import { Article } from 'types'

import MainNewsCard from './MainNewsCard'

interface MainNewsProps {
  articles: Article[]
  isMobile: boolean
}

const MainNews: NextPage<MainNewsProps> = ({ articles, isMobile }) => {
  return (
    <section
      className={
        'mx-auto mt-8 mb-6 grid h-96 max-w-screen-lg grid-cols-2 grid-rows-2 gap-2 px-4'
      }
    >
      {isMobile
        ? articles.slice(0, 2).map((article, index) => {
            return (
              <div className={'col-span-2'} key={`article-main-${index}`}>
                <MainNewsCard article={article} />
              </div>
            )
          })
        : articles.slice(0, 3).map((article, index) => {
            if (index == 0)
              return (
                <div className={'row-span-2'} key={`article-main-${index}`}>
                  <MainNewsCard article={article} />
                </div>
              )
            return (
              <MainNewsCard key={`article-main-${index}`} article={article} />
            )
          })}
    </section>
  )
}
export default MainNews
