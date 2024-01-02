import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardBody, CardText, CardLink, CardFooter } from "react-bootstrap";
import axios from "axios";







const BlogList = () => {
    
    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        axios.get("http://127.0.0.1:8000/v1/api/admin/posts/manage")
        .then(response => setBlogs(response.data))
        .catch(err => console.log("Error caught while fetching all Blog Posts! Visit BlogList.js Component: ", err));
    }, []);


    return (
        <div className="container px-0 d-flex">
            <div className="d-flex justify-content-start m-0 w-100">
                    

                    {
                        blogs.map(blog => {
                            return (
                                <Card key={blog._id} className="blog blog-post">
                                    {/* <CardImgOverlay>
                                        <CardImg src={blog.post_img} alt="" />
                                    </CardImgOverlay> */}
                                    <CardHeader>
                                        <CardTitle> 
                                            <Link to={`/blog/post/${blog._id}`} alt="post-title nav">{blog.post_title}</Link>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <CardText>{blog.post_description}</CardText>
                                        <CardLink>
                                            <Link to={`/blog/post/${blog._id}`} alt="post link">Read more</Link>
                                        </CardLink>
                                    </CardBody>
                                    <CardFooter>
                                        <CardText>{blog.post_author}</CardText>
                                    </CardFooter>
                                </Card>
                            )
                        })
                    }


                
            </div>
        </div>
    );
}




export default BlogList;