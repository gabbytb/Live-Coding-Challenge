import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';




const LoginUser = () => {
    
    const navigate = useNavigate();
    const isLoggedIn = JSON.parse(localStorage.getItem("user"));    
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginErrMsg, setLoginErrMsg] = useState(null);
    
    
      

    useEffect(() => {
        var loginUrl = "http://127.0.0.1:3000/user/login";
        var signUpUrl = "http://127.0.0.1:3000/user/signup";

        if (isLoggedIn) {
            if (loginUrl === window.location.origin) {
                navigate("/admin/dashboard");
            };    

            if (signUpUrl === window.location.origin) {
                navigate("/admin/dashboard");
            };  

            navigate('/admin/dashboard');
        }
    }, [isLoggedIn, navigate]);
      
    


    function handleOnKeyUp(e) {
        console.clear();
        console.log(`COLLECTING USER DETAILS.....\nUsername: ${username} \nPassword: ${password}`);
    }



    const handleLogin = async () => {
        axios.post("https://api.travelbeta.com/api/v1/auth/login", 
        { 
            username, 
            password 
        })
        .then(response => {
            const { success, data, message } = response.data;
            if (!success) {
                setLoginErrMsg(message);
                console.log("Account with this details does not exist: ", message);
                return;                    
            } else {

                localStorage.setItem("user", JSON.stringify(data));
                // console.log("Success: ", success);
                // console.log("Data: ", data);
                // console.log("Message: ", message);
                window.location.replace("http://127.0.0.1:3000/admin/dashboard");        // Goto Admin Dashboard after Logging in

            }
        })
        .catch(error => {
            console.log("Cannot Login. Please check your Internet connection: ", error);
        });
    };



    return (
        <div className="Registration">
            <Header />
            <main>
                <h1 className="page-title">Log in</h1>
  
                <div className={`alert loginErrMsg ${loginErrMsg ? 'alert-shown' : 'alert-hidden'}`}>
                    <h2>{loginErrMsg}</h2>
                </div>
                
                <div className='d-flex container justify-content-center'>
                    <div className='row flex-column' style={{width:360}}>      
                        <div id="loginForm" className='loginForm'>
                            
                            <label htmlFor="username">Username
                                <input type="text" className="form-control" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} onKeyUp={handleOnKeyUp}/>
                            </label>      
                            
                            <label htmlFor="password">Password
                                <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyUp={handleOnKeyUp}/>
                            </label>                         
  
                            {
                                isLoggedIn ? ( <p>You are already logged in. Redirecting to the dashboard...</p>) : (<button onClick={handleLogin}>Login</button>)
                            }

                        </div>
                    </div>
                </div>
            </main>
        </div>
      );
  };
    
  export default LoginUser;