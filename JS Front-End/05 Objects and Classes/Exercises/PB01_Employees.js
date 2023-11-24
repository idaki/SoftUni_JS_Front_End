

function printEmployeeNames(strArrayEmployees) {
    let employees = [];

    strArrayEmployees.forEach(entry => {
        let employee = {
            name: entry,
            id: entry.length
        };
        employees.push(employee);
    });

    employees.forEach(employee => {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.id}`);
    });
}

printEmployeeNames([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);