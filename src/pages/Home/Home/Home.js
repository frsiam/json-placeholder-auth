import { Link } from 'react-router-dom';
import useUsers from '../../Hooks/useUsers';
import SingleUser from '../../SingleUser/SingleUser';

const Home = () => {
    const userData = useUsers('https://jsonplaceholder.typicode.com/users')
    if (userData.length) {
        userData.length = 4;
    }
    return (
        <div className='container mx-auto'>
            <div className='row'>
                {
                    userData?.map(user => <SingleUser key={user.id} user={user} />)
                }
            </div>
            <Link className='h4' to='/users'>Loading.....</Link>
        </div>
    );
};

export default Home;