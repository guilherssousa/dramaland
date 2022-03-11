import type { NextPage } from 'next'

import { Article } from 'types'

import MainNewsCard from './MainNewsCard'

interface MainNewsProps {
  articles: Article[]
}

const MainNews: NextPage<MainNewsProps> = ({ articles }) => {
  return (
    <section
      className={
        'mx-auto mt-8 grid h-96 max-w-screen-lg grid-cols-2 grid-rows-2 gap-2 px-4'
      }
    >
      {articles.map((article, index) => {
        if (index == 0)
          return (
            <div className={'row-span-2'} key={`article-main-${index}`}>
              <MainNewsCard article={article} center />
            </div>
          )
        return <MainNewsCard key={`article-main-${index}`} article={article} />
      })}
    </section>
  )
}
export default MainNews
