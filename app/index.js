const path = require("path");
const express=require ("express");
const http = require("http");
const nexus = require("@nexus-switchboard/nexus-core")
const debug = require('debug')('nexus-app')
const cfg = require('./nexus.config');

//
// START EXPRESS SERVER
//
const app = express();
const port = process.env.PORT || "3001";
app.set("port", port);

const server = http.createServer(app);
server.on("listening", () => {
    debug(`Listening on ${port}`);
});
server.listen(port);

//
// START NEXUS
//
nexus.addNexusToExpressApp(app, cfg);
