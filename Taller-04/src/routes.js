const express = require("express");
const router = express.Router();
const data = require("./data.json"); 

//Punto 1
//http://localhost:3000/users/hobby?hobby=lectura
router.get("/hobby", (req, res) => {
  const { hobby } = req.query;

  if (!hobby) {
    return res.status(400).json({ error: "Debe enviar el parámetro 'hobby'" });
  }

  const usuariosFiltrados = data.filter((user) => user.hobbies.includes(hobby));
  res.json(usuariosFiltrados);
});

//Punto 2
router.get("/exists", (req, res) => {
  const { codigo } = req.query;

  if (!codigo) {
    return res.status(400).json({ error: "Debe enviar el parámetro 'codigo'" });
  }

  const existe = data.some((user) => user.codigo === codigo);

  res.json({ exists: existe });
});

//Punto 3
router.get("/hobby/count", (req, res) => {
  const { hobby } = req.query;

  if (!hobby) {
    return res.status(400).json({ error: "Debe enviar el parámetro 'hobby'" });
  }

  const cantidad = data.filter((user) => user.hobbies.includes(hobby)).length;
  res.json({ count: cantidad });
});

//Punto 4
router.get("/is-free", (req, res) => {
  //tener menos de 3 hobbies significa tener tiempo libre
  const usuariosLibres = data.filter((user) => user.hobbies.length < 3);
  res.json(usuariosLibres);
});


//Punto 5
router.post("/suggest", (req, res) => {
  const { codigo, hobby } = req.body;

  if (!codigo || !hobby) {
    return res.status(400).json({ error: "Debe enviar codigo y hobby" });
  }

  const usuario = data.find((user) => user.codigo === codigo);

  if (!usuario) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }
  if (usuario.hobbies.length >= 3) {
    return res.json({
      message: "El usuario ya tiene 3 hobbies, no se agregó el nuevo hobby",
      user: usuario,
    });
  }

  usuario.hobbies.push(hobby);
  res.json({ message: "Hobby agregado correctamente", user: usuario });
});


// Punto 6
router.post("", (req, res) => {
    const { codigo, nombre, apellido, hobbies } = req.body;
  
    if (!codigo || !nombre || !apellido || !hobbies) {
      return res.status(400).json({
        error: "Debe enviar codigo, nombre, apellido y hobbies"
      });
    }
  
    if (!Array.isArray(hobbies) || hobbies.length < 2) {
      return res.status(400).json({
        error: "El usuario debe tener al menos 2 hobbies"
      });
    }
  
    const usuarioExistente = data.some((user) => user.codigo === codigo);
    if (usuarioExistente) {
      return res.status(400).json({
        error: `Ya existe un usuario con el código ${codigo}.`
      });
    }
  
    const nuevoUsuario = {
      codigo,
      nombre,
      apellido,
      hobbies
    };
  
    data.push(nuevoUsuario);
  
    return res.status(201).json({
      message: "Usuario creado exitosamente",
      user: nuevoUsuario
    });
  });

module.exports = router;
