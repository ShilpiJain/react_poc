import React from 'react'

 function Todoitem({todo, deleteTodo}) {
    
    return (
        <div>
            <h1 className="text-center">To DO</h1>
            <ul className="collection">
               {
                   todo.length ? (
                    todo.map(todoitem => {
                        return  (
                            <li className="collection-item pointer" onClick={() =>{deleteTodo(todoitem.id)}} key={todoitem.id}>
                                {todoitem.content}
                            </li>
                            );
                            }
                       )
                   ) :
                   (
                       <h1 className="text-center">Nothing in todo</h1>
                   )
                   
               }
            </ul>
        </div>
    )
}
export default Todoitem