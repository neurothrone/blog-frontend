import { Link } from "react-router";
import "./HomePage.css";
import "../components/PostList.css";
import posts from "../data/posts";

const HomePage = () => {
  // Get the latest 3 posts for featured section
  const featuredPosts = posts.slice(0, 3);

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title">Welcome to Our Blog</h1>
        <p className="hero-subtitle">
          Discover interesting articles, stories, and insights from our team of writers.
          Stay updated with the latest trends and deep dives into fascinating topics.
        </p>
        <Link to="/posts" className="cta-button">
          Explore All Posts
        </Link>
      </section>

      <section className="featured-section">
        <h2 className="featured-title">Featured Posts</h2>
        <div className="post-list">
          {featuredPosts.map(post => (
            <article key={post.slug} className="post-card">
              <div className="post-content">
                <h3 className="post-title">
                  <Link to={`/posts/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="post-excerpt">
                  {post.content.substring(0, 120)}
                  {post.content.length > 120 ? '...' : ''}
                </p>
                <Link to={`/posts/${post.slug}`} className="post-read-more">
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
