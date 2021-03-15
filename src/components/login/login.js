import React,{useState} from 'react'
import './login.css';
import GitHubUser from'./script.js'
import Profile from './profile'
import axios from 'axios'

function Login(props) {
  const [data, setData] = useState({});
  // const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = async e => {
      // e.preventDefault();
  
      // const profile = await fetch(`https://api.github.com/users`);
      // const profileJson = await profile.json();
      // console.log(profileJson);
  
      // const repositories = await fetch(profileJson.repos_url);
      // const repoJson = await repositories.json();
      // console.log(repoJson);
  
      // if (profileJson) {
      //   setData(profileJson);
      //   setRepositories(repoJson);
      // }
    };

    
    // function handleSubmit(event) {
      // var username =username.val()
      //   var password = password.val()
      // let auth = btoa(username + ":" + password);
// axios.post("https://api.github.com/user",{
//   username:auth.username,
//   password:auth.password
// })
// fetch("https://api.github.com/user", {
//   headers: {
//       'Authorization': 'Basic ' + auth
//   }
// })
// .then(function (data) {
//   return data.json()

//   })
//   .then(function (data) {
//     console.log(data)
  
//     })
  // .then(function (data) {
  //   username.val("")
  //   password.val("")
  //   if (data.message == "Bad credentials") {
  //       alert("wrong credentials")
  //   }
  //   else {
  //     var result = `<img class="img-thumbnail ml-4" width="100" height="100" src=" $ {data.avatar_url}"/><br><h1>${data.login}</h1><br><a target="_blank" href="${data.html_url}"><button class="btn btn-success">See Profile</button></a>`
  //     ("#result").html(result)
  // }
  // console.log(data)
  // })
  
// }

      
    return (

        <body>
          {/* <div class="container">
            <h1 class="githeading">Github Authentication</h1>
            <div id="message"></div>
            <form id="form" autocomplete="off" >
              <div class="form-group">
                <input
                  type="text"
                  value={username}
                  placeholder="username"
                  onChange={e=>setUsername(e.target.value)}
                  // class="form-control"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  value={password}
                  onChange={e=>setPassword(e.target.value)}
                  placeholder="password"
                  // class="form-control"
                  required
                />
              </div>
              <div class="form-group">
                  <button class="btn btn-danger" className="button" onClick={handleSubmit}>SignIn</button>
              </div>
            </form>
            <div id="result"></div>
          </div>  */}
           {/* <GitHubUser/> */}
         
      <Profile />
        </body>
       
 
      );
    }
    
  
export default Login
