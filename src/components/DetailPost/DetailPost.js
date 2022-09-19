import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../services";
import CommentList from "../CommentList/CommentList";
import Post from "../Post/Post";

const DetailPost = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        getPost(postId).then((data, err) => {
            if (data.status === 200) {
                setPost(data.data)
                console.log(data.data)
            }
        })
    }, [postId])
    return <div>
        <Post post={post}></Post>
        <CommentList comments={post.children}></CommentList>
    </div>
}

export default DetailPost