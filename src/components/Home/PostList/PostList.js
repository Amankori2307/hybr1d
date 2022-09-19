import React from 'react'
import Post from './Post/Post'
import styles from './PostList.module.css'
function PostList({ posts }) {
  return (
    <div className={styles.postlist}>
      {
        posts.length !== 0 ?
          posts.map((post, index) => <Post key={index} post={post}></Post>) :
          <p className={styles.noResults}>No results found</p>
      }
    </div>

  )
}

export default PostList