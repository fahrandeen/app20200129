const baseUrl =process.env.REACT_APP_BASE_URL
// "start": "json-server --static ./build db.json" 

export const loadStudents = () =>{
    return fetch(baseUrl)
    .then(res=>res.json())
}

export const createStudent = (student) =>{
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(student)
    }).then(res => res.json())
    // .catch(err => {
    //     console.log("error : "+err)
    // })
}

export const saveStudent = (student) =>{
    return fetch(`${baseUrl}/${student.id}`, {
        method: 'PUT',
        headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(student)
    }).then(res => res.json())
}

export const destroyStudent = (id) =>{
    return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        }
    })
}


const baseUrl1 = "https://dummy.restapiexample.com/api/v1/employees"
export const loadEmployees = () =>{
    return fetch(baseUrl1)
    .then(res => res.json())
}

export const createEmployee = (employee) => {
    return fetch(baseUrl1, {
        method: 'POST',
        headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(employee)
    }).then(res => res.json())
}