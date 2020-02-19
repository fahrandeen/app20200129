import React from 'react';

const EmployeeForm = (props) => {
    return (
        <div className="container">
            <form onSubmit={(evt) => { props.handleSubmitEmployee(evt) }}>
                <div className="form-group">
                    <label>Name: </label>
                    <input
                        type="text"
                        name="name"
                        value={props.name}
                        onChange={props.handleInputData}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Salary: </label>
                    <input
                        type="text"
                        name="salary"
                        value={props.salary}
                        onChange={props.handleInputData}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Age: </label>
                    <input
                        type="number"
                        name="age"
                        value={props.age}
                        onChange={props.handleInputData}
                        className="form-control"
                    />
                </div>
                <button className="btn btn-primary">Add</button>
            </form>
        </div>
    );
}

export default EmployeeForm;

