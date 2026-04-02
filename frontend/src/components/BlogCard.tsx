import '../css/BlogCard.css'

type Post = {
  id: number
  title: string
  content: string
  category: string
  createdAt: string | Date
}

type Props = {
  post: Post
}

function BlogCard({ post }: Props) {
  return (
    <div className="Blog-card">
      <h2>{post.title}</h2>

      <p className="Blog-content">
        {post.content.slice(0, 120)}...
      </p>

      <div className="Blog-footer">
        <span>{post.category}</span>
        <span>
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
    </div>
  )
}

export default BlogCard