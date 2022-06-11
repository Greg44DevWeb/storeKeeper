const express = require("express"); // Express 
const cors = require("cors"); // Headers compiler
const morgan = require("morgan"); // Console logger
// const db = require("./config/db"); // Database config and access
const path =  require("path"); 
const helmet = require('helmet');

// Methode Express
const app = express();
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); //extrait le corps JSON du frontend
app.use(express.urlencoded({ extended: true }));

//***  gestion des parametres CORS - requète AJAX interdites ***//
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
  next();
});

//****** IMPORTS ET ROUTES PRINCIPALES ******//
  const usersRoutes = require("./Routes/users");
//   const productRoutes = require("./Routes/products");
//   const recipesRoutes = require("./Routes/recipes");
//   const commandRoutes = require('./Routes/commands');

  app.use("/api/users", usersRoutes);
//   app.use("/api/products", productRoutes);
//   app.use("/api/recipes", recipesRoutes);
//   app.use("api/commands", commandRoutes);

app.use('/images', express.static(path.join(__dirname, 'images')));


module.exports = app;