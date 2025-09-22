import app from "../server.js"; // your express app
import serverless from "serverless-http";

export default serverless(app);
