import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>

      <Link to="/posts">Go to Posts</Link>
      <Link to="/profiles">Go to Profiles</Link>
    </div>
  );
};
