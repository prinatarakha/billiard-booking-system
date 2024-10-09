import express from "express";
import validateRequest from "../middlewares/validateRequest";
import * as DTO from "./waitingList.dto";
import * as Handlers from "./waitingList.handlers";

const router = express.Router();

router.post("/v1/waiting-list", validateRequest(DTO.CreateWaitingListEntryRequest), Handlers.createWaitingListEntry);
router.get("/v1/waiting-list", validateRequest(DTO.GetWaitingListEntriesRequest), Handlers.getWaitingListEntries);
router.get("/v1/waiting-list/:id", validateRequest(DTO.GetWaitingListEntryRequest), Handlers.getWaitingListEntry);
// router.delete("/v1/waiting-list/:id", validateRequest(DTO.DeleteWaitingListEntryRequest), Handlers.deleteWaitingListEntry);
// router.put("/v1/waiting-list", validateRequest(DTO.UpdateWaitingListEntriesRequest), Handlers.updateWaitingListEntries);

export default router;