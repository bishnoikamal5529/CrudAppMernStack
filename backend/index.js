const express = require("express")
const app = express();
const PORT = require("./config");

app.listen(PORT, ()=> {
    console.log("Server started on port" + PORT);
});

app.use("/", (req,res)=> {
    res.status(200).send("Server working");
})