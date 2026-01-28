import express, { type Request, type Response } from "express";
import cors from "cors";

type LeaderboardItem = {
    player: string;
    score: number;
};

// define full leaderboard here

let leadboardData: LeaderboardItem[] = [
    { player: "Spencer", score: 9998 },
    { player: "Raf", score: 9997 },
    { player: "Cris", score: 777 },
    { player: "Dylan", score: 234 },
    { player: "Vi", score: 226 },
    { player: "Ken", score: 124 },
    { player: "Felipe", score: 4123 },
    { player: "Vinnicius", score: 543 },
    { player: "Nick", score: 564 },
    { player: "Kiran", score: 442 },
    { player: "Julian", score: 754 },
]


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get(`/api/ping`, (req: Request, res: Response) => {
    res.json({ message: "OK" });
});

app.get("/api/leaderboard-summary", (req: Request, res: Response) => {
    const summaryData: LeaderboardItem[] = [
        leadboardData[0], leadboardData[1], leadboardData[2], leadboardData[3], leadboardData[4]
    ];

    res.json(summaryData);
});

app.get("/api/leaderboard-full", (req: Request, res: Response) => {
    // Add fetch here for full leadboard

    res.json(leadboardData);
});

// TODO: create a second fetch for only getting 5 elements for a summary
//       or create a whole json file and make one that only gets 5 and another gets the whole

app.listen(PORT, () => {
    console.log(`Backend server is running at http://localhost:${PORT}`);
});

// gotta write the other ones
// post, delete, etc