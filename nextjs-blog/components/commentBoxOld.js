import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { RenderComment } from './RenderComment';


function findVenerationById(id){
  console.log('FINDING VENERATION BY ID');
  const res = fetch('/api/veneration/findById', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      _id: `${id}`,
    }),
  });
  const data = res;
  return data;
};

function getCommentIds(id){
  const ven = findVenerationById(id);
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
  for(let i = 0; i < number; i++){
    RenderComment(ids[i]);
  }
}

function assembleGroup(id){
  const idList = getCommentIds(id);
  const number = 5;
  showComments(idList, number);
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