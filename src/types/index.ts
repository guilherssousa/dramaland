export interface Drama {
  data: {
    title: string
    rating: number
    poster: string
    details: {
      episodes: string
    }
  }
  slug_query: string
}

export interface Article {
  published: string
  updated: string
  title: string
  content: string
  author: {
    displayName: string
  }
  labels: string[]
  markdown: string
  cover: string
  url: string
}
