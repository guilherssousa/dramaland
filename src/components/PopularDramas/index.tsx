import { NextPage } from 'next'
import { Drama } from 'types'

interface LayoutProps {
  topDramas: Drama[]
}

const PopularDramas: NextPage<LayoutProps> = ({ topDramas }) => {
  return (
    <div className="border p-4">
      <span className={'font-bold uppercase text-blue-500'}>
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
                alt={drama.data.title}
              ></img>
            </div>
            <div className={'ml-2 w-7/12'}>
              <span
                className={
                  'block text-sm font-bold text-blue-900 group-hover:text-blue-500'
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
  )
}

export default PopularDramas
