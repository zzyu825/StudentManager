const express = require("express");
const cookie = require("cookie-parser");
const bodyParser = require("body-parser");
const app = new express();

app.use(express.static("./page"));
app.use(cookie());
// app.use(bodyParser.json());//数据JSON类型
// app.use(bodyParser.urlencoded({ extended: false }));

app.all("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // 允许所有域名的端口请求（跨域解决）
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,DELETE,OPTIONS");
    res.header("X-Powered-By", " 3.2.1")
    res.header("Content-Type", "application/json;charset=utf-8");
    if (req.method == 'OPTIONS') {
        res.sendStatus(200);
        return;
    }
    else {
        next();
        return;
    }
    next();
});

module.exports = app;