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
            <div className="comment-container" style={{textAlign: "center"}}>{text}</div>
        ))}   
        <div className="comment-flexbox" style={{textAlign: "center"}}>
        <h3> Comment</h3>
        <textarea style={{textAlign: "center"}} value={comment} onChange={onChangeHandler} />
        <Button onClick={onClickHandler}>Submit</Button>
        
        </div>
        </div>
    
    );
}
