import React, { useState } from 'react';
import CommentBody from '../CommentBody/CommentBody';
import styles from './Comment.module.css';

function Comment({ comment }) {
    const [isOpen, setIsOpen] = useState(true);
    const toggleComment = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={styles.comment}>
            <div className={styles.commentBodyWrapper}>
                <div>
                    <span onClick={toggleComment}>{isOpen ? "[-]" : "[+]"}</span>
                </div>
                <CommentBody comment={comment}></CommentBody>
            </div>
            {
                isOpen && comment.children && comment.children.map((commentChild, index) => <Comment key={index} comment={commentChild} />)
            }
        </div>
    )
}

export default Comment