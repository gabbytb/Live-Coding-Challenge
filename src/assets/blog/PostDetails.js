import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";






const PostDetails = () => {
  
    const { post_id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/v1/api/admin/posts/manage/:${post_id}`);
                setPost(response.data);
            } catch (error) {
                console.error('Error fetching post:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [post_id]);


    if (loading) {
        return <p>Loading...</p>;
    }

    if (!post) {
        return <p>Post not found!</p>;
    }

    return (
        <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            {/* You can display other post details here */}
        </div>
    );
};

export default PostDetails;