import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.header}>
      <span className={styles.logo}>Hybr1d</span>
    </div>
  )
}

export default Header