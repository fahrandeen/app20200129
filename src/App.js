import React, { Component } from 'react';
import './App.css';
import StudentForm from './component/StudentForm';
import StudentList from './component/StudentList';
import StudentEditForm from './component/StudentEditForm';
import Header from './component/Header';

import { loadStudents, loadEmployees, createStudent, saveStudent, createEmployee, destroyStudent } from './lib/todoService'
import { PropTypes } from 'prop-types'
import { filterStudents } from './component/studentHelpers';
import EmployeeList from './component/EmployeeList';
import EmployeeForm from './component/EmployeeForm';

class App extends Component {
  state = {
    students: [],
    student: {},
    ID: null,
    studentName: '',
    studentAddress: '',
    studentStatus: false,
    editing: false,
    employees: [],
    employee: {},
    name:'',
    age:'',
    salary:''

  }

  static contextTypes = {
    route: PropTypes.string,
  }

  componentDidMount() {
    loadStudents()
      .then(students => this.setState({ students }))
    
    .then(loadEmployees()
      .then(employees => this.setState({ employees: employees })))

  }

  handleInputData = (evt) => {
    const target = evt.target
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    const x = this.state.students
    const newId = (x.length === 0) ? 1 : (parseInt(x[x.length - 1].id) + 1)
    const newStudent = { id: newId, studentName: this.state.studentName, studentAddress: this.state.studentAddress, studentStatus: this.state.studentStatus, }
    const updateStudent = [...this.state.students, newStudent]

    this.setState({
      students: updateStudent,
      studentName: '',
      studentAddress: '',
      studentStatus: false
    })
    createStudent(newStudent)
      .then(() => this.showTempMessage('Student Added'))
  }

  handleSubmitEmployee = (evt) => {
    evt.preventDefault()
    const x = this.state.employees
    const newId = x.data.length+1
    console.log(newId)
    const newEmployee = {id: newId, employee_name: this.state.name, employee_salary: this.state.salary, employee_age: this.state.age, profile_image: ""}
    console.log("newEmployee : ")
    console.log(newEmployee)
    const updateEmployee = [{data:'success'},{...this.state.employees.data, newEmployee}]
    console.log("updateEmployee : ")
    console.log(updateEmployee)
    this.setState({
      employees: updateEmployee,
      name:'',
      age:'',
      salary:''
    })
    createEmployee(newEmployee)
      .then(()=> this.showTempMessage('Employee Added'))

  }

  showTempMessage = (msg) => {
    this.setState({ message: msg })
    setTimeout(() => this.setState({ message: '' }), 2500)
  }

  handleDeleteStudent = (id) => {
    console.log("ID :" + id)
    const x = this.state.students
    const student = x.find(x => x.id === id)
    console.log(student)
    const studentIndex = x.findIndex(x => x.id === student.id)
    console.log(studentIndex)
    const removeStudent = [
      ...x.slice(0, studentIndex),
      ...x.slice(studentIndex + 1)
    ]
    //console.log(removeStudent)
    this.setState({
      students: removeStudent
    })
    console.log("id :: "+id)
    destroyStudent(id)
      .then(()=>this.showTempMessage('Student successfully deleted.'))
  }

  handleEditStudent = (student) => {
    this.setEditing(true)
    this.setState({
      studentName: student.studentName,
      studentAddress: student.studentAddress,
      studentStatus: student.studentStatus,
      student: student
    })
  }

  setEditing = (value) => {
    this.setState({
      editing: value
    })
  }

  handleUpdateStudent = (event) => {
    event.preventDefault()
    const updatedStudentName = this.state.studentName
    const updatedStudentAddress = this.state.studentAddress
    const updatedStudentStatus = this.state.studentStatus
    const updatedStudent = { ...this.state.student, studentName: updatedStudentName, studentAddress: updatedStudentAddress, studentStatus: updatedStudentStatus }
    console.log(updatedStudent)
    const students = this.state.students.map((student) => (
      (student.id === this.state.student.id) ? updatedStudent : student
    ))
    this.setState({
      studentName: '',
      studentAddress: '',
      studentStatus: false,
      editing: false,
      students: students,
    })

    saveStudent(updatedStudent)
      .then(() => this.showTempMessage('Student Details Updated.'))

  }
  render() {
    const displayStudents = filterStudents(this.state.students, this.context.route)

    return (
      <div className="container">
        <h2>App</h2>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4">
            {
              this.state.editing ? (
                <StudentEditForm
                  studentName={this.state.studentName}
                  studentAddress={this.state.studentAddress}
                  studentStatus={this.state.studentStatus}
                  handleInputData={this.handleInputData}
                  setEditing={this.setEditing}
                  handleUpdateStudent={this.handleUpdateStudent}
                />
              ) : (
                  <StudentForm
                    handleInputData={this.handleInputData}
                    handleSubmit={this.handleSubmit}
                    studentName={this.state.studentName}
                    studentAddress={this.state.studentAddress}
                    studentStatus={this.state.studentStatus}

                  />
                )}
          </div>
          <div className="col-sm-12 col-md-12 col-lg-8">
            {this.state.message &&
              <div className="alert alert-success">
                <strong>{this.state.message}</strong>
              </div>
            }
            <Header />
            <StudentList
              students={displayStudents}
              handleEditStudent={this.handleEditStudent}
              handleDeleteStudent={this.handleDeleteStudent}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4">
            <EmployeeForm
              handleInputData={this.handleInputData}
              handleSubmitEmployee={this.handleSubmitEmployee}
              name={this.state.name}
              salary={this.state.salary}
              age={this.state.age}
            />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <EmployeeList
              employees={this.state.employees.data}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;