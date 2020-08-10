const app = require("../express");
const url = require("url");
const { insertStudent, queryAllStudent, queryPageStudent, queryKeyStudent, modifyStudent, deleteStudent } = require("../dao/StudentDao");
const timeUtil = require("../util/TimeUtil");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

app.post("/api/student/addedStudent", jsonParser, function (request, response) {
    insertStudent(request.body.data, result => {
        response.writeHead(200);
        response.end(JSON.stringify({ status: 1, msg: "学生信息已添加成功！" }));
    });
});

app.get("/api/student/allStudent", function (request, response) {
    queryAllStudent(result => {
        response.writeHead(200);
        response.end(JSON.stringify(result));
    });
});

app.get("/api/student/paginationStudent", function (request, response) {
    const params = url.parse(request.url, true).query;
    queryPageStudent(params, (result, total) => {
        const data = {
            result,
            count: total[0].total
        }
        response.writeHead(200);
        response.end(JSON.stringify(data));
    });
});

app.get("/api/student/filteredStudent", function (request, response) {
    const params = url.parse(request.url, true).query;
    queryKeyStudent(params, (result, total) => {
        const data = {
            result,
            count: total[0].total
        }
        response.writeHead(200);
        response.end(JSON.stringify(data));
    });
});

app.put("/api/student/modifiedStudent", jsonParser, function (request, response) {
    modifyStudent(request.body.data, result => {
        response.writeHead(200);
        response.end(JSON.stringify(result));
    });
});

app.delete("/api/student/deletedStudent", function (request, response) {
    const params = url.parse(request.url, true).query;
    deleteStudent(params, result => {
        response.writeHead(200);
        response.end(JSON.stringify(result));
    });
});