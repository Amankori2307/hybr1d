import React from 'react'
import CommentBody from '../CommentBody/CommentBody'
import styles from './Comment.module.css'

function Comment({ comment }) {
    return (
        <div className={styles.comment}>
            <CommentBody comment={comment}></CommentBody>
            {
                comment.children && comment.children.map((commentChild, index) => <Comment key={index} comment={commentChild} />)
            }
        </div>
    )
}

export default Comment