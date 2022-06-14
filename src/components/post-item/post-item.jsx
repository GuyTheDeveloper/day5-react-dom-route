import { Link } from "react-router-dom";

export const PostItem = ({ post }) => {
  return (
    <li key={post.id}>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <Link to={`/posts/${post.id}`}>See Profile</Link>
    </li>
  );
};
