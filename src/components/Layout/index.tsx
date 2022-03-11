import type { NextPage } from 'next'
import { ReactChild } from 'react'
import { Drama } from 'types'

import PopularDramas from 'components/PopularDramas'
interface LayoutProps {
  topDramas: Drama[]
  children: ReactChild
}

const Layout: NextPage<LayoutProps> = ({ topDramas, children }) => {
  return (
    <div className={'flex'}>
      <main className={'w-full p-4 md:w-8/12'}>{children}</main>
      <aside className={'hidden p-4 sm:w-4/12 md:block'}>
        <PopularDramas topDramas={topDramas} />
      </aside>
    </div>
  )
}

export default Layout
