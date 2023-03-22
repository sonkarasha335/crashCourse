import { Outer } from 'react-router-dom';
import PostsList from '../components/PostsList';



/*function App() {
  return <h1>Welcome to my World!</h1>
 
}*/
function Posts(){
  return (
    //reuse components <></> or<<main></main> both can apply
    <>
      <Outer />
      <main>
       <PostsList />
      </main>
   </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch('https://localhost:8080/posts');
  const resData = await response.json();
  return resData.posts;
}