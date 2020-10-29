import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend;
    const history = useHistory();
    const handleClick = (friendId) =>{
        history.push(`/about/${friendId}`)
    }
    const friendStyle ={
        border :'1px solid purple',
        margin :'20px',
        padding :'20px',
        borderRadius :'20px'
        }
    return (
        <div style={friendStyle}>
            <h1>Name : {name}</h1>
            <p>email : {email}</p>
            <button onClick={()=>handleClick(id)}>click me</button>
            {/* <p>Id : <Link to={`/about/${id}` }>show details of {id}</Link></p> */}
        </div>
    );
};

export default Friend   