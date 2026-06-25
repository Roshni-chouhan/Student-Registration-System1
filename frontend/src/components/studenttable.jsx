function StudentTable({ students }) {
  return (
    <div className="card p-4 shadow">
      <h3 className="mb-3">
        Students List
      </h3>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Enrollment</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Branch</th>
          </tr>
        </thead>

        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No Students Added
              </td>
            </tr>
          ) : (
            students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.enrollmentNumber}</td>
                <td>{student.email}</td>
                <td>{student.mobileNumber}</td>
                <td>{student.branch}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;