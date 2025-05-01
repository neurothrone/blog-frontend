import { useParams, Link, useLoaderData } from "react-router";
import axios from "axios";
import CommentsList from "../components/CommentsList.tsx";
import posts from "../data/posts";
import "./PostDetail.css";
import { useState } from "react";

export async function loader({ params }) {
  const response = await axios.get(`/api/posts/${params.slug}`);
  const { upvotes, comments } = response.data;
  return { upvotes, comments };
}

const PostDetailPage = () => {
  const { slug } = useParams();
  const { upvotes: initialUpvotes, comments } = useLoaderData();
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const post = posts.find(post => post.slug === slug);

  if (!post) {
    return <div className="post-detail">Post not found</div>;
  }

  // Find the index of the current post
  const currentIndex = posts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  async function upvote() {
    const response = await axios.post(`/api/posts/${slug}/upvote`);
    const updatedPost = response.data;
    setUpvotes(updatedPost.upvotes);
  }

  return (
    <article className="post-detail">
      <header className="post-detail-header">
        <h1 className="post-detail-title">{post.title}</h1>
        <div className="post-detail-meta">
          Published on {new Date().toLocaleDateString()}
        </div>
        <p>This post has {upvotes} upvotes.</p>
        <button onClick={upvote}>Upvote</button>
      </header>

      <div className="post-detail-content">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <CommentsList comments={comments}/>

      <div className="post-navigation">
        {prevPost ? (
          <Link to={`/posts/${prevPost.slug}`} className="post-navigation-link">
            ← Previous Post
          </Link>
        ) : (
          <div></div>
        )}

        {nextPost && (
          <Link to={`/posts/${nextPost.slug}`} className="post-navigation-link">
            Next Post →
          </Link>
        )}
      </div>
    </article>
  );
};

export default PostDetailPage;
