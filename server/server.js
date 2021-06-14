const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  return res.status(200).send("Server running");
});

app.get("/api/programs", (req, res) => {
  fs.readFile("./programs.json", (err, data) => {
    if (err) throw err;

    res.status(200).send(Object.values(JSON.parse(data)));
  });
});

app.get("/api/program/:id", (req, res) => {
  fs.readFile("./programs.json", (err, data) => {
    if (err) throw err;
    let jsonContentArray = Object.values(JSON.parse(data));

    const program = jsonContentArray.find(
      (p) => p.id === parseInt(req.params.id)
    );
    if (!program) {
      return res
        .status(404)
        .send(
          `The program with the given ID ${parseInt(
            req.params.id
          )} was not found`
        );
    }

    return res.status(200).send(program);
  });
});

app.post("/api/program", (req, res) => {
  fs.readFile("./programs.json", (err, data) => {
    if (err) throw err;
    let jsonContentArray = Object.values(JSON.parse(data));

    const id = jsonContentArray.length + 1;

    for (var i in jsonContentArray) {
      if (jsonContentArray[i].id === id) {
        console.log(`ID ${id} already exist`);
        return res.status(404).send(`Could not add program`);
      }
    }

    const program = {
      id,
      instructorId: req.body.program.instructorId,
      title: req.body.program.title,
    };

    jsonContentArray.push(program);

    fs.writeFile(
      "./programs.json",
      JSON.stringify(jsonContentArray, null, 2),
      (err) => {
        if (err) throw err;
        console.log("Data written to file");
      }
    );

    res.status(200).send("program added");
  });
});

const port = 3001;

app.listen(port, () => console.log(`Server started on port ${port}`));
