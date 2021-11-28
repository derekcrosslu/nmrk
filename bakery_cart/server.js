const http = require("http");
const fs = require("fs");
const host = "localhost";
const port = 3001;
const data = fs.readFileSync("bakery_problem_data.json");
const requestListener = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(JSON.parse(data)));
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
