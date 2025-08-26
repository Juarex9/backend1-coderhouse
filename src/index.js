import express from "express";
import { engine } from "express-handlebars";
import {join,__dirname} from "./utils/index.js";
import viewRoutes from "./routes/view.routes.js";
//import socket
import {Server} from "socket.io";




//settings
const app = express();
app.set("PORT", 3000);
const server = app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
const io = new Server(server);
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", join(__dirname,'views'));

// console.log(join(__dirname, "views"));
// console.log(join(__dirname, "../public"));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, "../public")));

//routes
app.use("/", viewRoutes);

//llamar socketio
io.on("connection", (socket) => {
  console.log("nuevo cliente conectado", socket.id);
  socket.on("message", (data) => {
    console.log(data);
  });
  // socket.emit('evento:individual', 'hola don josé');
  // socket.broadcast.emit('evento:todos', 'hola a todos, menos a mí');
  // io.emit('evento:todos', "hola a todos, incluido yo");
});
