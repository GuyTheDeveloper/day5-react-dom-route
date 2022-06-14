import { Link } from "react-router-dom";

export const ProfilesItem = ({ user }) => {
  return (
    <li key={user.id}>
      <Link to={`/profiles/${user.id}`}>
        <h3>{user.name}</h3>
        <strong>@{user.username}</strong>
        <p>{user.email}</p>
      </Link>
    </li>
  );
};
