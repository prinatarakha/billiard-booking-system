import express from "express";
import validateRequest from "../middlewares/validateRequest";
import * as DTO from "./tables.dto";
import * as Handlers from "./tables.handlers";

const router = express.Router();

router.post("/v1/tables", validateRequest(DTO.CreateTableRequest), Handlers.createTable);
router.get("/v1/tables", validateRequest(DTO.GetTablesRequest), Handlers.getTables);
router.get("/v1/tables/:id", validateRequest(DTO.GetTableRequest), Handlers.getTable);

export default router;