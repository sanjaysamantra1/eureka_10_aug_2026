import userArr from './user_data.json';
import UserCard from './UserCard';

export default function UserList() {
  return <>
    <h3 className="text-center">User List</h3>

    <div className="row">
        {userArr.map(user=>{
            return <UserCard user={user} />
        })}
    </div>
  </>
}
