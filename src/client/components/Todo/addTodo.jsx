import React from 'react'

function addTodo(props) {
    let {handleSubmit,handleChange } = props
    return (
        <div>
            <div>
                <form onSubmit={(e)=> {handleSubmit(e)}}>
                    <input type="text" name="content" onChange={handleChange()} required/>
                    <button className="btn">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default addTodo
