import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const ProfileSingle = () => {
  const [profile, setProfile] = useState({});
  const { profileId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${profileId}`)
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.log(err.message));
  }, [profileId]);

  return (
    <div key={profile.id}>
      <h1>profile single</h1>
      <h3>{profile.name}</h3>
      <h4>@{profile.username}</h4>
      <em>{profile.email}</em>
      <Link to="/profiles">Back to profiles</Link>
      <Link to="/posts">Back to posts</Link>
    </div>
  );
};
