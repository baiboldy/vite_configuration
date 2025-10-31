import axios from "axios";
import { appConfig } from "@shared/config/app-config.ts";

export const client = axios.create({
  baseURL: appConfig.api.baseUrl,
  timeout: 5000,
});
