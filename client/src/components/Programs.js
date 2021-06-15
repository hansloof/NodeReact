function Programs({ programs, getAllPrograms }) {
  const ProgramRow = (program, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{program.instructorId}</td>
        <td>{program.title}</td>
      </tr>
    );
  };

  const programTable = programs.map((program, index) =>
    ProgramRow(program, index)
  );

  return (
    <div>
      <h2>Programs</h2>
      <button onClick={(e) => getAllPrograms()}>Get all Programs</button>
      <table>
        <thead>
          <tr>
            <th>Program Id</th>
            <th>Instructor ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>{programTable}</tbody>
      </table>
    </div>
  );
}

export default Programs;
