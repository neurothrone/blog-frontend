import { createBrowserRouter, RouterProvider } from "react-router";
import axios from "axios";
import Layout from "./Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import PostListPage from "./pages/PostListPage.tsx";
import PostDetailPage, { loader as postLoader } from "./pages/PostDetailPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    loader: async () => {
      return axios.get("/api/posts");
    },
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: "login",
        element: <LoginPage/>
      },
      {
        path: "register",
        element: <RegisterPage/>
      },
      {
        path: "about",
        element: <AboutPage/>
      },
      {
        path: "posts",
        element: <PostListPage/>
      },
      {
        path: "posts/:slug",
        element: <PostDetailPage/>,
        loader: postLoader
      },
      {
        path: "*",
        element: <NotFoundPage/>
      }
    ]
  }
]);


function App() {
  return <RouterProvider router={router}/>;
}

export default App
