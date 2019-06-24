import React from 'react'

const Ninja = ({ ninjas }) => {
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
                        return ninja.age > 20 ? (
                            <div className="ninja" key={ ninja.id }>
                                <div>Name : { ninja.name }</div>
                                <div>Age : { ninja.age }</div>
                                <div>Belt : { ninja.belt } </div>
                            </div>
                        ) : null;
                    })
                }
            </div>   
        )
}
export default Ninja
