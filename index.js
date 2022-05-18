// Write your solution in this file!
 const employee = {name: "Vanessa",
    streetAddress: "123 Terpeschore"}

function updateEmployeeWithKeyAndValue (employee, key, value) {
    let newEmployee = {...employee}
    newEmployee[key]=value
    return newEmployee

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;

}

function deleteFromEmployeeByKey (employee, key) {
    const AnEmployee = {...employee};
    console.log("Hiiii", AnEmployee[key])
    delete AnEmployee[key];
    return AnEmployee

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
}