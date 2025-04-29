import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import PostListPage from "./pages/PostListPage.tsx";
import PostDetailPage from "./pages/PostDetailPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<Layout/>}
        >
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/posts" element={<PostListPage/>}/>
          <Route path="/posts/:slug" element={<PostDetailPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
