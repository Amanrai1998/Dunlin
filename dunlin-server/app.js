require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const auth = require("./middlewares/auth");
const messageRoutes = require("./routes/message");
const authRoutes = require("./routes/auth");
const db = require("./models");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(`${__dirname}/public`));

app.get("/", function (req ,res) {
    res.send("This is the slash route");
});

app.use("/api/users/:id/messages", auth.loginRequired, auth.checkCurrentUser, messageRoutes);
app.use("/api/auth", authRoutes);
app.get("/api/messages", function (req, res) {
    db.Message.find().sort({createAt: "desc"})
        .populate("userId", {username: true, profileUrl: true})
        .then(function(messages){
            res.json(messages);
        })
        .catch(function (err) {
            res.status(500).json(err);
        });
});

const PORT = 3001;
app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});