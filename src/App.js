import {
  Home,
  Posts,
  Error,
  PostSingle,
  Profiles,
  ProfileSingle,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./components";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postId" element={<PostSingle />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/profiles/:profileId" element={<ProfileSingle />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
