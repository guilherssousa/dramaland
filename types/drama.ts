export default interface Drama {
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
