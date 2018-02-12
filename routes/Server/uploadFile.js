var xlsx = require("node-xlsx"),
    rawXLSX = require("xlsx"),
    path = require('path'),
    multer = require('multer'),
    fs = require('fs'),
    model = require("../../model.js"),
    pageSize = model.db.config.pageSize,
    auth = require("./auth"),
    archiver = require('archiver'),
    crypto = require('crypto'),
    util = require('util'),
    request = require('request'),
    checkLogin = auth.checkLogin,
    serverPath = path.join(__dirname, "../"),
    storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './public/uploads/');
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    }),
    upload = multer({
        storage: storage
    });

module.exports = function (app) {

}