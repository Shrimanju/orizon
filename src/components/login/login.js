import React,{useState} from 'react'
import './login.css';
function Login(props) {
    const [modalShow, setModalShow] = useState(false);
    return (
        // <html>
        // <head>
        //   <title>Github Login</title>
        //   <link
        //     rel="stylesheet"
        //     href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        //   />
        // </head>
        <body>
          <div class="container">
            <h1 class="githeading">Github Authentication</h1>
            <div id="message"></div>
            <form id="form" autocomplete="off">
              <div class="form-group">
                <input
                  type="text"
                  id="username"
                  placeholder="username"
                  class="form-control"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  id="password"
                  placeholder="password"
                  class="form-control"
                  required
                />
              </div>
              <div class="form-group">
                  <button class="btn btn-danger" className="button" >SignIn</button>
              </div>
            </form>
            <div id="result"></div>
          </div>
        </body>
    //     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    //     <script src="script.js"></script>
    //   </html>
      );
    }
    
  
export default Login
