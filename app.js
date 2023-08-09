const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 8000;

const renderHtml = (path, res) => {
  //butuh ini const fs = require("fs") untuk memanggil fungsi fs
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("Error : File not found!");
    } else {
      res.write(data);
      res.end();
    }
  });
};

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-type": "text/html",
    });

    const url = req.url;
    if (url === "/project") {
      renderHtml("./project.html", res);
    } else if (url === "/about") {
      renderHtml("./about.html", res);
    } else {
      renderHtml("./index.html", res);
    }
  })
  .listen(port, () => {
    console.log("Server is Listen in port 8000");
  });
