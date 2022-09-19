import React, { useEffect, useState } from "react"
import { getPosts } from "../../services"
import Loading from "../Loading/Loading"
import PostList from "../PostList/PostList"
import SearchBox from "../SearchBox/SearchBox"
import styles from './Home.module.css'

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        getPosts().then((data, err) => {
            setIsLoading(false);
            if (data.status === 200) {
                setPosts(data.data.hits)
            }
        })
    }, [])

    return <div className={styles.home}>
        <SearchBox setPosts={setPosts} setIsLoading={setIsLoading} isLoading={isLoading}></SearchBox>
        <div className={styles.main}>
            {
                isLoading ?
                    <Loading /> :
                    <PostList posts={posts} />
            }
        </div>

    </div>
}

export default Home