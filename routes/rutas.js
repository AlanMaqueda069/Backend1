import {Router} from "express" //desestructuracion de {Routes}


const router = Router()

var artistas = ["Van Gog", "Bethoven", "Mozart", "Chopin", "Vivaldi"]
router.get("/", (req, res)=>{
    res.render("home", {artistas})
})


router.get("/info/:c/:texto", (req, res)=>{
    var c = req.params.c
    var texto = req.params.texto
    console.log(c)
    res.render("info",{c, texto})
})

// ------------------ RUTAS DE CONTACTO ------------------
// GET: muestra el formulario de contacto
router.get("/contacto", (req, res) => {
  // renderiza views/contact.ejs y le pasa mensaje (null por defecto)
  res.render("contact", { mensaje: null });
});

// POST: procesa el formulario de contacto
router.post("/contacto", (req, res) => {
  const { nombre, edad } = req.body;

  // validaciones simples
  if (!nombre || nombre.trim() === "") {
    return res.render("contact", { mensaje: "El nombre es obligatorio." });
  }

  if (edad && isNaN(parseInt(edad))) {
    return res.render("contact", { mensaje: "La edad debe ser un número." });
  }

  // Si todo OK, devolvemos un mensaje de éxito
  const edadTxt = edad ? `${parseInt(edad)} años` : "sin edad";
  const msg = `Datos recibidos: ${nombre.trim()} — ${edadTxt}.`;

  // Puedes aquí guardar en DB o enviar correo si quieres
  res.render("contact", { mensaje: msg });
});

export default router