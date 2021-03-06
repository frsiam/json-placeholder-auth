import React from 'react';
import { Link } from 'react-router-dom';

const SingleUser = ({ user, children }) => {
    const {name,id} = user || {}
    const {email, phone} = children || {}
    return (
        <div className='col-4 g-4'>
            <div className="card shadow-sm p-3 mb-5 bg-body rounded">
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Id: {id}</h6>
                    <p className='card-text'>{email}</p>
                    <p className='card-text'>{phone}</p>
                    {!children && <Link to={`/user/${id}`} className="card-link">Usre Details</Link>}
                </div>
            </div>
        </div>
    );
};

export default SingleUser;