
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (enteredUsername, enteredAge) => {
    setUsers((prevUsers) => {
      return [...prevUsers, { name: enteredUsername, age: enteredAge, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={[users]} />
    </div>
  );
}

export default App;
