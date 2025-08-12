const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());

// Socket.io接続処理
io.on("connection", (socket) => {
  console.log("ユーザーが接続しました");

  socket.on("disconnect", () => {
    console.log("ユーザーが切断しました");
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`サーバーがポート${PORT}で起動しました`);
});
