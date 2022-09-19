import React from 'react'
import loadingImg from '../../assets/images/loading.gif'
import styles from './Loading.module.css'
function Loading() {
  return (
    <div className={styles.loadingWrapper}>
        <img src={loadingImg} className={styles.loadingImg} alt="loading"/>
    </div>
  )
}

export default Loading