const express = require("express");
const connectToMongo=require("./db")
connectToMongo();
const app = express();
const port = 3000
app.use(express.json())

app.use("/api/auth", require("./routes/auth"))
// app.use("/api/items", require("./routes/items"))


app.listen(port, () => {
    console.log("server is running");
});
