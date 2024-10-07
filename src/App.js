import React, { useState } from 'react';

function App() {
  const [students, setStudents] = useState([]); // Array to hold the students
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [major, setMajor] = useState('');

  // Function to add a student to the list
  const addStudent = () => {
    if (!name || !age || !major) {
      alert("Please fill out all fields.");
      return;
    }

    if (isNaN(age)) {
      alert("Please enter a valid age.");
      return;
    }

    const newStudent = { name, age: parseInt(age), major };
    setStudents([...students, newStudent]); // Add new student to the array
    setName(''); // Clear the form inputs
    setAge('');
    setMajor('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Student Information System</h1>
      <p>Developed By: StudentID || Student Name || DevOps</p>

      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter student's name"
        />
      </div>

      <div>
        <label>Age:</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter student's age"
        />
      </div>

      <div>
        <label>Major:</label>
        <input
          type="text"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          placeholder="Enter student's major"
        />
      </div>

      <button onClick={addStudent} style={{ marginTop: '10px', padding: '5px 10px' }}>Add Student</button>

      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students added yet</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {students.map((student, index) => (
            <li key={index} style={{ marginTop: '10px' }}>
              <strong>{student.name}</strong>
              <p>Age: {student.age}</p>
              <p>Major: {student.major}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
