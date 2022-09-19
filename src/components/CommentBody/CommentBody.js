import React from 'react'
import styles from './CommentBody.module.css'


function CommentBody({comment}) {
  return (
    <div className={styles.commentBody}>
        {comment.text}
    </div>
  )
}

export default CommentBody