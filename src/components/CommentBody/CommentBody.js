import HTMLReactParser from 'html-react-parser';
import moment from 'moment';
import React from 'react';
import styles from './CommentBody.module.css';

function CommentBody({ comment }) {
  return (
    <div className={styles.commentBody}>
      <div className={styles.commentDtails}>
        {comment.points && <span>{comment.points} points by</span>}
        {comment.author} on {moment(comment.created_at).format('LL')}&nbsp;
        | {comment?.children?.length} replies
      </div>
      <div className={styles.commentText}>
        {HTMLReactParser(comment.text || "")}
      </div>
    </div>
  )
}

export default CommentBody