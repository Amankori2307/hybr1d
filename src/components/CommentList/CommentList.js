import React from 'react'
import Comment from '../Comment/Comment'
import styles from './Comments.module.css'

function CommentList({ comments }) {
  return (
    <div className={styles.comments}>
      {comments?.length > 0 && comments.map((comment, index) => <Comment key={index} comment={comment} />)}
    </div>
  )
}

export default CommentList