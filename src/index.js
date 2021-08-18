const express = require("express")
const cors = require("cors")
const http = require("http")
const routes = require("./Routes")
const app = express();
const server = http.createServer(app);


app.use(cors());
app.use(express.json());
app.use(routes);
server.listen(3333);

