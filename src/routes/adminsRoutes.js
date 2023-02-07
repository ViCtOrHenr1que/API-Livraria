import express from "express";
import AdminControler from "../controllers/adminController.js";

const router = express.Router();

router
    .get("/admins", AdminControler.listarAdmins)
    .get("/admin/:id", AdminControler.listarAdminPorId)
    .post("/admin", AdminControler.cadastrarAdmin)
    .put("/admin/:id", AdminControler.atualizarAdimin)
    .delete("/admin/:id", AdminControler.deletarAdmin)






export default router;


