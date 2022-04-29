import React from 'react'
import { useDispatch, useSelector} from 'react-redux'

const Todos = ()=> {
const dispatch = useDispatch();
const todos = useSelector (state => state.todoss);
const handleClick = id=>dispatch({
type: 'DELET TODO',
payload: id,
});
return (
<ul>
    
{todos.map(todo => <li anClick={() => handleClick(todo.id)}> 
{todo.label} </li>)}
</ul>
)

}

export default Todos