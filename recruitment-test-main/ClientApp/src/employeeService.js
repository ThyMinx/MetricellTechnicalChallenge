export async function getAllEmployees() {

    const response = await fetch('/List/GetEmployeeList');
    return await response.json();
}

export async function createEmployee(data) {
    const response = await fetch('/List/PostEmployee', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
    return await response.json();
}