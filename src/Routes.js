const {Router} = require('express')
const AuthJwt = require("./Auth/jwt")
const MenuController = require("./Controllers/Api/Menu")

const routes = Router();

routes.post("/auth", AuthJwt.start);
routes.post("/api/menu", AuthJwt.Verify, MenuController.index);

module.exports = routes;