// 1. Introduction -----------------------
// created by facebook, used by :- netfilx, instagram, used to created dynamice 
// Redux 1. layer top of the react 
// 2. helps to manage state in app  :- data of the app, state of the app
// React Basics :- Components, events, template, props, form.
// React Router :- Routes, Route prarameters, redirects.
// Redux :- Stores, actons, reducers
// Repo :- github.com/iamshaunjp/react-redux-complete-playlist
// IDE :- Visual Studio
// 2. How react works -----------------------
// Vitual DOM
// Components & template
// Components looks like HTML template (Actully jsx)
// they contain state (Data & UI state)
// they also contain js for functionality
// 3. React setup -----------------------
// npm init
// npm create-react-app
// 4. React components  ----------------------- (hands on)
// class is a reserved keyword in react, we use className 
// curly braces works like template literal can do small logical work
// 5. state   ----------------------- (hands on)
// Name and Age from state
// 6. React dev tool 
// React developer tool browser extension
// 7. DOM event
// onClick, onMouseOver, onCopy.
// 8. Changing state and "this"
// Arrow function in react and this.setstate to change state value
// 9. Form intro    
// onSubmit() event 
// 10. Create react app
// npx create-reat-app myapp
// cd myapp
// npm start structure introduction
// 11. Single page application
// Basics "hello world" in app components
// 12. Nesting Component
// Ninja Component 
// 13. Props
// Desturcturing, Passing data from parent to child.
// 14. List of components
// Map this component in child component
// 15. Stateless component
// Container Component vs UI Components
// Container Component :-  Contain state, Contain lifecycle hook, not Concerned with UI, use classes to create.
// UI Component :-  Don't Contain state, Recieve data from props, Concerned UI only, Use function to create
// 16. Conditional output
// if condition and ternary operator
// 17. Form Revisited
// getting value from input on submit and setState
// 18. function as prop
// Pushing form value (object) in existing array. 
// 19. Delete data from list
// filter to detele 
// 20 recap vitual DOM
//


import React, { Component } from 'react'
import Ninja from '../learning/container/index';
import AddNinja from "../learning/container/addNinja";

class Learning extends Component {
    state = {
        // name : 'riya',
        // age : 25
        ninjas : [
            { name : "a", age : 24, belt: "red", id: 1 },
            { name : "b", age : 20, belt: "Black", id: 2 },
            { name : "c", age : 30, belt: "Green", id: 3 },
            { name : "d", age : 24, belt: "red", id: 4 },
            { name : "e", age : 20, belt: "Black", id: 5 },
            { name : "f", age : 30, belt: "Green", id: 6 },
            { name : "g", age : 24, belt: "red", id: 7 },
            { name : "h", age : 20, belt: "Black", id: 8 },
            { name : "i", age : 30, belt: "Green", id: 9 }
        ]        
    }
    handleClick = (e) => {
        this.setState({
            // name : 'Shilpi',
            // age : 23
            name : e.target.value,
        })
        console.log(this.state);
    }
    handleMouse(e){
        console.log(e);
    }
    handleCopy(e){
        console.log(e);
    }
    handleSubmit(e){
        e.preventDefault();
    }
    addNinja = (ninja) => {
        ninja.id = this.state.ninjas.length + 1;
        let ninjas = [...this.state.ninjas, ninja];
        this.setState({
            ninjas : ninjas
        })
    }

    deteleNinja = (id) => {
        let ninjas = this.state.ninjas.filter(ninja => {
            return ninja.id !== id;
        })
        this.setState({
            ninjas : ninjas
        })
       // console.log(ninjas)
    }
    render() {
        return (
            <div>
                 Hey, My name is {this.state.name} and age is {this.state.age}.
                <button onClick={this.handleClick}>Click Me</button>
                <button onMouseOver={this.handleMouse}>Click Me</button>
                <p onCopy={this.handleCopy}>Don't copy</p> 
                 Hey, I'm {this.state.name}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleClick}/>
                    <button>Submit</button> 
                </form>
                {/* <Ninja name="Shipi" age ="27" belt="Black"/> */}
                <Ninja ninjas={this.state.ninjas} deteleNinja={this.deteleNinja}/> 
                <AddNinja addNinja={this.addNinja}/>
            </div>
            
        )
    }
}
export default Learning