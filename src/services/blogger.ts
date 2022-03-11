import axios from 'axios'

export const BLOG_ID = `7057463913343102362`

const api = axios.create({
  baseURL: 'https://www.googleapis.com/blogger/v3/',
  params: {
    key: process.env.BLOGGER_API_KEY,
  },
})

export default {
  getPosts: async () => {
    try {
      const { data } = await api.get(`blogs/${BLOG_ID}/posts`)
      return data
    } catch (error) {
      console.error(error)
      return { error: 1 }
    }
  },
  getByPath: async (path: string) => {
    try {
      const { data } = await api.get(`blogs/${BLOG_ID}/posts/bypath`, {
        params: {
          path,
        },
      })
      return data
    } catch (error) {
      return { error: 1 }
    }
  },
}
