import React, { useEffect, useState } from 'react';
import LoginLogic from './LoginLogic';
import Dashboard from './Dashboard';
import LoginUser from './LoginUser';






const Login = () => {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const handleLogin = (loggedInUser) => {
        setUser('userDetails', JSON.stringify(loggedInUser));
        setToken('token', token);
    }

    // useEffect(() => {
    //     const redirLogintoDashboard = async (loggedInUser) => {
    //         if (!(loggedInUser)) {
    //             window.location.replace("http://127.0.0.1:3000/user/login");
    //             return 
    //         } else {
    //             window.location.replace("http://127.0.0.1:3000/admin/dashboard");
    //             return;
    //         }
    //     }   
    //     redirLogintoDashboard(); 
    // }, []);


    return (
        <div>
            {
                user ? (<Dashboard loggedInUser={user}/>) : (<LoginLogic onLogin={handleLogin} />)
            }
        </div>
    )

}


export default Login;





// const TestLogin = () => {
  
//     const [loggedInUser, setLoggedInUser] = useState(null);

  
//     const handleLogin = (user) => {
//         setLoggedInUser(user);
//     };


//     return (
//         <div>
//             {
//                 loggedInUser ? (<TestDashboard user={loggedInUser} />) : (<TestLoginLogic onLogin={handleLogin} />)
//             }
//         </div>
//     );
// };





// import React, { useState } from 'react';
// import { PermifyProvider } from "@permify/react-role";
// import TestLoginLogic from './TestLoginLogic';
// import TestDashboard from './TestDashboard';

// const TestLogin = () => {
//     const [loggedInUserId, setLoggedInUserId] = useState(null);

//     const handleLogin = (userId) => {
//         setLoggedInUserId(userId);
//     };

//     return (
//         <PermifyProvider>
//             {
//                 loggedInUserId ? (<TestDashboard userId={loggedInUserId} />) : (<TestLoginLogic onLogin={handleLogin} />)
//             }
//         </PermifyProvider>
//     );
// };

// export default TestLogin;
