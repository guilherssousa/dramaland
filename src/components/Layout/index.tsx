import type { NextPage } from 'next'
import { ReactChild } from 'react'
import { Drama } from 'types'

interface LayoutProps {
  topDramas: Drama[]
  children: ReactChild
}

const Layout: NextPage<LayoutProps> = ({ topDramas, children }) => {
  return (
    <div className={'flex'}>
      <main className={'w-full p-4 md:w-8/12'}>{children}</main>
      <aside className={'hidden p-4 sm:w-4/12 md:block'}>
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
  )
}

export default Layout
