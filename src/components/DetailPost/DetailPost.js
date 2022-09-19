import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../../services";
import CommentList from "../CommentList/CommentList";
import Loading from "../Loading/Loading";
import Post from "../Post/Post";
import styles from './DetailPost.module.css';

const DetailPost = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true)
        getPost(postId).then((data, err) => {
            setIsLoading(false);
            if (data.status === 200) {
                setPost(data.data)
            }
        })
    }, [postId])

    const goBack = () => {
        navigate(-1);
    }

    return <>
        {
            isLoading ?
                <Loading /> :
                <div className={styles.detailPost}>
                    <div className={styles.btnWrapper}>
                        <button className={styles.btn} onClick={goBack}>Back -> </button>
                    </div>
                    <Post post={post}></Post>
                    <CommentList comments={post.children}></CommentList>
                </div>
        }
    </>
}

export default DetailPost