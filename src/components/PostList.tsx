import { Link } from "react-router";
import Post from "../types/post.ts";

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <>
      {posts.map(post => (
        <article key={post.slug}>
          <h3><Link to={`/posts/${post.slug}`}>{post.title}</Link></h3>
          <p>{post.content.substring(0, 50)}</p>
        </article>
      ))}
    </>
  );
};

export default PostList;
