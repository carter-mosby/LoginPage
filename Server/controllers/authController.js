const User = require('../models/user')

const test = (req, res) =>{
    res.json('test is working')
}

const registerUser = async (req, res) => {
    try{
        const {userName, firstName, lastName, email, password, confirmPassword} = req.body;
        //check for valid username

        //check for valid name
        if(!firstName && !lastName){
            return res.json({
                error: 'first and last name is required.'
            })
        };
        //password NEEDS EDIT
        if(!password || password.length < 7){
            return res.json({
                error: 'password should be 7 characters or longer.'
            })
        };

        //checks if pw and cpw are correct
        if(password !== confirmPassword){
            return res.json({
                error: 'passwords must be the same.'
            })
        }

        //Email
        const exist = await User.findOne({email, userName});
        if (exist) {
            return res.json({
                error: 'the email or user Name you have entered is taken.'
            })
        };

        const user = await User.create({
            userName, firstName, lastName, email, password
        })
        return res.json(user);
    } catch (error){
        console.log(error)
    }
}; 

module.exports = {
    test,
    registerUser
};