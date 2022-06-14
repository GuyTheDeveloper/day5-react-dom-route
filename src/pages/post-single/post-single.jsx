import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const PostSingle = () => {
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.log(err.message));
  }, [postId]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err.message));
  }, [post]);

  return (
    <div key={post.id}>
      <h1>Single Post</h1>
      <h2>
        <Link to={`/profiles/${user.id}`}>{user.name}</Link>
      </h2>
      <strong>@{user.username}</strong>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <Link to="/posts">Back to posts</Link>
    </div>
  );
};
