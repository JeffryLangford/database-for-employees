import mysql from 'mysql2';
import inquirer from 'inquirer';
import sqlFunction from './sqlFunction.js';

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '!Sooth425',
        database: 'company'
    },
    console.log('Connected to the company database.')
);

db.connect(err => {
    if (err) throw err;
});

// employee names as an array to update them
const employees = [];

// questions for inquirer
const questions = [
    {
        type: 'list',
        name: 'choose',
        message: 'What would you like to do?',
        choices: ['Add Department', 'Add Role', 'Add Employee', 'Update Employee Role']
    },
    {
        when: (choice) => choice.choose === 'Add Department',
        type: 'input',
        name: 'addDepartment',
        message: 'What is the name of the department?'
    },
    {
        when: (choice) => choice.choose === 'Add Role',
        type: 'input',
        name: 'addRole',
        message: 'What is the name of the Role?'
    },
    {
        when: (choice) => choice.choose === 'Add Role',
        type: 'input',
        name: 'salary',
        message: 'What is the salary of the role?'
    },
    {
        when: (choice) => choice.choose === 'Add Role',
        type: 'list',
        name: 'department',
        message: 'Which department does the role belong to?',
        choices: ['Front-of-House', 'Back-of-House', 'Accounting', 'Marketing', 'Ownership']
    },
    {
        when: (choice) => choice.choose === 'Add Employee',
        type: 'input',
        name: 'firstName',
        message: "What is the employee's first name?"
    },
    {
        when: (choice) => choice.choose === 'Add Employee',
        type: 'input',
        name: 'lastName',
        message: "What is the employee's last name?"
    },
    {
        when: (choice) => choice.choose === 'Add Employee',
        type: 'input',
        name: 'role',
        message: "What is the employee's role?"
    },
    {
        when: (choice) => choice.choose === 'Add Employee',
        type: 'input',
        name: 'manager',
        message: "Who is the employee's manager?"
    },
    {
        when: (choice) => choice.choose === 'Update Employee Role',
        type: 'list',
        name: 'updateEmployee',
        message: "Which employee's role would you like to update?",
        choices: [employees]
    },
    {
        type: 'confirm',
        name: 'askAgain',
        message: 'Would you like to do anything else?',
        default: 'true'
    }
]

const ask = () => {
    inquirer.prompt(questions).then((data) => {
        if (data.askAgain) {
            ask()
        } else {sqlFunction(data)}
    })
};

ask();

export default db;