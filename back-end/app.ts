import Express, { Request, Response, NextFunction } from "express";

import ApiRoute from "./routes/api";

const app = Express();
const PORT = process.env.PORT || 6666;

app.use(Express.json());
app.use(Express.urlencoded());

app.use((req: Request, res: Response, next: NextFunction) => {
    let now = new Date();
    console.log(`${now.toLocaleDateString()} @ ${now.toLocaleTimeString()} :: ${req.method} request to ${req.path}, query: ${JSON.stringify(req.query)}`);
    next();
})

app.use("/api", ApiRoute);

app.use("*", (req: Request, res: Response) => {
    console.log("End of the line...");
    res.send("Nothing");
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})