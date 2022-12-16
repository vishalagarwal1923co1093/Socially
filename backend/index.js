const express = require('express')
const mongoose = require('mongoose')
const multer = require("multer");
const dotenv = require('dotenv')
const loginRoute =  require("./routes/Login")
const registerRoute =  require("./routes/Register")
const getUserRoute =  require("./routes/GetUser")
const addInfoRoute = require("./routes/AddInfo")
const getFilteredDataRoute = require("./routes/GetFilteredData")
const connectUpdateRoute = require("./routes/ConnectUpdate")
const getRequestUserRoute = require("./routes/GetRequestUser")
const friendArrayUpdateRouteC = require('./routes/FriendArrayUpdateC')
const friendArrayUpdateRouteR = require('./routes/FriendArrayUpdateR')
const getFriendsRoute = require('./routes/GetFriends')
const createPostRoute = require('./routes/CreatePost')
const getAllPostsRoute = require('./routes/GetAllPosts')
const updateLikeRoute = require('./routes/UpdateLike')
const getRecommendedFriendsRoute = require('./routes/GetRecommendedFriends')
const saveChatMessageRoute = require('./routes/SaveChatMessage')
const getAllChatsRoute = require('./routes/GetAllChats')



const cors = require('cors')
const User = require('../backend/models/User')
const path = require("path");



const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
dotenv.config()

app.listen(9002, () => {
    console.log("Backend running")
})

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB...'))
.catch((err) => console.error("Coudn't connect MongoDB....", err));


app.use("/images", express.static(path.join(__dirname, "public/images")));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });

const upload = multer({ storage: storage });
app.post("/api/fileUpload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});




app.use("/api/login", loginRoute)
app.use("/api/register", registerRoute)
app.use("/api/user", getUserRoute)
app.use("/api/addInfo", addInfoRoute)
app.use("/api/getFilteredData", getFilteredDataRoute)
app.use("/api/getFilteredData", getFilteredDataRoute)
app.use("/api/connectUpdate", connectUpdateRoute)
app.use('/api/getRequestUser', getRequestUserRoute)
app.use('/api/getFriends', getFriendsRoute)
app.use('/api/friendArrayUpdate/currentUserUpdate', friendArrayUpdateRouteC)
app.use('/api/friendArrayUpdate/requestUserUpdate', friendArrayUpdateRouteR)
app.use('/api/createPost', createPostRoute)
app.use('/api/getAllPosts', getAllPostsRoute)
app.use('/api/updateLike', updateLikeRoute)
app.use('/api/getRecommendedFriends', getRecommendedFriendsRoute)
app.use('/api/saveChatMessage', saveChatMessageRoute)
app.use('/api/getAllChats', getAllChatsRoute)