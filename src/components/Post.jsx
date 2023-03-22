import classes from './Post.module.css';
import { Link } from 'react-router-dom';

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
        </li>
    );
}

export default Post;