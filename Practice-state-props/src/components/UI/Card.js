

import classes from  './Card.module.css';

const  Card = props => {
  return (
    <div className={`${classes.card} ${props.className}`}>
      <div>
      <h1> Add User:</h1>
      </div>
      <div>
        {props.children}
      </div>
    
    </div>
  )
}

export default Card;