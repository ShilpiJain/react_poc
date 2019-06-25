import React from 'react'

const Ninja = ({ ninjas, deteleNinja }) => {
        // console.log(this.props);
        // const { name, age, belt } = this.props;
        // const { ninjas } = props;
        // const NinjaList = ninjas.map(ninja => {
        //     return(
        //         <div className="ninja" key={ninja.id}>
        //             <div>Name : {ninja.name}</div>
        //             <div>Age : {ninja.age}</div>
        //             <div>Belt :- {ninja.belt} </div>
        //         </div>
        //     )
        // })
        
        return (
            <div className="ninja-list">
                {
                    ninjas.map(ninja => {
                        return ninja.age > 0 ? (
                            <div className="ninja" key={ ninja.id }>
                                <div>Name : { ninja.name }</div>
                                <div>Age : { ninja.age }</div>
                                <div>Belt : { ninja.belt } </div>
                                <button onClick={() => {deteleNinja(ninja.id)}}>Delete</button>
                            </div>
                        ) : null;
                    })
                }
            </div>   
        )
}
export default Ninja
