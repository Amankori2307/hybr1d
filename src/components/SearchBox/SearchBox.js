import React, { useState } from 'react'
import { getPosts } from '../../services'
import styles from './SearchBox.module.css'

function SearchBox({setPosts}) {
    const [query, setQuery] = useState("");
    const onSearch = (e) => {
        e.preventDefault()
        getPosts(query).then((data, err) => {
            if(data.status === 200){
                setPosts(data.data.hits)
            }
        })
    }

    const onChange = (e) => {
        setQuery(e.target.value);
    }

    return (
        <form className={styles.searchWrapper} onSubmit={onSearch}>
            <input type="input" value={query} onChange={onChange} className={styles.searchInput} />
            <input type="button" value="Search" className={styles.searchBtn} />
        </form>
    )
}

export default SearchBox