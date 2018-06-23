const express = require("express");
const router = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 4000;

app.use("/api", router);

app.listen(PORT, () => {
    console.log("Servert started on port", PORT);
});
