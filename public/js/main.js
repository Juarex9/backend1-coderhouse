const socket = io();
const userName = document.querySelector("#username"),
messages = document.querySelector("#message"),
inputMessage = document.querySelector("#mesaggeInput"),
btnSend = document.querySelector("#sendMessageBtn");

// socket.emit("message", "hola don pepito");

// socket.on('evento:individual', (data) => {
//   console.log(data);
// });

// socket.on('evento:todos', (data) => {
//   console.log(data);
// });

// socket.on('evento:todos', (data) => {
//   console.log(data);
// });

Swal.fire({
  title: "Ingreas tu nombre",
  input: "text",
  inputValidator: (value) => {
    if (!value) {
      return "Mecesitas escribir tu nombre para continuar!";
    }
  },
}).then(result =>{
    user = result.value;
    userName.innerText = user;
});

btnSend.addEventListener("click", () => {
    if(inputMessage.value.trim().length > 0){
        socket.emit("message", {user, message: inputMessage.value});
        inputMessage.value = "";
    };
});