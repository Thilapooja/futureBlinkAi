import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const askAI = (prompt) => API.post("/ask-ai", { prompt });

export const saveData = (data) => API.post("/save", data);

export const getHistory = () => API.get("/history");