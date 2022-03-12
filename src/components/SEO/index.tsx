import type { NextPage } from 'next'
import { Article } from 'types'

interface SEOProps {
  article: Article
}

const SEO: NextPage<SEOProps> = ({ article }) => {
  return (
    <>
      <meta property="og:image" content={article.cover}></meta>
      <meta name="description" content={article.description}></meta>

      <meta property="og:locale" content="pt_BR"></meta>
      <meta property="og:type" content="article"></meta>
      <meta property="og:title" content={`${article.title} | Dramaland`}></meta>
      <meta property="og:description" content={article.description}></meta>
      <meta property="og:site_name" content="Dramaland"></meta>
      <meta
        property="article:author"
        content={article.author.displayName}
      ></meta>
      <meta
        property="article:published_time"
        content={article.published}
      ></meta>
      <meta property="og:image" content={article.cover}></meta>
      <meta
        property="og:image:secure_url"
        content={`https://dramaland.vercel.app/${article.url}`}
      ></meta>
      <meta property="og:image:type" content="image/jpeg"></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta
        name="twitter:title"
        content={`${article.title} | Dramaland`}
      ></meta>
      <meta name="twitter:site" content="@krteazy"></meta>
      <meta name="twitter:creator" content="@krteazy"></meta>
      <meta name="twitter:image" content={article.cover}></meta>
    </>
  )
}

export default SEO
