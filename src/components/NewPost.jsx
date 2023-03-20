//import { useState } from 'react';

import classes from './NewPost.module.css';

function NewPost({onBodyChange,onAuthorChange,onCancel}){
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

    return(
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={onBodyChange} />
            </p>
            <p>{enteredBody}</p>
            <p>
                <label htmlFor="body">Your Name</label>
                <input type="text" required onChange={onAuthorChange} />
            </p>
            <p className={classes.actions}>
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
                <button>Submit</button>
            </p>
        </form>
    );
}

export default NewPost;