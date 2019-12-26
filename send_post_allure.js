var http = require("http");

var options = {
    host: "developer.api.autodesk.com",
    path: "/oss/v1/buckets",
    method: "POST",
    headers: {"Content-Type": "application/json"},
    requestBody = {"results": results}
};