
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = props => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('form submitted test');
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input  id="username" type="text" placeholder="username" />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" placeholder="age" />
        <button type="submit" >Add User</button>
      </form>
    </Card>
  )
}

export default AddUser;