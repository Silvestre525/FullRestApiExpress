import express from 'express';
import controller from "../controllers/controller.js";
import path from "path";

const routes = express.Router();


routes.get("/empleados",controller.empleados);
routes.post("/empleados",controller.postEmpleados);
routes.put("/empleados",controller.putEmpleados);
routes.delete("/empleados",controller.deleteEmpleados);


export default routes;