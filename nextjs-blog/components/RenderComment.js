import React from 'react'
import { Comment} from 'semantic-ui-react'

function findCommentById(id){
    console.log('FINDING COMMENT BY ID');
    const res = fetch('/api/comment/findById', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: `${id}`,
      }),
    });
    const data = res.json();
    return data;
};

function findAccountById(id){
    console.log('FINDING ACCOUNT BY ID');
    const res = fetch('/api/account/findById', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: `${id}`,
      }),
    });
    const data = res.json();
    return data;
};

export const RenderComment = (props) => {
    const {commentId} = this.props;
    const foundComment = findCommentById(commentId);
    const foundAuthor = findAccountById(foundComment.author);
    return(
        <Comment>
        <Comment.Avatar src={foundAuthor.avatar} />
        <Comment.Content>
          <Comment.Author as='a'>{foundAuthor.username}</Comment.Author>
          <Comment.Metadata>
            <div>Posted {foundComment.created_on}, last edited {foundComment.edited_on}</div>
          </Comment.Metadata>
          <Comment.Text>{foundComment.text}</Comment.Text>
          <Comment.Actions>
            <Comment.Action>
            <button>Reply</button>
            </Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    )
}

export default RenderComment