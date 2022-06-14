import { useEffect, useState } from "react";
import { ProfilesItem } from "../../components";

export const Profiles = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <h1>Profiles page</h1>
      <ul>
        {user.map((users) => (
          <ProfilesItem user={users} />
        ))}
      </ul>
    </div>
  );
};
