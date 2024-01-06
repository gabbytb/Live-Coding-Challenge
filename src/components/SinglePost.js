import React from "react";
import PostDetails from "../assets/post/PostDetails";
import Header from "../Header";






const SinglePost = () => {


    return (
        <>
            <Header />
            <main>
                <h1 className="page-title">Blog News</h1>
                <PostDetails />
            </main>
        </>
    );
}


export default SinglePost;