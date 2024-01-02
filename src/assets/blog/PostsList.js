import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardBody, CardText, CardLink, CardFooter } from "react-bootstrap";
import axios from "axios";







const PostsList = () => {
    
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        axios.get("http://127.0.0.1:8000/v1/api/admin/posts/manage")
        .then(response => setPosts(response.data))
        .catch(err => console.log("Error caught while fetching all Blog Posts! Visit BlogList.js Component: ", err));
    }, []);


    return (
        <div className="container px-0 d-flex">
            <div className="d-flex justify-content-start m-0 w-100">
                    

                    {
                        posts.map(post => {
                            return (
                                <Card key={post._id} className="blog blog-post">
                                    {/* <CardImgOverlay>
                                        <CardImg src={post.img} alt="post image" />
                                    </CardImgOverlay> */}
                                    <CardHeader>
                                        <CardTitle> 
                                            <Link to={`/blog/${post._id}`} alt="post-title-link">{post.title}</Link>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <CardText>{post.description}</CardText>
                                        <CardLink to={`/blog/${post._id}`} alt="post-link">Read more</CardLink>
                                    </CardBody>
                                    <CardFooter>
                                        <CardText>{post.by_author}</CardText>
                                    </CardFooter>
                                </Card>
                            )
                        })
                    }


                
            </div>
        </div>
    );
}




export default PostsList;