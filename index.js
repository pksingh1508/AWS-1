const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();


app.get("/", (req, res) => {
    res.send("This is the home page and i updated it for checking the result.");
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})