import path from 'path'; 
import express from 'express';  // const express = require('express');

const app = express();
import routes from "./src/routes/index.routes.js";


app.use("/", routes);

app.listen(process.env.PORT || 3000, () => console.log('Servidor funcionando en 3000'))

