const mongoose = require("mongoose");
const Grid = require('gridfs-stream');
const conn = require("./db");

Grid.mongo = mongoose.mongo;

let gfs
gfs = Grid(conn.db);
gfs.collection('uploads');
module.exports = gfs;