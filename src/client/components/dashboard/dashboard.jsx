import React from 'react'
import data from "../../constants/mockData"
import Users from "./container/userlist";
//import Profile from "../profile/profile";
import Adduser from "../dashboard/container/addUser";
// import data from "../services/index";
// import baselink from '../../constants/index';

class Dashboard extends React.Component {
    state = {
        userList : data.user
        //userList : data
    }
    
    // handleClick = (event) => {
    //     let userProfile = event.target.innerHTML;
    //     console.log(userProfile);
    // }

    // componentDidMount(){
    //     fetch('http://www.mocky.io/v2/5d10b551300000cd364ca195/user')
    //     .then(response => response.json())
    //     .then(data => this.setState({ userList : data }));
    // }
    handleSubmit = (e) => {
        e.preventDefault();
        let data = this.state.userList; 
        data.push({
            "id": data.length + 1, 
            "first_name": e.target.first_name.value,
            "last_name": e.target.last_name.value,
            "email": e.target.email.value,
            "gender": e.target.gender.value,
            "company": e.target.company.value
        });
        const current = [
            ...data
        ]
        this.setState({
             userList: [
                 ...current,
            ] 
        })
        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    
    handleEdit() {
        console.log("handleEdit")
    }

    handleDelete(){
        console.log("handleDelete")
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <Adduser
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                />
                <Users 
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete}
                    userList={this.state.userList}                    
                /> 
                
            </div>
        )
    }
}
export default Dashboard
