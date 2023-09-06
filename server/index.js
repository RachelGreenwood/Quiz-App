import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api", async (req, res) => {
    const url = `https://opentdb.com/api.php?amount=10`;
    const response = await fetch(url);
    const quizData = await response.json()
    res.json(quizData);
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));