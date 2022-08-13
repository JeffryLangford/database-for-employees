import db from "./server.js";

const sqlFunction = (data) => {
    console.log(data);

    // add department
    if(data.addDepartment) {
        const sql = `INSERT INTO department (name) VALUES (?)`;
        const params = data.addDepartment;
        db.query(sql, params, (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
        });
    };

    // add role
    if (data.addRole) {
        const sql = `INSERT INTO job (title, salary, department_id) VALUES (?, ?, ?)`;
        const params = [
            data.addRole,
            data.salary,
            data.department
        ];
        db.query(sql, params, (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
        });
    };
    
    // add employee
    if (data.firstName) {
        const sql = `INSERT INTO employee (first_name, last_name, job_id, manager_id) VALUES (?, ?, ?)`;
        const params = [
            data.firstName,
            data.lastName,
            data.role,
            data.manager
        ];
        db.query(sql, params, (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
        });
    };

    // update employee
    if (data.updateEmployee) {
        
    }
};

export default sqlFunction;