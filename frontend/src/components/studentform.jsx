import { useState } from "react";

function StudentForm({ addStudent }) {
  const [student, setStudent] = useState({
    name: "",
    enrollmentNumber: "",
    email: "",
    mobileNumber: "",
    branch: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addStudent(student);

    setStudent({
      name: "",
      enrollmentNumber: "",
      email: "",
      mobileNumber: "",
      branch: "",
    });
  };

  return (
    <div className="card p-4 shadow">
      <h3 className="mb-3">
        Register Student
      </h3>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          placeholder="Name"
          name="name"
          value={student.name}
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          placeholder="Enrollment Number"
          name="enrollmentNumber"
          value={student.enrollmentNumber}
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          type="email"
          placeholder="Email"
          name="email"
          value={student.email}
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          placeholder="Mobile Number"
          name="mobileNumber"
          value={student.mobileNumber}
          onChange={handleChange}
          required
        />

        <select
          className="form-select mb-3"
          name="branch"
          value={student.branch}
          onChange={handleChange}
          required
        >
          <option value="">Select Branch</option>
          <option>CSE</option>
          <option>IT</option>
          <option>ECE</option>
          <option>ME</option>
          <option>CE</option>
        </select>

        <button className="btn btn-primary w-100">
          Register Student
        </button>
      </form>
    </div>
  );
}

export default StudentForm;