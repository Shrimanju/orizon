

import React, { useState } from "react";
import DisplayTable from "./DisplayTable";
import './login.css';
const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = e => {
    setUsername(e.target.value);
  };
  const onChangeHandler1 = e => {
    setPassword(e.target.value);
  };

  const submitHandler = async e => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    // const profile1 = await fetch(`https://api.github.com/users/${password}`);
    const profileJson = await profile.json();
    console.log(profileJson);

    const password1 = await fetch(`https://api.github.com/users/${password}`);
    const profilepass = await password1.json();
    console.log(profilepass);

    const repositories = await fetch(profileJson. repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

const repositories1 = await fetch(profilepass. repos_url);
    const repoJson1 = await repositories1.json();
    console.log(repoJson1);

    if (profileJson & profilepass) {
      setData(profileJson & profilepass);
      setRepositories(repoJson&repoJson1);
    }
    // if (profileJson) {
    //     setData(profileJson);
    //     setRepositories(repoJson);
    //   }
  };
  return (
    <>
      <div style={{ padding: 20 }}>
        <div className="ui search">
          <div className="ui icon input">
            <i className="search icon"></i>
            <input
              className="form-control"
              placeholder="username"
              type="text"
              class="form-control"
              value={username}
              onChange={onChangeHandler}
            />
            <input
              className="form-control"
              placeholder="password"
              type="password"
            //   class="form-control"
              value={password}
              onChange={onChangeHandler1}
            />
          </div>

          <button
           className="btn btn-danger"
            type="submit"
            onClick={submitHandler}
          >
            <i className="github icon"></i>
           Login
          </button>
          <DisplayTable data={data} repositories={repositories} />
        </div>
      </div>
    </>
  );
};
export default Profile;