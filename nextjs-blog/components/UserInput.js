import React, { useState } from 'react'
import { 
Button, 
} from 'semantic-ui-react'



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
            <div className="comment-container">{text}</div>
        ))}   
        <div className="comment-flexbox">
        <h3> Comment</h3>
        <textarea value={comment} onChange={onChangeHandler} />
        <Button onClick={onClickHandler}>Submit</Button>
        
        </div>
        </div>
    
    );
}
