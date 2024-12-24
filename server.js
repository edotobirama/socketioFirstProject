import express from 'express'
const app = express()
//serve files in public statically
app.use(express.static('public'))
const expressServer = app.listen(4000)
import {Server} from 'socket.io'
const io = new Server(expressServer, {

});

io.on('connect',(socket)=>{
    //console.log(socket.handshake)
    console.log(socket.id, "has joined our server!")
    socket.on('messageFromClientToServer',newMessage=>{
        //pass the message to everyone connected
        console.log(newMessage)
        io.emit('messageFromServerToAllClients',newMessage)
    })
})