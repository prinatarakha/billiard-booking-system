import { Request, Response } from "express";
import * as Services from "./tables.services";

export const createTable = async (req: Request, res: Response) => {
  const params = { number: req.body.number, brand: req.body.brand };
  const response = await Services.createTable(params);
  return res.status(response.status).json(response.data);
}

export const getTables = async (req: Request, res: Response) => {
  const params = { 
    page: req.query.page ? parseInt(req.query.page as string) : undefined, 
    pageSize: req.query.limit ? parseInt(req.query.limit as string) : undefined, 
  }
  const response = await Services.getTables(params);
  return res.status(response.status).json(response.data);
}

export const getTable = async (req: Request, res: Response) => {
  const params = { id: req.params.id }
  const response = await Services.getTable(params);
  return res.status(response.status).json(response.data);
}

export const deleteTable = async (req: Request, res: Response) => {
  const params = { id: req.params.id }
  const response = await Services.deleteTable(params);
  return res.status(response.status).json(response.data);
}

export const updateTables = async (req: Request, res: Response) => {
  const params = { tables: req.body.tables }
  const response = await Services.updateTables(params);
  return res.status(response.status).json(response.data);
}