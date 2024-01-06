import React from "react";
import PostsList from "../assets/post/PostsList";
import Header from "../Header";






const Posts = () => {

    return (
        <>
            <Header />
            <main>
                <h1 className="page-title">Blog News</h1>
                <PostsList />
            </main>
        </>
    );
}

export default Posts;