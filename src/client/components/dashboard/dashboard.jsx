import React from 'react'
// import data from "../../constants/mockData"
import Users from "./container/userlist";
// import Profile from "../profile/profile";
import Adduser from "../dashboard/container/addUser";
// import { getApi } from "../../utils/helper";
// import data from "../services/index";
// import baselink from '../../constants/index';
// http://www.mocky.io/v2/5d13350b0e0000b11fb4a309;

class Dashboard extends React.Component {
    state = {
        userList : []
    //  userList : data.user
    }
    
    // handleClick = (event) => {
    //     let userProfile = event.target.innerHTML;
    //     console.log(userProfile);
    // }

    componentDidMount(){
        fetch('http://www.mocky.io/v2/5d1336f20e0000a736b4a32f')
        .then(response => 
            response.json()
        ).then(data => this.setState({
            userList : data 
        }));
    }

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
        e.target.first_name.value = " ";
        e.target.last_name.value = " ";
        e.target.email.value = " ";
        e.target.gender.value = " ";
        e.target.company.value = " ";
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleEdit = (id) => {
        debugger;
        // let userList = this.state.userList;
        // console.log(userList);
        // let editUser = userList.filter( userObj => {
            // userObj.id !== id 
            // if () {
            //     return
            //         alert("editUser" + userObj)
            // }
        // })
    }

    handleDelete = (id) => {
        debugger;
         let newUserList = this.state.userList.filter( user =>{
             return user.id !== id;
         })
         this.setState({
             userList: newUserList
         })
        // console.log(this.state);
    }

    render() {
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
