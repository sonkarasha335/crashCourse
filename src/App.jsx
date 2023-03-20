//import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import './App.css'
import { useState } from 'react';
//import MainHeader from './components/MainHeader';
import PostsList from './components/PostsList';

import Post from './components/Post'

/*function App() {
  return <h1>Welcome to my World!</h1>
 
}*/
function App(){
  const [modalIsVisible, setModalIsVisible] = useState(true);

  function showModalHandler(){
      setModalIsVisible(true);
    }
  function hideModalHandler() {
    setModalIsVisible(false);
}
  return (
    //reuse components <></> or<<main></main> both can apply
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
       <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
      </main>
   </>
  );
}

export default App;
