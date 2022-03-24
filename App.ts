import express, { Request, Response } from "express";

//settings
import { Settings } from './Config/Server'
const app = express();

// Parse JSON 
app.use(express.json());


//boiler plate
app.get("/", (req: Request, res: Response) => {
    res.json({
        message: "Hello, this is Node.js, Express.js and TypeScript."
    })
})


app.listen(Settings.PORT, () => {
    console.log(`Server is running on port ${Settings.PORT}`);
})