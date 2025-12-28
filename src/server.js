import express from "express";
import path, {dirname} from "path";
import {fileURLToPath} from "url";
import authRoutes from  "./routes/authRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";


const PORT = process.env.PORT || 8080
const app = express();
 app.use(express.json())

// Get the file from the URL of the current module
const __filename = fileURLToPath(import.meta.url);
// Serving up the html file from the public directory
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, "public")))






app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, "public", "index.html"))
})



// Routes

app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);

app.listen(PORT, () => {
console.log(`Yo! its time go backend via ${PORT}` )
})


