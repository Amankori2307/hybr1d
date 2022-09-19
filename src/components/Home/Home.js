import React, { useEffect, useState } from "react"
import styles from './Home.module.css'
import Post from "../Post/Post"
import SearchBox from "../SearchBox/SearchBox"
import { getPosts } from "../../services"
import Loading from "../Loading/Loading"

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
        <SearchBox setPosts={setPosts}></SearchBox>
        {
            isLoading ?
                <Loading /> :
                <div className={styles.main}>
                    {
                        posts.map((post, index) => <Post key={index} post={post}></Post>)
                    }
                </div>
        }

    </div>
}

export default Home