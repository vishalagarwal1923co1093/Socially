const router = require("express").Router();
const Post = require('../models/Post')

router.post("/", (req, res) => {
    const {id, caption, postPic, profilePic} = req.body

    // console.log(req.body)

    const post = new Post({
        userId: id,
        profilePic: profilePic,
        caption: caption,
        postPic: postPic,
    })

    try {
        post.save(err => {
            if(err){
                res.send(err)
            }else{
                res.send({message: "Successfully Posted"})
            }
        })
    } catch (err) {
        // console.log(err)
    }
})

module.exports = router