export const filterStudents = (list, route) => {
    switch (route) {
        case '/active':
            return list.filter(item => !item.studentStatus)
        case '/complete':
            return list.filter(item => item.studentStatus)
        default:   
        return list
    
    }
}