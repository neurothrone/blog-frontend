import { useParams } from "react-router";
import posts from "../data/posts";

const PostDetailPage = () => {
  const { slug } = useParams();
  const post = posts.find(post => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetailPage;
