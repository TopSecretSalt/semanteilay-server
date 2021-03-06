import { Router } from "express";
import {
  addGuess,
  getAllGuesses,
  getTeamGuesses,
} from "../services/guessService";

const guessRouter = Router();

guessRouter.post("/", async (req, res) => {
  try {
    const guess = await addGuess(req.body);
    res.send(guess);
  } catch (err) {
    res.status(500).send((err as Error).message);
  }
});

guessRouter.get("/", async (req, res) => {
  try {
    const guesses = await getAllGuesses();
    res.send(guesses);
  } catch (err) {
    res.status(500).send((err as Error).message);
  }
});

guessRouter.get("/:id", async (req, res) => {
  try {
    const guesses = await getTeamGuesses(req.params.id);
    res.send(guesses);
  } catch (err) {
    res.status(500).send((err as Error).message);
  }
});

export default guessRouter;
