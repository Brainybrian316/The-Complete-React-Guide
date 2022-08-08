
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import { useState } from 'react';

const AddUser = props => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === '' || age.trim().length === '') {
      return;
    }
    if (+age < 1) {
      return;
    }
    props.onAddUser(username, age);
    setUsername('');
    setAge('');
  }

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  }

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  }


  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input  id="username" type="text" value={username} placeholder="username" onChange={usernameChangeHandler} />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" placeholder="age" value={age} onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser;