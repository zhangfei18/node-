const EventEmitter = require("events").EventEmitter;
const net = require("net");
const channel = new EventEmitter();
channel.clients = {};
channel.subscriptions = {};
// 放置监听器
channel.on("join", (id, client) => {
  this.clients[id] = client;
  this.subscriptions[id] = (senderId, message) => {
    //   其余人都能接收到自己发出的消息
    if (id != senderId) {
      this.clients[id].write(message);
    }
  };
  //   放置监听器
  this.on("broadcast", this.subscriptions[id]);
});
// 离开时取消监听函数
channel.on("leave", (id) => {
  channel.removeListener("broadcast", this.subscriptions[id]);
});
channel.on("shutdown", () => {
  channel.removeAllListeners("broadcast");
});
const server = net.createServer((client) => {
  const id = `${client.remoteAddress}:${client.remotePort}`;
  channel.emit("join", id, client);
  client.on("data", (data) => {
    data = data.toString();
    if (data === "shutdown\r\n") {
      channel.emit("shutdown");
    }
    channel.emit("broadcast", id, data);
  });
  client.on("close", () => {
    channel.emit("leave", id);
  });
});
server.listen(8888);
