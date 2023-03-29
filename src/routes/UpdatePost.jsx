import Modal from '../components/Modal';
import { Link, Form, redirect } from 'react-router-dom';
import classes from './UpdatePost.module.css';


function UpdatePost(){
    return(
        <Modal>
        <Form method="post" className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" name="body" required rows={3} />
            </p>
            <p>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="author" required  />
            </p>
            <p className={classes.actions}>
                <Link to=".." type="button">Cancel</Link>
                <button>Update</button>
            </p>
        </Form>
        </Modal>
    );
}

export default UpdatePost;
export async function newPostsAction({request}) {
    const formData = await request.formData();
    formData.get('body');
    const postData = Object.fromEntries(formData); //{body: '...,', author:'...'}
     await fetch('http://localhost:8080/posts',{
         method : 'POST', body: JSON.stringify(postData),
         headers:{
             'Content-Type':'application/json'
         },
     });
 
     return redirect('/');
     //return null;
 }