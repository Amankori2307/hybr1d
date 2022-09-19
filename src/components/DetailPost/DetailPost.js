import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../services";
import CommentList from "../CommentList/CommentList";
import Loading from "../Loading/Loading";
import Post from "../Post/Post";
import styles from './DetailPost.module.css'

const DetailPost = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true)
        getPost(postId).then((data, err) => {
            setIsLoading(false);
            if (data.status === 200) {
                setPost(data.data)
                console.log(data.data)
            }
        })
    }, [postId])
    return <>
        {
            isLoading ?
                <Loading /> :
                <div className={styles.detailPost}>
                    <Post post={post}></Post>
                    <CommentList comments={post.children}></CommentList>
                </div>
        }
    </>
}

export default DetailPost