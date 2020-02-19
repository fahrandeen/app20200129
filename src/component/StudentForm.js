import React from 'react';

const StudentForm = (props) => {
    return (
        <div className="container">
            <form onSubmit={(evt) => { props.handleSubmit(evt) }}>
                <div className="form-group">
                    <label>Name: </label>
                    <input
                        type="text"
                        name="studentName"
                        value={props.studentName}
                        onChange={props.handleInputData}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Address: </label>
                    <input
                        type="text"
                        name="studentAddress"
                        value={props.studentAddress}
                        onChange={props.handleInputData}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="form-check-label">Status:</label>
                    <input
                        type="checkbox"
                        name="studentStatus"
                        checked={props.studentStatus}
                        onChange={props.handleInputData}
                        className="form-check-input"
                    />
                </div>

                <button className="btn btn-primary">Add</button>
            </form>
        </div>
    );
}

export default StudentForm;

