import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../../App.css";
import Header from '../../Header';
import axios from 'axios';
// import $ from 'jquery';








const CreatePost = () => {
    
    console.clear();


    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    const userName = loggedInUser ? loggedInUser.userName : handleLogout();
    console.log("#CREATE ARTICLE:  Logged-In User: ", userName);
    const userToken = loggedInUser ? loggedInUser.accessToken : handleLogout();
    console.log("#CREATE ARTICLE:  Logged-In User-Token: ", userToken);
    
    function handleLogout() {
        localStorage.clear();
        window.location.replace("http://127.0.0.1:3000/user/login");
    }
  


    const [blog, setBlog] = useState({        
        post_title: '', 
        post_description: '', 
        post_author: '', 
        post_tags: '',
        post_categories: '', 
    });
    const [errMsg, setErrMsg] = useState(null);
    const [postExistsMsg, setPostExistsMsg] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false); 

    

    function handleOnKeyUp(e) {
        console.clear();
        console.log('Post Title: ', blog.post_title);
        console.log('Post Description: ', blog.post_description);
        console.log('Post Author: ', blog.post_author);
        console.log('Post Tags: ', blog.post_tags);
        console.log('Post Categories: ', blog.post_categories);
    }



    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setBlog({
          ...blog,
          [name]: value
        });
    }      
    


    function handleSubmit(e) {
        e.preventDefault();

        axios.post("http://127.0.0.1:8000/v1/api/admin/posts/manage/create", blog)
        .then((response) => {
            if (response.data === 'Fill all the required inputs') {
                setIsSubmitting(false);
                setErrMsg("Fill all the required inputs.");              
                return;
            } else if (response.data === 'Article exists') {
                setIsSubmitting(false);
                setPostExistsMsg(`${blog.post_title.toLowerCase()} exists.`);
                return;
            } else {
                setIsSubmitting(true);
                setTimeout(() => {
                    // window.location.href = "http://127.0.0.1:3000/user/login";
                    window.location.reload();
                }, 2500);
                return;
            };
        })
        .catch((error) => {
            console.log("Error occurred while creating new blog post: ", error);
        });
    }

    

    useEffect(() => {
        document.title = "CREATE BLOG POST | Samuel Akinola Foundation";        
    }, []);
 


    return (
        <div className="Registration">
            <Header />
            <main>
                <h1 className="page-title">Create New Post</h1>

                <div className='d-flex container justify-content-center'>
                    <div className='row flex-column mx-auto' style={{width:360}}>

                        <div className={`alert valhalla ${errMsg ? 'alert-shown' : 'alert-hidden'}`}>
                            <h2 className='alert alert-danger'>{errMsg}</h2>
                        </div> 
                        <div className={`alert winter ${postExistsMsg ? 'alert-shown' : 'alert-hidden'}`}>
                            <h2 className='alert alert-danger'>{postExistsMsg}</h2>
                        </div>               



                        <div className="loggedInUser">
                            <h2>Welcome, {userName}</h2>
                        </div>
                        <div className="button-container">
                            <div className="button logout-btn" onClick={handleLogout}>
                                <Link className="button text-decoration-none text-dark">Log out</Link>
                            </div>
                            {/* <HasAccess roles={["admin", "editor"]} permissions="contact-create" renderAuthFailed={null}>
                            <div className="button create-btn">Create Contact</div>
                            </HasAccess> */}
                        </div>
                        


                        <form className="" onSubmit={handleSubmit}>
                            <label htmlFor="post_title">Post Title
                                <input type="text" name="post_title" className="form-control" placeholder="Post Title" onChange={handleChange} onKeyUp={handleOnKeyUp}/>
                            </label>

                            <label htmlFor="post_description">Post Description
                                <input type="text" name="post_description" className="form-control" placeholder="Post Description" onChange={handleChange} onKeyUp={handleOnKeyUp}/>
                            </label>
                        
                            <label htmlFor="post_author">Author
                                <input type="text" name="post_author" className="form-control" placeholder="Post Author" onChange={handleChange} onKeyUp={handleOnKeyUp}/>        
                            </label>

                            <label htmlFor="post_tags">Tags
                                <input type="text" name="post_tags" className="form-control" placeholder="Post Tags" onChange={handleChange} onKeyUp={handleOnKeyUp}/>        
                            </label>

                            <label htmlFor="post_categories">Categories
                                <input type="text" name="post_categories" className="form-control" placeholder="Post Categories" onChange={handleChange} onKeyUp={handleOnKeyUp}/>        
                            </label>
                
                            {/* onClick={() => setIsSubmitting(false)} */}
                            <button type="submit" className="form-control">Publish Post</button>

                            <div className={`alert alert-success ${isSubmitting ? 'alert-shown' : 'alert-hidden'}`} onTransitionEnd={() => setIsSubmitting(false)}>
                                <strong className='isSubmitting'>submitting...</strong>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}



export default CreatePost;
