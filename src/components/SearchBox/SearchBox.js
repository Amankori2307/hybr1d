import React, { useState } from 'react';
import { getPosts } from '../../services';
import styles from './SearchBox.module.css';

function SearchBox({ setPosts, setIsLoading, isLoading }) {
    const [query, setQuery] = useState("");
    const onSearch = (e) => {
        if (isLoading) return;
        e.preventDefault()
        setIsLoading(true)
        getPosts(query).then((data, err) => {
            setIsLoading(false);
            if (data.status === 200) {
                setPosts(data.data.hits)
            }
        })
    }

    const onChange = (e) => {
        setQuery(e.target.value);
    }

    return (
        <form className={styles.searchWrapper} onSubmit={onSearch}>
            <input type="input" value={query} onChange={onChange} className={styles.searchInput} placeholder="Search..."/>
            <input type="button" value="Search" className={styles.searchBtn} />
        </form>
    )
}

export default SearchBox