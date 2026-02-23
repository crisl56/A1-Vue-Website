import express from "express";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

const app = express();
app.use(express.json());

const pool = mysql.createPool({
    host: process.env.sqlDB_HOST ?? "localhost",
    user: process.env.sqlDB_USER,
    password: process.env.sqlDB_PASSWORD,
    database: process.env.sqlDB_NAME,
    waitForConnections: true,
    connectionLimit: 10
});

type LeaderboardItem = {
    player: string;
    score: number;
};

let leaderboardData: LeaderboardItem[]

async function GetLeaderBoard() {
    const db = await mysql.createConnection({
        host: process.env.sqlDB_HOST ?? "localhost",
        user: process.env.sqlDB_USER,
        password: process.env.sqlDB_PASSWORD,
        database: process.env.sqlDB_NAME,
    });

    try {
        const [rows] = await db.execute(
            "SELECT name AS player, score FROM leaderboard ORDER BY score DESC"
        );


        leaderboardData = rows as LeaderboardItem[];

        console.log(leaderboardData);
    }
    catch (err) {
        console.log("Failed to get Database Info:", err);
    }
    finally {

        await db.end();
    }
}

//const PORT = Number(process.env.PORT);
//app.listen(PORT, async () => {
//    console.log(`API on http://localhost:${process.env.PORT}`);

//    await GetLeaderBoard();
//})

app.use(express.json());

app.get(`/api/ping`, async (req: Request, res: Response) => {

    await GetLeaderBoard();

    res.json({ message: "OK" });
});

app.get("/api/leaderboard-summary", async (req: Request, res: Response) => {

    await GetLeaderBoard();

    res.json(leaderboardData.slice(0, 5));
});

app.get("/api/leaderboard-full", async (req: Request, res: Response) => {

    await GetLeaderBoard();

    res.json(leaderboardData);
});

// MONGO DB stuff

import { connectDB } from "./db";

import usersRoutes from "./src/routes/users.ts";
import feedbackRoutes from "./src/routes/feedback.ts";

dotenv.config();

// lol using the same one in class :P
app.get("/", (req, res) => res.json({ ok: true, service: "school-spencer-api" }));

app.use("/api/users", usersRoutes);
app.use("/api/feedbacks", feedbackRoutes);

async function start() {
    try {
        await connectDB(process.env.MONGODB_URI);
        const port = Number(process.env.PORT);
        app.listen(port, () => console.log(`Listening on http:..localhost:${port}`))

    } catch (err: any) {
        console.error("Startup error", err?.message);
        process.exit(1); // stopp all processes
    }
};

start();
