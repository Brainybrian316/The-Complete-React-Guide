
const AddUser = () => {
  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="username" />
        <label htmlFor="age">Age</label>
        <input type="number" placeholder="age" />
        <button>Add User</button>
      </form>
    </div>
  )
}

export default AddUser;