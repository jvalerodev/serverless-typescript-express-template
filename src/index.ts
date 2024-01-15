import express, { Request, Response } from "express";
import serverless from "serverless-http";

const app = express();

app.get("/", (_req: Request, res: Response) => {
  return res.status(200).json({
    message: "Hello from root!"
  });
});

app.get("/user", (_req: Request, res: Response) => {
  return res.status(200).json({ message: "Hello from user!" });
});

export const handler = serverless(app);
