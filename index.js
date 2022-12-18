// The packages used for the application
const inquirer = require("inquirer");
const fs = require("fs");
const mysql = require('mysql2');


const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: 8889,
        database: 'business_db'
    },
    console.log(`Connected to the business_db database.`)
);


function init() {
    inquirer.prompt([
        {
            name: "options1",
            message: "Which option do you want to choose?",
            type: "list",
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Update employee managers"]
        },


    ])
        .then((response) => {
            if (response.options1 === "View all departments") {
                db.query('SELECT * FROM department', function (err, results) {
                    console.table(results);
                    init()
                });


            }
            else if (response.options1 === "View all roles") {
                db.query('SELECT * FROM role', function (err, results) {
                    console.table(results);
                    init()
                });
            }
            else if (response.options1 === "View all employees") {
                db.query('SELECT * FROM employee', function (err, results) {
                    console.table(results);
                    init()
                });
            }
            else if (response.options1 === "Add a department") {
                inquirer.prompt([
                    {
                        name:"department",
                        message:"What is the name of department?",
                        type:"input"
                    },
                ]).then((response) => {
                    db.query('INSERT INTO department(NAME) VALUES (?)',[response.department], function (err, results) {
                        console.table(results);
                        init()
                    });
                });
            }
            else if (response.options1 === "Add a role") {
                inquirer.prompt([
                    {
                        name:"role",
                        message:"What is the name, salary, and department of role?",
                        type:"input"
                    },
                ]).then((response) => {
                    db.query('INSERT INTO department(NAME) VALUES (?)',[response.department], function (err, results) {
                        console.table(results);
                        init()
                    });
                });
            }
            else if (response.options1 === "Add an employee") {
                inquirer.prompt([
                    {
                        name:"employee",
                        message:"What is the employee's first name, last name, role, and manager?",
                        type:"input"
                    },
                ]).then((response) => {
                    db.query('INSERT INTO department(NAME) VALUES (?)',[response.department], function (err, results) {
                        console.table(results);
                        init()
                    });
                });
            }
            else if (response.options1 === "Update an employee role") {
                inquirer.prompt([
                    {
                        name: "update1",
                        message: "Who is the employee and their role to update?",
                        type: "list",
                        choices: ["Joe Rinn", "Bellson Hills", "Mina Elsher",]
                    },
                ]).then((response) => {
                    db.query('INSERT INTO department(NAME) VALUES (?)',[response.department], function (err, results) {
                        console.table(results);
                        init()
                    });
                });
            }
            else if (response.options1 === "Update employee managers") {
                inquirer.prompt([
                    {
                        name:"update2",
                        message:"Who is the employee manager to update?",
                        type:"input"
                    },
                ]).then((response) => {
                    db.query('INSERT INTO department(NAME) VALUES (?)',[response.department], function (err, results) {
                        console.table(results);
                        init()
                    });
                });
            }
    });
}


init()

