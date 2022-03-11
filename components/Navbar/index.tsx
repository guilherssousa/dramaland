import type { NextPage } from 'next'
import Link from 'next/link'

const Navbar: NextPage = () => {
  return (
    <nav className={'sticky top-0 z-50 bg-blue-400 shadow-xl'}>
      <div className={'mx-auto max-w-screen-lg px-4'}>
        <div className={'flex h-16 items-center justify-between'}>
          <div className={'flex items-center'}>
            <Link href={'/'} passHref>
              <a>
                <img src="/assets/dramaland-white.png" className={'h-10'} />
              </a>
            </Link>
            <div
              className={
                'ml-6 flex items-center gap-x-4 font-bold uppercase text-white'
              }
            >
              <Link href={'/noticias'} passHref>
                <a>
                  <span>Notícias</span>
                </a>
              </Link>
              <Link href={'/resenhas'} passHref>
                <a>
                  <span>Resenhas</span>
                </a>
              </Link>
              <Link href={'/guias'} passHref>
                <a>
                  <span>Guias</span>
                </a>
              </Link>
              <Link href={'/opinioes'} passHref>
                <a>
                  <span>Opiniões</span>
                </a>
              </Link>
            </div>
          </div>
          <div className={'flex items-center'}>
            <Link href={'/busca'} passHref>
              <a className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </a>
            </Link>
            <Link href={'/share'} passHref>
              <a className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-6 h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
