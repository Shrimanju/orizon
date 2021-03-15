// import React, { useState } from "react";
// import DisplayTable from "./DisplayTable";

// const Profile = () => {
//   const [data, setData] = useState({});
//   const [username, setUsername] = useState("");
//   const [repositories, setRepositories] = useState([]);

//   const onChangeHandler = e => {
//     setUsername(e.target.value);
//   };

//   const submitHandler = async e => {
//     e.preventDefault();

//     const profile = await fetch(`https://api.github.com/users/${username}`);
//     const profileJson = await profile.json();
//     console.log(profileJson);

//     const repositories = await fetch(profileJson.repos_url);
//     const repoJson = await repositories.json();
//     console.log(repoJson);

//     if (profileJson) {
//       setData(profileJson);
//       setRepositories(repoJson);
//     }
//   };
//   return (
//     <>
//       <div style={{ padding: 20 }}>
//         <div className="ui search">
//           <div className="ui icon input">
//             <i className="search icon"></i>
//             <input
//               className="prompt"
//               placeholder="search username here..."
//               type="text"
//               value={username}
//               onChange={onChangeHandler}
//             />
//           </div>

//           <button
//             className="ui primary button"
//             type="submit"
//             onClick={submitHandler}
//           >
           
//             Search
//           </button>
//           <DisplayTable data={data} repositories={repositories} />
//         </div>
//       </div>
//     </>
//   );
// };
// export default Profile;

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
    const profileJson = await profile.json();
    console.log(profileJson);

    const password1 = await fetch(`https://api.github.com/users/${password}`);
    const profilepass = await password1.json();
    console.log(profilepass);

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

    // if (profileJson & profilepass) {
    //   setData(profileJson & profilepass);
    //   setRepositories(repoJson);
    // }
    if (profileJson) {
        setData(profileJson);
        setRepositories(repoJson);
      }
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
              required={true}
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