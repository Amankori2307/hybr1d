import React from 'react'
import styles from './Post.module.css'
import moment from 'moment'

function Post({ post }) {


  return (
    <div className={styles.post}>
      <div className={styles.storyText}>
        <p className={styles.title}>{post.title}</p>
        <a className={styles.link} href={post.url} target="_blank" rel="noreferrer">({post.url})</a>
      </div>
      <div className={styles.postDetails}>
        <div className={styles.postDetailsItem}>
          <div className={styles.text}>{post.points} Points</div>
        </div>
        <div className={styles.postDetailsItem}>
          <div className={styles.text}>{post.num_comments} Comments</div>
        </div>
        <div className={styles.postDetailsItem}>
          <div className={styles.text}>{moment(post.created_at).fromNow()}</div>
        </div>
        <div className={styles.postDetailsItem}>
          <div className={styles.text}>{post.author} </div>
        </div>
      </div>
    </div>
  )
}

export default Post