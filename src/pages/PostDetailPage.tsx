import { useState } from "react";
import { useParams, Link, useLoaderData, LoaderFunctionArgs } from "react-router";
import axios from "axios";
import CommentsList from "../components/CommentsList.tsx";
import AddCommentForm from "../components/AddCommentForm.tsx";
import Comment from "../types/comment.ts";
import useUser from "../hooks/use-user.ts";
import posts from "../data/posts";
import "./PostDetail.css";

interface LoaderData {
  upvotes: number;
  comments: Comment[];
}

export async function loader({ params }: LoaderFunctionArgs) {
  const response = await axios.get(`/api/posts/${params.slug}`);
  const { upvotes, comments } = response.data;
  return { upvotes, comments };
}

const PostDetailPage = () => {
  const { slug } = useParams();
  const { upvotes: initialUpvotes, comments: initialComments } = useLoaderData<LoaderData>();
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [comments, setComments] = useState(initialComments);
  const post = posts.find(post => post.slug === slug);

  const { user } = useUser();

  if (!post) {
    return <div className="post-detail">Post not found</div>;
  }

  const currentIndex = posts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  async function upvote() {
    const token = user && await user.getIdToken();
    const headers = token ? { Authorization: token } : {};

    const response = await axios.post(`/api/posts/${slug}/upvote`, null, { headers });
    const updatedPost = response.data;

    setUpvotes(updatedPost.upvotes);
  }


  async function addComment(comment: Comment) {
    const token = user && await user.getIdToken();
    const headers = token ? { Authorization: token } : {};

    const response = await axios.post(`/api/posts/${slug}/comments`, comment, { headers });
    const updatedPost = response.data;

    setComments(updatedPost.comments);
  }

  return (
    <article className="post-detail">
      <header className="post-detail-header">
        <h1 className="post-detail-title">{post.title}</h1>
        <div className="post-detail-meta">
          Published on {new Date().toLocaleDateString()}
        </div>
        <p>This post has {upvotes} upvotes.</p>
        {user && (
          <button onClick={upvote}>Upvote</button>
        )}
      </header>

      <div className="post-detail-content">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {user ? (
        <AddCommentForm onAddComment={addComment}/>
      ) : (
        <p>Log in to add a comment</p>
      )}
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
