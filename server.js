/* const WebSocket = require("ws");

// Crear un nuevo servidor WebSocket
const wss = new WebSocket.Server({ host: "0.0.0.0", port: 3000 });

// Mantener una referencia a los clientes conectados
const clients = new Set();

// Manejar la conexión de un cliente WebSocket
wss.on("connection", function connection(ws) {
  console.log("Nuevo cliente conectado");

  // Agregar el cliente a la lista de clientes conectados
  clients.add(ws);

  // Manejar mensajes entrantes
  ws.on("message", function incoming(message) {
    console.log("Mensaje recibido:", message);

    // Enviar el mensaje a todos los clientes conectados excepto al remitente
    clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  // Manejar cierre de conexión
  ws.on("close", function () {
    console.log("Cliente desconectado");
    // Remover el cliente de la lista de clientes conectados
    clients.delete(ws);
  });
});
 */

/* const WebSocket = require("ws");

// Crear un nuevo servidor WebSocket
const wss = new WebSocket.Server({ host: "0.0.0.0", port: 3000 });

// Mantener una referencia a los clientes conectados
const clients = new Set();

// Manejar la conexión de un cliente WebSocket
wss.on("connection", function connection(ws) {
  console.log("Nuevo cliente conectado");

  // Agregar el cliente a la lista de clientes conectados
  clients.add(ws);

  // Manejar mensajes entrantes
  ws.on("message", function incoming(message) {
    console.log("Mensaje recibido:", message);

    // Enviar el mensaje a todos los clientes conectados excepto al remitente
    clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  // Manejar cierre de conexión
  ws.on("close", function () {
    console.log("Cliente desconectado");
    // Remover el cliente de la lista de clientes conectados
    clients.delete(ws);
  });
});

// Mensaje de conexión
wss.on("listening", function () {
  console.log(
    `Servidor WebSocket corriendo en ws://${wss.options.host}:${wss.options.port}`
  );
}); */

const express = require("express");
const http = require("http");
const { Server } = require("ws");

const app = express();
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
const wss = new Server({ server });

// Mantener una referencia a los clientes conectados
const clients = new Set();

// Configurar Express para servir archivos estáticos, si es necesario
app.use(express.static("public"));

// Manejar la conexión de un cliente WebSocket
wss.on("connection", function connection(ws) {
  console.log("Nuevo cliente conectado");

  // Agregar el cliente a la lista de clientes conectados
  clients.add(ws);

  // Manejar mensajes entrantes
  ws.on("message", function incoming(message) {
    console.log("Mensaje recibido:", message);

    // Enviar el mensaje a todos los clientes conectados excepto al remitente
    clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  // Manejar cierre de conexión
  ws.on("close", function () {
    console.log("Cliente desconectado");
    // Remover el cliente de la lista de clientes conectados
    clients.delete(ws);
  });
});

// Mensaje de conexión
server.listen(PORT, () => {
  console.log(
    `Servidor WebSocket corriendo en ws://${server.address().address}:${PORT}`
  );
});
