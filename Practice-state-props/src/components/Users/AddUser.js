
const AddUser = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('form submitted');
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input  id="username" type="text" placeholder="username" />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" placeholder="age" />
        <button type="submit" >Add User</button>
      </form>
    </div>
  )
}

export default AddUser;