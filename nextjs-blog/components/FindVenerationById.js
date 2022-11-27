export const FindVenerationById = (props) => {
    console.log('FINDING VENERATION BY ID');
    const res = fetch('/api/veneration/findById', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: `${props.id}`,
      }),
    });
    console.log(res);
    return null;
    //console.log(res);
    //return null;
  };
  export default FindVenerationById;