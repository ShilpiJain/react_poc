export default {
    USER_NAME : 'Username',
    PASSWORD : 'Password',
    INCORRECT_USERNAME: 'Username in not valid',
    INCORRECT_PASSWORD:'Password in not valid',
    getBaseApi : function(){
        switch(process.env.REACT_APP_ENV){
            case "local" :
            return `http://www.mocky.io`;
            case "qa" :
            return `http://www.mocky.io`;
            case "staging" :
            return `http://www.mocky.io`;
            case "prod" :
            return `http://www.mocky.io`;
            default :
            return `http://www.mocky.io`;

        }
    }
}