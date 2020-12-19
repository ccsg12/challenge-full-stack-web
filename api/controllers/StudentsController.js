const express = require("express");
const router = express.Router();
const Students = require("../models/Students");

//lista os estudantes cadastrados
router.get("/students", (req, res) => {
  res.statusCode = 200;

  Students.findAll().then((students) => {
    res.json(students);
  });
});

//cadastra aluno
router.post("/student", (req, res) => {
  var { name, cpf, email, ra } = req.body;

  if (
    name != undefined &&
    cpf != undefined &&
    email != undefined &&
    ra != undefined
  ) {
    Students.create({
      name,
      cpf,
      email,
      ra,
    }).then(() => {
      res.sendStatus(200);
    });
  } else {
    res.sendStatus(409);
  }
});

//deletar cadastro
router.delete("/student/:id", (req, res) => {
  var id = req.params.id;

  if (isNaN(id)) {
    res.sendStatus(400);
  } else {
    id = parseInt(id);

    Students.findByPk(id).then((student) => {
      if (student != undefined) {
        Students.destroy({
          where: { id },
        }).then(() => {
          res.sendStatus(200);
        });
      } else {
        res.sendStatus(404);
      }
    });
  }
});

//editar cadastro de aluno por id
router.put("/student/:id", (req, res) => {
  var id = req.params.id;

  if (isNaN(id)) {
    res.sendStatus(400);
  } else {
    id = parseInt(id);

    Students.findByPk(id).then((student) => {
      if (student != undefined) {
        var { name, email } = req.body;

        if (name != undefined) {
          Students.update({ name }, { where: { id } });
        }

        if (email != undefined) {
          Students.update({ email }, { where: { id } });
        }

        res.sendStatus(200);
      } else {
        res.sendStatus(404);
      }
    });
  }
});

//encontra cadastro por id
router.get("/student/:id", (req, res) => {
  var id = req.params.id;

  if (isNaN(id)) {
    res.sendStatus(400);
  } else {
    id = parseInt(id);

    Students.findByPk(id).then((student) => {
      if (student != undefined) {
        res.statusCode = 200;
        res.json(student);
      } else {
        res.sendStatus(404);
      }
    });
  }
});

module.exports = router;
