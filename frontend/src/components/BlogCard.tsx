import '../css/BlogCard.css'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${post.id}`)}
      className="Blog-card"
    >
      <div className="Blog-meta">
        <span className="category">{post.category}</span>
        <span className="date">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>

      <h2>{post.title}</h2>

      <p>{post.content}</p>
    </div>
  )
}

export default BlogCard