//import { useState } from 'react';
import { Link, Form, redirect } from 'react-router-dom';
import classes from './NewPost.module.css';
import Modal from '../components/Modal';

function NewPost(){
   ///document.querySelector('textarea').addEventListener('change',function (){})

   // const [enteredBody, setEnteredBody] = useState('');
   /* stateData[0] //current value
    stateData[1] //state updating function
    //let enteredBody =''*/
/*
    function changeBodyHandler(event) {
        setEnteredBody(event.target.value);
    }
    function changeAuthorHandler(event) {
        setEnteredAuthor(event.target.value);
    }*/
    // const [enteredBody , setEnteredBody] = useState('');
    // const [enteredAuthor, setEnteredAuthor] = useState('');
    // function bodyChangeHandler(event){
    //     setEnteredBody(event.target.value);
    // }
    // function authorChangeHandler(event){
    //     setEnteredAuthor(event.target.value);
    // }

    // function submitHandler(event){
    //     event.preventDefault();
    //     const postData = {
    //         body: enteredBody,
    //         author: enteredAuthor
    //     };
       
    //     //console.log(postData);
    //     //onAddPost(postData);
    //     //onCancel();
   // }
    
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
                <button>Submit</button>
            </p>
        </Form>
        </Modal>
    );
}

export default NewPost;
export async function action({request}) {
   const formData = await request.formData();
   //formData.get('body');
   const postData = Object.formEntries(formData); //{body: '...,', author:'...'}
    await fetch('https://localhost:8080/posts',{
        method : 'POST', body: JSON.stringify(postData),
        headers:{
            'Content-Type':'application/json'
        },
    });

    return redirect('/');
}