import express from "express";
import axios from "axios";

const port = 3000;
const app = express();
const API_URL = "https://v2.jokeapi.dev";
let categories = [];


app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
    const result = await axios.get(API_URL + "/joke/Any");
    const receivedJoke = {
        joke: result.data.joke,
        setup: result.data.setup,
        delivery: result.data.delivery,
    }; 
    res.render("index.ejs", receivedJoke);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
