import { Article } from 'types'

export function sanitizePosts(posts: Article[]): Article[] {
  return posts.map((post) => sanitizePost(post))
}

export function sanitizePost(post: Article) {
  const [metadata, markdown] = post.content.trim().split('-- START --')

  const { cover } = JSON.parse(metadata)

  const url = post.url
    .replace('http://dramaland-noticias.blogspot.com/', '')
    .replace('.html', '')

  return { ...post, cover, markdown, url }
}
