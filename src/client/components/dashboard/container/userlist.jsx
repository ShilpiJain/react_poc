import React from 'react';

function Users(props) {
    let {
        handleDelete,
        handleEdit
    } = props;
    const users = props.userList;
    return (
        <div>
           <h1 className="text-center">Dashboard</h1>
            <table className="table">
                <tbody>
                    {
                        users.map( user => {
                            return (
                                <tr key={user.id}>
                                    <td> {user.id}</td>
                                    <td> {user.first_name}</td>
                                    <td> {user.last_name}</td>
                                    <td><a href={`mailTo:${user.email}`}> {user.email}</a></td>
                                    <td> {user.gender}</td>
                                    <td> {user.company}</td>
                                    <td><button className="btn" onClick={()=> {handleDelete(user.id)}}>Delete</button></td>
                                    <td><button className="btn" onClick={() => {handleEdit(user.id)}}>Edit</button></td>
                                </tr>
                                );
                            }
                        )
                    }  
                </tbody>
            </table>
        </div>
    )
}
export default Users;
