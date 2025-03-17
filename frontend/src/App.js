import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/employees')
            .then(response => setEmployees(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Employee Tracker</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Title</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.first_name}</td>
                            <td>{emp.last_name}</td>
                            <td>{emp.title}</td>
                            <td>{emp.department}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;