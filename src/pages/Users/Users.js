import React from 'react';
import useUsers from '../Hooks/useUsers';
import SingleUser from '../SingleUser/SingleUser';

const Users = () => {
    const allUsers = useUsers('https://jsonplaceholder.typicode.com/users')
    return (
        <div className='container mx-auto'>
            <h2 className='text-center h1 bg-dark text-white py-5'>From Users</h2>
            <div className='row'>
                {
                    allUsers.map(user => <SingleUser key={user.id} user={user} />)
                }
            </div>
        </div>
    );
};

export default Users;