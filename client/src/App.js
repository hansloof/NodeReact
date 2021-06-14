import Header from "./components/Header";
import Programs from "./components/Programs";
import CreateProgram from "./components/CreateProgram";
import { getAllPrograms, createProgram } from "./services/UserService";
import { useState, useEffect } from "react";

function App() {
  const [program, setProgram] = useState({});
  const [programs, setPrograms] = useState([]);

  const programCreate = (e) => {
    createProgram(program).then((response) => {
      console.log(response);
    });
  };

  const fetchAllPrograms = () => {
    getAllPrograms().then((programs) => {
      setPrograms(programs);
    });
  };

  useEffect(() => {
    getAllPrograms().then((programs) => {
      setPrograms(programs);
    });
  }, []);

  const onChangeForm = (e) => {
    if (e.target.name === "instructorId") {
      program.instructorId = e.target.value;
    } else if (e.target.name === "title") {
      program.title = e.target.value;
    }
    setProgram(program);
  };

  return (
    <div className="App">
      <Header />
      <CreateProgram
        program={program}
        onChangeForm={onChangeForm}
        createProgram={programCreate}
      ></CreateProgram>
      <Programs programs={programs} getAllPrograms={fetchAllPrograms} />
    </div>
  );
}

export default App;
