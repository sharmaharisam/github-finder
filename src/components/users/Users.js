import React from 'react'
import Useritem from './UserItem'
import Spinner from '../layout/Spinner'
const Users = (props) => {

    if(props.loading){
        return <Spinner />
    }
    else {
        return (
            <div style={userStyle}>
                {props.users.map(user =>(
                    <Useritem key={user.id} user= {user}/>          
                ))}
            </div>
        );
    }

}
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
     
};



export default Users
