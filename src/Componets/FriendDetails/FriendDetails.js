import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const FriendDetails = () => {
    const {id} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res =>res.json())
        .then(data=>setFriend(data))
    }, [])
    return (
        <div>
            <p>this is friend details{id}</p>
            <h3>{friend.name}</h3>
            <p>{friend.email}</p>
        </div>
    );
};

export default FriendDetails;