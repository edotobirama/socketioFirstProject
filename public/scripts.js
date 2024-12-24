const socket = io('http://localhost:4000',{
    auth:{
        secret: "this is a secret"
    },
    query:{
        meaningOfLife: 42
    }
})


socket.on('newClient',data=>{
    console.log(data);
})

socket.on('messageFromServerToAllClients',newMessage=>{
    document.getElementById("messages").innerHTML += `<li>${newMessage}</li>`;
})

document.getElementById('messages-form').addEventListener('submit',e=>{
    e.preventDefault();
    console.log("Submit event happening")
    const newMessage = document.getElementById('user-message').value;
    document.getElementById('user-message').value = "";
    socket.emit('messageFromClientToServer',newMessage);
})