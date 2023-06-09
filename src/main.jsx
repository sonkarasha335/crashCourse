import React from 'react'
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import NewPost, { action } from './routes/NewPost';
import UpdatePost, { newPostsAction} from './routes/UpdatePost';
import RootLayout from './routes/RootLayout';
import PostDetails, {loader as postDetailsLoader} from './routes/PostDetails';
import Posts, { loader as postsLoader } from './routes/Posts'
import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <RootLayout />,
   children : [
    { path : '/',
      element: <Posts />,
      loader: postsLoader,
      children: [{ path : '/create-post', element : <NewPost />, action: action },{path : '/edit-post', element : <UpdatePost />, newPostsAction: newPostsAction },
      { path: '/:postId', element: <PostDetails />, loader: postDetailsLoader}
    ], 
    }, 
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

