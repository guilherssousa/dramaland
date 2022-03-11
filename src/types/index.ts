export interface Article {
  title: string
  description: string
  cover: string
  category: string
}

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
