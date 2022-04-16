import React from 'react';
import { useParams } from 'react-router-dom';
import useUsers from '../Hooks/useUsers';
import SingleUser from '../SingleUser/SingleUser';

const UserDetails = () => {
    const { userId } = useParams()
    const userDetails = useUsers(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
    return (
        <div className='container mx-auto mt-5'>
            <div className='d-flex justify-content-center'>
                <SingleUser user={userDetails[0]}>
                    {
                        { email: userDetails[0]?.email, phone: userDetails[0]?.phone }
                    }
                </SingleUser>
            </div>
        </div>
    );
};

export default UserDetails;