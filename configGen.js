var fs = require("fs");
var path = require("path");

exports.homePath = function() {
  return process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"];
};

exports.createEmptyConfig = function(cdir) {
  var cpath = path.resolve(cdir, "config.json");
  if (!fs.existsSync(cdir)) {
    fs.mkdirSync(cdir, "0700");
  }
  var template = {
    appKey: "YOURAPIKEY",
    appToken: "YOURAPITOKEN",
    getLists : ["Todo"]
  };
  fs.writeFileSync(cpath, JSON.stringify(template, null, 4));
  console.log("Blank configuration file saved to: " + cpath);
  console.log(
    "Go to https://trello.com/app-key and follow the instructions to get an App Key and App Token " +
      cpath
  );
};