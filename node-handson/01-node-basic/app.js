const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home page");
  } else if (req.url === "/about") {
    res.end("About page");
  } else {
    res.end("error page");
  }
});

server.listen(3131, () => {
  console.log("Server is Running... ! ");
});
