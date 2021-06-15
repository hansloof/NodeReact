const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Server running");
});

app.get("/api/programs", (req, res) => {
  fs.readFile("./programs.json", (err, data) => {
    if (err) throw err;

    res.status(200).json(Object.values(JSON.parse(data)));
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
        res.status(404).json(`Failed to add program`);
      }
    }

    const program = {
      id,
      instructorId: req.body.instructorId,
      title: req.body.title,
    };

    jsonContentArray.push(program);

    fs.writeFile(
      "./programs.json",
      JSON.stringify(jsonContentArray, null, 2),
      (err) => {
        if (err) throw err;
      }
    );

    res.status(200).json(`Added program: ${JSON.stringify(program)}`);
  });
});

const port = 3001;

app.listen(port, () => console.log(`Server started on port ${port}`));
