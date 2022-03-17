import { Routes, Route } from "react-router-dom";
import Main from "./layouts/Main";
import AddPost from "./pages/post/AddPost";
import EditPost from "./pages/post/EditPost";
import PostPage from "./pages/post/PostPage";

const App = () => (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<PostPage />} />
        <Route path='/add' element={<AddPost />} />
        <Route path='/edit/:id' element={<EditPost />} />
      </Route>
    </Routes>
)

export default App;
