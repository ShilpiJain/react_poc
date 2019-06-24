import React from 'react'

 function Adduser(props) {
    let {
        handleSubmit,
        handleChange
    } = props;
    
    return (
        <div>
            <h1 className="text-center">Add User</h1>
            <form onSubmit={e => handleSubmit(e)} className="form-group col-md-4">
                <label htmlFor="first_name">First Name</label>
                <input className="form-control" type="text" id="first_name" onChange={handleChange} required/>
                <label htmlFor="last_name">Last Name</label>
                <input className="form-control"  type="text" id="last_name" onChange={handleChange} required/>
                <label htmlFor="email">Email ID</label>
                <input className="form-control"  type="text" id="email" onChange={handleChange} required/>
                <label htmlFor="gender">Gender</label>
                <input className="form-control"  type="text" id="gender" onChange={handleChange} required/>
                <label htmlFor="company">Company</label>
                <input className="form-control"  type="text" id="company" onChange={handleChange} required/>
                <br/>
                <button className="btn-block" > SUBMIT  </button>
            </form>
        </div>
    )
}
export default Adduser