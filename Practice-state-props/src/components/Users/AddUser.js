
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

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
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser;