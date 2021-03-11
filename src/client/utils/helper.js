
const getApi = () => {
    fetch('http://www.mocky.io/v2/5d1336f20e0000a736b4a32f')
    .then(response => 
        response.json()
    ).then(data => this.setState({ 
         userList : data 
    }));
}

const checkIfMobNumber = (value) =>{
    const numbers = /^[0-9]*$/;
    return numbers.test(value);
}
export{
    checkIfMobNumber,
    getApi
};