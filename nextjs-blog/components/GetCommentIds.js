import FindVenerationById from './FindVenerationById';

export const GetCommentIds = (props) => {
    const ven = <FindVenerationById id={props.id}/>;
    const data = ven.comments;
    //return data;
    console.log(ven);
    console.log(data);
    return null;
  }

export default GetCommentIds;