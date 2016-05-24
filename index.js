"use strict"

var rpug = require("rpug")

exports.name = "rpug"
exports.inputFormats = ["rpug"]
exports.outputFormat = "html"
exports.render = function(str) { return rpug.precompile(str) }
