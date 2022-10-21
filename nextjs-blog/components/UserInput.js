import React, { useState } from 'react'
import { 
Button, 
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'



export const UserInput = () => {

const [comment, setComment] = useState("");
const [comments, setComments] = useState([]);

const onClickHandler = () => {
    setComments((comments) => [...comments, comment]);
    };

    const onChangeHandler = (e) => {
        setComment(e.target.value);
        };

    return(
    <div className="main-container">
        {comments.map((text) => (
            <div className="comment-container" style={{textAlign: "center"}}>{text}</div>
        ))}   
        <div className="comment-flexbox" style={{textAlign: "center"}}>
        <h3> Comment</h3>
        <textarea style={{textAlign: "center"}} value={comment} onChange={onChangeHandler} />
        <button onClick={onClickHandler} class = "ui color1 button">Submit</button>
        </div>
        </div>
    
    );
}
