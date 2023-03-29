
//import { useState, useEffect } from 'react';

import Post from './Post';
import classes from './PostsList.module.css';
import { useLoaderData } from 'react-router-dom';
//import NewPost from './NewPost';
//import Modal from './Modal';
//import classes from './PostsList.module.css';

function PostsList(){
   const posts = useLoaderData();
    /*const [posts, setPosts] = useState([]);
    const [isFatching, setIsFatching]= useState();

    useEffect(() => {
        async function fetchPosts(){
            setIsFatching(true);
            setPosts(resData.posts);
            setIsFatching(false);
        }

        fetchPosts();
    }, []);*/

    /*function addPostHandler(postData){
       
       /* setPosts((existingPosts) => [postData, ...existingPosts]);
    }*/
    
    return (
        <>
           {posts.length > 0 && (
             <ul className={classes.posts}>
                {posts.map((post) => (
                <Post key={post.id} id={post.id} author={post.author} body={post.body} />))}
            </ul>
           )}
           {posts.length === 0  &&(
            <div style={{textAlign: 'center', color:'white' }}>
                <h2>There are no posts yet.</h2>
                <p>Start adding Some!</p>
            </div>
           ) }
           {/* {isFatching && <div style={{textAlign: 'center', color:'white'}}>
                <p>Loading post.....</p>
            </div>} */}
        </>
    );
}

export default PostsList;