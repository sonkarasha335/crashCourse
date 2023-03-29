import classes from './Post.module.css';
import { Link, Form } from 'react-router-dom';
//import { MdPostAdd, MdMessage } from 'react-icons/md
import { AiTwotoneEdit } from "react-icons/ai";

//const names = ['Asha','Sonkar'];

function Post({ id, author, body}){
   // const choseName = Math.random()> 0.5 ? names[0] : names[1];
    return (
       /* <div>
            <p>{choseName}</p>
            <p>React.Js is awesome!</p>
        </div>*/

        <li className={classes.post}> 
        <Link to={id}>
            <p className={classes.author}>{ author}</p>
            <p className={classes.text}>{ body}</p>
        </Link>
        <Form method="post" className={classes.form}>
        <p>
        <Link to="/edit-post" className={classes.button} >
          <AiTwotoneEdit size={18} />
          Update
        </Link>
      </p>
     </Form>

        </li>
    );
}

export default Post;