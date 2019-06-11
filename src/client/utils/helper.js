

const checkIfMobNumber = (value) =>{
    const numbers = /^[0-9]*$/;
    return numbers.test(value);
}
export{
    checkIfMobNumber
};