import posts from "../data/posts";
import PostList from "../components/PostList.tsx";

const PostListPage = () => {
  return (
    <>
      <h1>Posts</h1>
      <PostList posts={posts}/>
    </>
  );
};

export default PostListPage;
