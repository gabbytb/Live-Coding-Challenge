import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css";
import Header from '../Header';










function Accountusers() {

    const [users, setUsers] = useState([]);


    const isLoggedIn = JSON.parse(localStorage.getItem("user"));
    console.log("Logged-in UserId: ", isLoggedIn);
    const userId = isLoggedIn ? isLoggedIn.accessToken : handleLogout();
    console.log("Logged-in UserId: ", userId);


    async function handleLogout() {
        localStorage.clear();
        window.location.replace("/user/login");
    };

    

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/v1/admin/users/manage")
        .then((response) => { 
            setUsers(response.data);
            console.log(response.status, response.data);
        })
        .catch((err) => {
            console.log(err);
        });


        // axios.get("http://127.0.0.1:8000/v1/api/admin/posts/manage")
        // .then(response => {
        //     const { success, data, message } = response.data;
        //     if (success) {
        //         setPosts(data);
        //         console.log("Success: ", success);
        //         console.log("Data: ", data);
        //         console.log("Message", message);
        //         return;
        //     } else {
        //         console.log("Message: ", message);
        //     }
        // })
        // .catch((err) => {
        //     console.log(err);
        // });
    }, []);
    

    return (
        <div className="Accountusers">
            <Header />

            <main>
                <h1 className="page-title">ACCOUNT USERS</h1>
                
                <table className='table display-flex justify-content-center align-items-center'>
                    <thead className='table-head'>
                        <tr className='table-row'>
                            <th scope="col">ID</th>
                            <th scope="col">USERNAME</th>
                            <th scope="col">FIRST NAME</th>
                            <th scope="col">LAST NAME</th>
                            <th scope="col">E-MAIL</th>
                            <th scope="col">PASSWORD</th>
                            <th scope="col">ACTIVE</th>
                            <th scope="col">ROLE</th>
                            <th scope="col">PERMISSIONS</th>
                            <th scope="col">CREATED AT</th>
                            <th scope="col">UPDATED AT</th>
                            <th scope="col">TOKEN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => {
                                return (
                                    <tr key={user._id}>
                                        <th scope="row">{user._id}</th>
                                        <td>{user.username}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
                                        <td>{user.isActive === true ? "true" : "false"}</td>
                                        {/* <td>{user.role}</td>
                                        <td>{user.permission}</td> */}
                                        <td>{user.createdAt}</td>
                                        <td>{user.updatedAt}</td>
                                        <td>{user.token}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default Accountusers;