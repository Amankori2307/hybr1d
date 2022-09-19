import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.header}>
      <a href='/'>
        <span className={styles.logo}>Hybr1d</span>
      </a>
    </div>
  )
}

export default Header