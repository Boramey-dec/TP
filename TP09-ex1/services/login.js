const Users = require('../models/users');

const login = async (email, password) => {
    try {
        
        //check if email existed
        
        const user = await Users.findOne({email});
        if(!user)
            throw 'The user is not found~'

        //check matching pwd
       // console.log(user.password.toString() != password.toString());
        if(user.password.toString() != password.toString()) {
            throw "The user's information is incorrect~"
        }
       
        // return user's information
        return {
            success: true,
            data: null,
        }
        
    } catch (err) {
        return {
            success: false,
            err: err || 'error'
        }
    }
};

module.exports = {
    login,
}