import React from 'react';
import deleteIcon from './images/delete.png'
import editIcon from './images/edit.png'

const StudentList = (props) => {
    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr className="table-danger">
                        <th>ID</th>
                        <th>Student Name</th>
                        <th>Student Status</th>
                        <th>Student Address</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {props.students.map(x =>
                        <tr key={x.id}  className="table-success">
                            <td>{x.id}</td>
                            <td>{x.studentName}</td>
                            <td><input
                                type="checkbox"
                                checked={x.studentStatus}
                                readOnly
                            />
                            </td>
                            <td>{x.studentAddress}</td>
                            <td><a href="#" onClick={() => props.handleEditStudent(x)}><img src={editIcon} alt="Delete" width="20px" /></a></td>
                            <td><a href="#" onClick={() => props.handleDeleteStudent(x.id)}><img src={deleteIcon} alt="Delete" width="20px" /></a></td>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
    );
}

export default StudentList;