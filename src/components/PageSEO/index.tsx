import type { NextPage } from 'next'

const PageSEO: NextPage = () => {
  return (
    <>
      <meta property="og:locale" content="pt_BR"></meta>
      <meta property="og:type" content="article"></meta>
      <meta property="og:title" content={`Home | Dramaland`}></meta>
      <meta
        property="og:description"
        content="Dramaland: Um portal de notícias, resenhas e opinião do mundo da dramaturgia coreana"
      ></meta>
      <meta
        name="description"
        content="Dramaland: Um portal de notícias, resenhas e opinião do mundo da dramaturgia coreana"
      ></meta>

      <meta property="og:site_name" content="Dramaland"></meta>
      <meta property="og:image" content={'/assets/favicon.png'}></meta>
      <meta
        property="og:image:secure_url"
        content={'https://dramaland.vercel.app/'}
      ></meta>
      <meta property="og:image:type" content="image/png"></meta>
      <meta name="twitter:card" content="summary"></meta>
      <meta name="twitter:title" content={`Home | Dramaland`}></meta>
      <meta name="twitter:site" content="@krteazy"></meta>
      <meta name="twitter:creator" content="@krteazy"></meta>
      <meta name="twitter:image" content={'/assets/favicon.png'}></meta>
    </>
  )
}

export default PageSEO
