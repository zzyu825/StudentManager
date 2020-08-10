const dbUtil = require("./DBUtil");
const timeUtil = require("../util/TimeUtil");
const moment = require('moment');

function insertStudent({sNo, name, sex, birth, phone, address, date}, success) {
    const sql = "insert into students (`sNo`, `name`, `sex`, `birth`, `phone`, `address`, `date`) values (?, ?, ?, ?, ?, ?, ?);";
    const params = [sNo, name, sex, birth, phone, address, date];
    const connection = dbUtil.createConnection();
    connection.connect();
    connection.query(sql, params, function (error, result) {
        if (error) {
            console.log(error);
        } else {
            success(result);
        }
    });
    connection.end();
}

function queryAllStudent(success) {
    const sql = "select * from students;";
    const connection = dbUtil.createConnection();
    connection.connect();
    connection.query(sql, function (error, result) {
        if (error) {
            console.log(error);
        } else {
            success(result);
        }
    });
    connection.end();
}

function queryPageStudent({ nowPage, limit }, success) {
    const offset = (nowPage - 1) * limit;
    const sql = `select sql_calc_found_rows * from students limit ${offset},${limit};`;
    const sql1 = `select found_rows() as total;`;
    const connection = dbUtil.createConnection();
    connection.connect();
    connection.query(sql, function (error, result) {
        if (error) {
            console.log(error);
        } else {
            let list = result;
            connection.query(sql1, (err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    success(list, res)
                }
            });
            connection.end();
        }
    });
}

function queryKeyStudent({ searchValue, nowPage, limit }, success) {
    const offset = (nowPage - 1) * limit;
    const sql = `select sql_calc_found_rows * from students where name like '${searchValue}%' limit ${offset},${limit};`;
    const sql1 = `select found_rows() as total;`;
    const connection = dbUtil.createConnection();
    connection.connect();
    connection.query(sql, function (error, result) {
        if (error) {
            console.log(error);
        } else {
            let list = result;
            connection.query(sql1, (err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    success(list, res)
                }
            });
            connection.end();
        }
    });
}

function modifyStudent({sNo, name, sex, birth, phone, address, date}, success) {
    console.log(sex);
    birth = moment(birth).format('YYYY-MM-DD');
    date = moment(date).format('YYYY-MM-DD');
    const sql = `update students set name='${name}',sex=${sex},birth='${birth}',phone='${phone}',address='${address}',date='${date}' where sNo=${sNo};`
    const params = [sNo, name, sex, birth, phone, address, date];
    const connection = dbUtil.createConnection();
    connection.connect();
    connection.query(sql, params, function (error, result) {
        if (error) {
            console.log(error);
        } else {
            success(result);
        }
    });
    connection.end();
}

function deleteStudent({sNo}, success) {
    const sql = `delete from students where sNo=${sNo};` 
    const params = [sNo];
    const connection = dbUtil.createConnection();
    connection.connect();
    connection.query(sql, params, function (error, result) {
        if (error) {
            console.log(error);
        } else {
            success(result);
        }
    });
    connection.end();
}

module.exports = {
    insertStudent,
    queryAllStudent,
    queryPageStudent,
    queryKeyStudent,
    modifyStudent,
    deleteStudent
}