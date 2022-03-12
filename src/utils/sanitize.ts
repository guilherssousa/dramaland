import { Article } from 'types'

export function sanitizePosts(posts: Article[]): Article[] {
  const final = posts.map((post) => sanitizePost(post))

  // filter all elements equal to false
  return final.flatMap((val) => (typeof val !== 'boolean' ? val : []))
}

export function sanitizePost(post: Article): Article | boolean {
  try {
    const [metadata, markdown] = post.content.trim().split('-- START --')

    const parsedMetadata = JSON.parse(metadata)

    const url = post.url
      .replace('http://dramaland-noticias.blogspot.com/', '')
      .replace('.html', '')

    const cleanContent = markdown
      .replace(/\[.*?\]\(.*?\)/g, '')
      .replace(/\*\*|\*|\[|\]|\(|\)|\#|\+|\-|\>|\|/g, '')
      .split(' ', 22)
      .join(' ')

    return {
      ...post,
      ...parsedMetadata,
      markdown,
      url,
      description: cleanContent,
    }
  } catch (e) {
    console.error(`Failed to trim: ${post.title}`)
    return false
  }
}
