const http = require("http");
const router = require("./router");
const port = process.env.PORT || 3002;
const server = http.createServer(router);

server.listen(port, () => {
  console.log(`server is listening to ${port}`);
});
