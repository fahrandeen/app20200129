import React from 'react';

const  EmployeeList = (props) =>{

        return (
            <div>
                {props.employees ? (
                    <div className="container">
                        <table className="table table-striped">
                            <thead>
                                <tr className="table-danger">
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Salary</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.employees.map(emp =>
                                    <tr key={emp.id}>
                                        <td>{emp.id}</td>
                                        <td>{emp.employee_name}</td>
                                        <td>{emp.employee_salary}</td>
                                        <td>{emp.employee_age}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                ) : ("No Records")
                }
            </div>

        )
    }



export default EmployeeList;