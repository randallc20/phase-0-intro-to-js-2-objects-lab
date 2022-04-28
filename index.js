// Write your solution in this file!
const employee = {
    name: "Christopher Randall",
    streetAddress: "2344 Timber Lane",
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    //create clone of obj
    const updatedEmployee = {...employee};
    //update key and value
    updatedEmployee[key] = value;
    //return
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const updatedEmployee = {...employee};
    delete updatedEmployee[key];
    return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}