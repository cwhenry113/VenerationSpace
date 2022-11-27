import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { RenderComment } from './RenderComment';
import FindVenerationById from './FindVenerationById';

function getCommentIds(id){
  const ven = FindVenerationById(id);
  const data = ven.comments;
  return data;
}

/*
function showComments(ids, number){
  for(let i = 0; i < number; i++){
    const data = data + RenderComment(ids[i]);
  }
  return data;
}
*/

function showComments(ids, number){
  let data = null;
  for(let i = 0; i < number; i++){
    data += RenderComment(ids[i]);
  }
  return(data);
}

function assembleGroup(id){
  const idList = getCommentIds(id);
  const number = 5;
  let data = showComments(idList, number);
  return data;
}

export const CommentBox = (props) => (
  <Comment.Group>
    <Header as='h1' dividing>
      Comments
    </Header>
    {assembleGroup(props)}

    <Form reply>
      <Form.TextArea />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
)

export default CommentBox