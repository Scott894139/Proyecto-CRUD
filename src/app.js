import express from 'express';//para poder ir llamando variables de otra parte
import { create } from "express-handlebars";//este nos sirve para agregar html
import indexRoutes from './routes/index.routes';//este nos sirve para poder agregar varias rutas a nuestro poryecto
import path from 'path';//este nos sirve para poder concatenar con otros servidores
import morgan from 'morgan';


const app = express();


app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaulLayout: "main",
    extname: ".hbs",
  }).engine
);
app.set("view engine", ".hbs");


//middLewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

//Rutas
app.use(indexRoutes);

//static files
app.use(express.static(path.join(__dirname, "public")));

//hashing
var data = "asdf";
var crypto = require('crypto');
crypto.createHash('md5').update(data).digest("hex");

export default app;