import PostList from "../components/PostList.tsx";
import { useLoaderData } from "react-router";

const PostListPage = () => {
  const { posts } = useLoaderData();

  return (
    <>
      <h1>Posts</h1>
      <PostList posts={posts}/>
    </>
  );
};

export default PostListPage;
