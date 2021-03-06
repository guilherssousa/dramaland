import '../styles/globals.css'
import 'moment/locale/pt-br'
import type { AppProps } from 'next/app'
import App from 'next/app'

import api from 'services/api'

import backupTopDramas from 'data/topDramas.json'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext: any) => {
  // TODO: Get top dramas from API
  const topDramasIds = [
    '695149-twenty-five-twenty-one',
    '693591-in-house-confrontation',
    '687861-our-police-course',
    '692969-office-romance-cruelty',
    '692971-thirty-nine',
  ]

  async function fetchDramaInfo(id: string) {
    const { data } = await api.get(`/id/${id}`, {
      withCredentials: true,
    })
    return data
  }

  const appProps = await App.getInitialProps(appContext)

  try {
    const topDramas = await Promise.all(
      topDramasIds.map((dramaId) => fetchDramaInfo(dramaId))
    )

    appProps.pageProps = {
      ...appProps.pageProps,
      topDramas: topDramas,
    }
  } catch (err) {
    appProps.pageProps = {
      ...appProps.pageProps,
      topDramas: backupTopDramas,
    }
  }

  return { ...appProps }
}

export default MyApp
