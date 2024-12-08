import express, { Router } from "express";
import { ModuleRoute } from "../interface";
import endeRoute from '../modules/ende/ende.route';
const router: Router = express.Router();

const moduleRouters: ModuleRoute[] = [
  {
    path: "/ende",
    route: endeRoute,
  },
];

moduleRouters.forEach((route) => router.use(route.path, route.route));

router.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

export default router;
