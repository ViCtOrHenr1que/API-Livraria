import express from "express";
import AdminControler from "../controllers/adminController.js";

const router = express.Router();

router
    .get("/admins", AdminControler.listarAdmins)
    .get("/admins/:id", AdminControler.listarAdminPorId)
    .post("/admins", AdminControler.cadastrarAdmin)
    .put("/admins/:id", AdminControler.atualizarAdimin)
    .delete("/admins/:id", AdminControler.deletarAdmin)






export default router;


