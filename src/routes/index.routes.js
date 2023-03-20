import express from 'express';
import controller from "../controllers/controller.js";
import path from "path";

const routes = express.Router();


routes.get("/empleados",controller.empleados);


export default routes;