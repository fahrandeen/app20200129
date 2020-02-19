import React from 'react';

const StudentEditForm = (props) => {
    return (
        <div className="container">
            <form>
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
                <button onClick={props.handleUpdateStudent}  className="btn btn-primary">Update</button>
                <button onClick={() => props.setEditing(false)}  className="btn btn-primary">Cancel</button>
            </form>
        </div>
    );
}

export default StudentEditForm;