import classes from './Post.module.css';

//const names = ['Asha','Sonkar'];

function Post({ author, body}){
   // const choseName = Math.random()> 0.5 ? names[0] : names[1];
    return (
       /* <div>
            <p>{choseName}</p>
            <p>React.Js is awesome!</p>
        </div>*/

        <li className={classes.post}> 
            <p className={classes.author}>{ author}</p>
            <p className={classes.text}>{ body}</p>
        </li>
    );
}

export default Post;