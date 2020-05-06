const initServer = require("./initServer/");
const initRoutes = require("./initRoutes/");

const app = initServer();
initRoutes(app);
