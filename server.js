const express = require("express");
const cors = require('cors')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config();
require("./server/config/mongoose.config");

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./server/routes/user.routes')(app);
require('./server/routes/cities.routes')(app);
require('./server/routes/villages.routes')(app);
    
const server = app.listen(8000, () =>
    console.log('The server is all fired up on port 8000')
);

const io = require('socket.io')(server, { cors: true });

io.on("connection", socket => {
    console.log(socket.id);
    console.log("Nice to meet you, Shake Hand ?");
    socket.emit("Greeting", "Hi everyone");

    socket.on("new-client-logon", (data) => {
        console.log(data);
        console.log(data.sender);
        console.log(data.message);
        io.emit("weclome-from-server", data);
    })
    
    socket.on("new-client-msg", (data) => {
        console.log("new message: "+data);
        io.emit("message-from-server", data);
    })
})