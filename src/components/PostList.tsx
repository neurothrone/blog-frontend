import { Link } from "react-router";
import Post from "../types/post.ts";
import "./PostList.css";

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <div className="post-list">
      {posts.map(post => (
        <article key={post.slug} className="post-card">
          <div className="post-content">
            <h3 className="post-title">
              <Link to={`/posts/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className="post-excerpt">
              {post.content.substring(0, 150)}
              {post.content.length > 150 ? '...' : ''}
            </p>
            <Link to={`/posts/${post.slug}`} className="post-read-more">
              Read More
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default PostList;
