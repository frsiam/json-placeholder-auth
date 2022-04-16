import useUsers from '../../Hooks/useUsers';
import SingleUser from '../../SingleUser/SingleUser';

const Home = () => {
    const userData = useUsers('https://jsonplaceholder.typicode.com/users')
    if(userData.length){
        userData.length = 4;
    }
    return (
        <div>
            {
                userData.map(user => <SingleUser user={user}/>)
            }
        </div>
    );
};

export default Home;