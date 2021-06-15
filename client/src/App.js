import Header from "./components/Header";
import Programs from "./components/Programs";
import CreateProgram from "./components/CreateProgram";
import { getAllPrograms, createProgram } from "./services/UserService";
import { useState, useEffect } from "react";

function App() {
  const [program, setProgram] = useState({});
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    getAllPrograms().then((response) => {
      setPrograms(response);
    });
  }, []);

  const createProgramHandler = (e) => {
    createProgram(program).then((response) => {
      console.log(response);
    });
  };

  const getAllProgramsHandler = () => {
    getAllPrograms().then((response) => {
      console.log(response);
      setPrograms(response);
    });
  };

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
        createProgram={createProgramHandler}
      ></CreateProgram>
      <Programs programs={programs} getAllPrograms={getAllProgramsHandler} />
    </div>
  );
}

export default App;
