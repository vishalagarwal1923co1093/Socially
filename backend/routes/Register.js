const router = require("express").Router();
const User = require('../models/User')

router.post("/", (req, res) => {
    // console.log(req.body)

    const {username, email, password, reEnterPassword} = req.body

    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User Already Registered goto login page"})
        }else{
            const user = new User({
                username: username,
                email: email,
                password: password
            })
        
            user.save(err => {
                if(err){
                    res.send(err)
                }else{
                    res.send({message: "Successfully Registered"})
                }
            })
        }
    })
})

module.exports = router