import dotenv from "dotenv";
import express from "express";
import { start_server } from "./server.mjs";
dotenv.config();
const domainUrl = process.env.DOMAINURL_DEV;
function start (){
  start_server();
}

start();
