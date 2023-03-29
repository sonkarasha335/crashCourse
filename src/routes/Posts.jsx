import { Outlet } from 'react-router-dom'
import PostsList from '../components/PostsList';

/*function App() {
  return <h1>Welcome to my World!</h1>
 
}*/
function Posts(){
  return (
    //reuse components <></> or<<main></main> both can apply
    <>
      <Outlet />
      <main>
       <PostsList />
      </main>
   </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch('http://localhost:8080/posts');
  //console.log(response);
  const resData = await response.json();
  return resData.posts;
}

